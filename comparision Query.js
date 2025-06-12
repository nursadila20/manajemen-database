const database = 'UAS';
const collection = 'NURSADILA';

use(database);
db.createCollection(collection);

db[collection].find({ harga_sewa: { $gt: 30000 } });
 
//db[collection].find();