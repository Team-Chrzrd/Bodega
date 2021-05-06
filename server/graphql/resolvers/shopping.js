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
  },
};
