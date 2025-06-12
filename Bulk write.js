const database = 'UAS';
const collection = 'NURSADILA';

use(database);
db.createCollection(collection);

db.produk.bulkWrite([
  {
    insertOne: {
      document: {
        nama: "Kompor Portable",
        kategori: "Alat Masak",
        stok: 15,
        harga_sewa: 20000,
        harga_jual: 250000,
        status: "tersedia"
      }
    }
  },
  {
    updateOne: {
      filter: { nama: "Tenda Dome 4 Orang" },
      update: { $set: { stok: 7 } }
    }
  }
]);
