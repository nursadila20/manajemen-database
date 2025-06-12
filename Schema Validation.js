const database = 'UAS_MBD';
const collection = 'Validasi';

use(database);
db.createCollection(collection);

db.createCollection("produk", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nama", "kategori", "stok", "harga_sewa", "harga_jual"],
      properties: {
        nama: { bsonType: "string" },
        kategori: { bsonType: "string" },
        stok: { bsonType: "int", minimum: 0 },
        harga_sewa: { bsonType: "int", minimum: 0 },
        harga_jual: { bsonType: "int", minimum: 0 },
        status: { bsonType: "string" }
      }
    }
  }
});
