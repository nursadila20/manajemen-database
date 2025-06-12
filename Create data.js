const database = 'UAS';
const collection = 'NURSADILA';

use(database);
db.createCollection(collection);

db[collection].insertMany([
  { nama: "Tenda Dome 4 Orang", kategori: "Tenda", stok: 10, harga_sewa: 50000, harga_jual: 750000, status: "tersedia" },
  { nama: "Sleeping Bag Polar", kategori: "Tidur", stok: 20, harga_sewa: 15000, harga_jual: 200000, status: "tersedia" },
  { nama: "Kompor Portable", kategori: "Alat Masak", stok: 15, harga_sewa: 20000, harga_jual: 250000, status: "tersedia" },
  { nama: "Carrier 60L", kategori: "Tas", stok: 5, harga_sewa: 30000, harga_jual: 500000, status: "tersedia" },
  { nama: "Matras Camping", kategori: "Tidur", stok: 12, harga_sewa: 10000, harga_jual: 100000, status: "tersedia" }
]);
