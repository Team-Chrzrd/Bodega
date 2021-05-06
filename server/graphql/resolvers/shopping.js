const db = require('../../db.js');

module.exports = {
  Query: {
    async getItems(root, args, context) {
      const qStr =
        'SELECT shopping.*, pantry.qty AS pantry_qty, pantry.par AS pantry_par FROM shopping LEFT OUTER JOIN pantry ON shopping.pantry_id = pantry._id;';
      try {
        const qres = await db.query(qStr);

        return qres.rows;
      } catch (error) {
        console.log('error in shopping.js/getItems', error);
        return [];
      }
    },
    async getItem(root, args, context) {
      const item_id = args.itemId;
      const qStr = `SELECT shopping.*, pantry.qty AS pantry_qty, pantry.par AS pantry_par FROM shopping LEFT OUTER JOIN pantry ON shopping.pantry_id = pantry._id WHERE shopping._id = ${item_id};`;
      try {
        const qres = await db.query(qStr);
        console.log(qres.rows);
        return qres.rows;
      } catch (error) {
        console.log('error in shopping.js/getItems', error);
        return [];
      }
    },
  },
  Mutation: {
    async shoppingSubmit(_, args) {
      try {
        const newItem = args;
        const qStr = `INSERT INTO shopping (user_id, item_name, note, unit, list_qty, buy_qty, category) VALUES ('1', '${newItem.itemName}', '${newItem.note}', '${newItem.unit}', '${newItem.listQty}', '0','${newItem.category}')
      RETURNING *;`;
        await db.query(qStr);
        return { success: true };
      } catch (error) {
        console.log('error in shopping.js/shoppingBuyUp', error);
        return { success: false };
      }
    },

    async shoppingUpdate(_, args) {
      try {
        const item_id = args.itemId;
        const item = args;
        const qStr = `UPDATE shopping
      SET (item_name, note, unit, list_qty, category) = ('${item.itemName}', '${item.note}', '${item.unit}', ${item.listQty},'${item.category}')
      WHERE _id = ${item_id};`;
        await db.query(qStr);
        return { success: true };
      } catch (error) {
        console.log('error in shopping.js/shoppingUpdate', error);
        return { success: false };
      }
    },

    async shoppingBuyUp(_, args) {
      try {
        const item_id = args.itemId;
        const userId = 1;
        const qStr = `UPDATE shopping
      SET buy_qty = buy_qty + 1
      WHERE _id = ${item_id};`;
        await db.query(qStr);
        return { success: true };
      } catch (error) {
        console.log('error in shopping.js/shoppingBuyUp', error);
        return { success: false };
      }
    },

    async shoppingBuyDown(_, args) {
      try {
        const item_id = args.itemId;
        const userId = 1;
        const qStr = `UPDATE shopping
      SET buy_qty = buy_qty - 1
      WHERE _id = ${item_id};`;
        await db.query(qStr);
        return { success: true };
      } catch (error) {
        console.log('error in shopping.js/shoppingBuyDown', error);
        return { success: false };
      }
    },

    async shoppingListUp(_, args) {
      try {
        const item_id = args.itemId;
        const userId = 1;
        const qStr = `UPDATE shopping
        SET list_qty = list_qty + 1
        WHERE _id = ${item_id};`;
        await db.query(qStr);
        return { success: true };
      } catch (error) {
        console.log('error in shopping.js/shoppingListUp', error);
        return { success: false };
      }
    },

    async shoppingListDown(_, args) {
      try {
        const item_id = args.itemId;
        const userId = 1;
        const qStr = `UPDATE shopping
        SET list_qty = list_qty - 1
        WHERE _id = ${item_id};`;
        await db.query(qStr);
        return { success: true };
      } catch (error) {
        console.log('error in shopping.js/shoppingListDown', error);
        return { success: false };
      }
    },

    async shoppingRemove(_, args) {
      try {
        const item_id = args.itemId;
        const qStr = `DELETE FROM shopping
      WHERE _id = ${item_id}
      RETURNING *;`;
        await db.query(qStr);
        return { success: true };
      } catch (error) {
        console.log('error in shopping.js/shoppingRemove', error);
        return { success: false };
      }
    },

    async shoppingCheckout() {
      try {
        let qStr =
          "SELECT * FROM shopping WHERE user_id = '1' AND buy_qty > 0;";
        const qres = await db.query(qStr);
        const basket = qres.rows;
        basket.forEach(async (item) => {
          if (item.pantry_id) {
            qStr = `SELECT * FROM pantry WHERE _id = ${item.pantry_id};`;
            const qres1 = await db.query(qStr);
            const pantryItem = qres1.rows[0];
            qStr = `UPDATE pantry
                SET qty = ${pantryItem.qty + item.buy_qty}
                WHERE _id = ${item.pantry_id} RETURNING *;`;
            await db.query(qStr);
            qStr = `UPDATE shopping
              SET (buy_qty, list_qty) = (0, ${Math.max(
                0,
                item.list_qty - item.buy_qty
              )})
              WHERE _id = ${item._id} RETURNING *;`;
            await db.query(qStr);
          } else {
            qStr = `INSERT INTO pantry (user_id, item_name, note, unit, qty, par, category) VALUES ('1','${item.item_name}', '${item.note}', '${item.unit}', '${item.buy_qty}', '0', '${item.category}') RETURNING *;`;
            const qres2 = await db.query(qStr);
            const pantry_id = qres2.rows[0]._id;
            qStr = `UPDATE shopping
          SET (pantry_id, list_qty, buy_qty ) = ('${pantry_id}', ${Math.max(
              0,
              item.list_qty - item.buy_qty
            )},0 )
          WHERE _id = ${item._id} RETURNING *;`;
            await db.query(qStr);
          }
          return { success: true };
        });
      } catch (error) {
        console.log('error in shopping.js/shoppingCheckout', error);
        return { success: false };
      }
    },

    async shoppingAddFromPantry(_, args) {
      try {
        const item_id = args.itemId;
        qStr = `SELECT * FROM shopping WHERE pantry_id = ${item_id};`;
        const qres = await db.query(qStr);
        const pantryItem = qres.rows[0];
        if (!pantryItem) {
          const qStr = `INSERT INTO shopping (user_id, pantry_id, item_name, note, unit, list_qty, buy_qty, category)
            SELECT user_id, _id, item_name, note, unit, '1', '0', category
            FROM pantry
            WHERE _id = ${item_id} RETURNING *;`;
          await db.query(qStr);
          return { success: true };
        } else {
          const qStr = `UPDATE shopping
            SET list_qty = '${pantryItem.list_qty + 1}'
            WHERE pantry_id = ${item_id};`;
          await db.query(qStr);
          return { success: true };
        }
      } catch (error) {
        console.log('error in shopping.js/shoppingCheckout', error);
        return { success: false };
      }
    },
  },
};
