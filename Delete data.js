const database = 'UAS';
const collection = 'NURSADILA';

use(database);
db.createCollection(collection);

db[collection].deleteOne({ nama: "Tenda Dome 4 Orang" });
