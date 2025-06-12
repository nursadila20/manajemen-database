const database = 'UAS';
const collection = 'NURSADILA';

use(database);
db.createCollection(collection);

db[collection].aggregate([
  {
    $group: {
      _id: "$kategori",
      total_stok: { $sum: "$stok" }
    }
  }
]);
