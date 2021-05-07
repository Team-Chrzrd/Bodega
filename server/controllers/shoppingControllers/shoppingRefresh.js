const db = require('../../db.js');

// remove items from shopping where (list_qty <= 0)
// add items to shopping (list_qty = par - qty, pantry_id = pantry._id)
// find items in pantry that are low on stock where (par > qty)
// find out if item from pantry is already in shopping
// if cooresponding shopping item does not exist, create one.
// if a corresponding shopping item does exist, update list_qty to be max(list_qty, par-qty)

// const shoppingRefresh = (req, res, next) => {
//   let qStr = `DELETE FROM shopping WHERE user_id = '1' AND list_qty <= 0 RETURNING *;`;
//   return db
//     .query(qStr)
//     .then((qres) => {
//       qStr = `SELECT * FROM pantry WHERE user_id = '1' AND par > qty;`;
//       return db.query(qStr);
//     })
//     .then((qres) => {
//       const importList = qres.rows;
//       importList.forEach((newItem) => {
//         qStr = `SELECT * FROM shopping WHERE pantry_id = ${newItem._id};`;
//         return db
//           .query(qStr)
//           .then((qres) => {
//             return qres.rows[0] ? qres.rows[0] : false;
//           })
//           .then((pantryItem) => {
//             if (!pantryItem) {
//               qStr = `INSERT INTO shopping (user_id, pantry_id, item_name, note, unit, list_qty, buy_qty, category)
//                 VALUES ('1','${newItem._id}', '${newItem.item_name}', '${
//                 newItem.note
//               }', '${newItem.unit}',
//                 '${newItem.par - newItem.qty}', 0, '${newItem.category}');`;
//               return db.query(qStr);
//             } else {
//               const qStr = `UPDATE shopping
//                 SET list_qty = ${Math.max(
//                   pantryItem.list_qty,
//                   newItem.par - newItem.qty,
//                 )}
//                 WHERE pantry_id = ${newItem._id};`;
//               return db.query(qStr);
//             }
//           });
//       });
//     })
//     .then(() => {
//       return next();
//     })
//     .catch(() => {
//       return next({
//         log: 'shoppingController.shoppingRefresh error',
//         message: { err: 'SQL query failed' },
//       });
//     });
// };

async shoppingRefresh (root, args, context){
  const qStr = `DELETE FROM shopping WHERE user_id = '1' AND list_qty <= 0 RETURNING *;`;
  await db.query(qStr)

  let qStr2 = `SELECT * FROM pantry WHERE user_id = '1' AND par > qty;`;
  const qres2 = await db.query(qStr2);

  const importList = qres2.rows;

  importList.forEach((newItem) => {
      let qStr3 = `SELECT * FROM shopping WHERE pantry_id = ${newItem._id};`;
      let qres3 = await db.query(qStr3)

      const pantryItem = qres3.rows[0] ? qres3.rows[0] : false;
        if (!pantryItem) {
          qStr4 = `INSERT INTO shopping (user_id, pantry_id, item_name, note, unit, list_qty, buy_qty, category)
                    VALUES ('1','${newItem._id}', '${newItem.item_name}', '${
                newItem.note
              }', '${newItem.unit}',
                '${newItem.par - newItem.qty}', 0, '${newItem.category}');`;
              await db.query(qStr);
            } else {
              const qStr = `UPDATE shopping
                SET list_qty = ${Math.max(
                  pantryItem.list_qty,
                  newItem.par - newItem.qty,
                )}
                WHERE pantry_id = ${newItem._id};`;
              await db.query(qStr);
            }
      });
};

module.exports = shoppingRefresh;
