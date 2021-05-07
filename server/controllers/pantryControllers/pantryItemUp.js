const db = require('../../db.js');

// decrease the pantry item qty by 1
const pantryItemUp = (req, res, next) => {
  const { id } = req.params;

  const pantryUp = 'UPDATE pantry SET qty = qty + 1 WHERE _id = $1;';
  const values = [id];

  db.query(pantryUp, values)
    .then(() => next())
    .catch((err) =>
      next({
        log: 'pantryController.pantryItemUp ' + `${err}`,
        message: {
          err: 'SQL query failed',
        },
      })
    );
};

module.exports = pantryItemUp;
