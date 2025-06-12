 
const database = 'UAS';
const collection = 'NURSADILA';

use(database);
db.createCollection(collection);

db[collection].updateOne(
  { nama: "Tenda Dome 4 Orang" },
  { $set: { stok: 8 } }
);