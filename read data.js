
const database = 'UAS';
const collection = 'NURSADILA';

use(database);
db.createCollection(collection);

db.pelanggan.find();
db.pelanggan.find({ nama: "Budi Hartono" });


