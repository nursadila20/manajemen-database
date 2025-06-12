const database = 'UAS';
const collection = 'NURSADILA';

use(database);
db.createCollection(collection);

db.produk.find({
  $or: [
    { kategori: "Tenda" },
    { stok: { $lt: 5 } }
  ]
});


//db[collection].find();

