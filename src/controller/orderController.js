const db = require("../config/db_config");
const orderController = {};

orderController.getOrder = (req, res) => {
  const items = [
    {
      menu: "Nasi Goreng",
      price: 13000,
      qty: 1,
    },
    {
      menu: "Nasi Goreng",
      price: 13000,
      qty: 1,
    },
  ];
  console.log(items);
  db.query("SELECT * FROM orders", (err, rows) => {
    if (err) throw err;
    console.log("Data dari tabel: ", rows);
    res.writeHead(200, "OK");
    res.end(JSON.stringify(rows));
  });
};

orderController.addOrder = (req, res) => {
  const customer = req.body.customerId;
  const items = req.body.items;
  const order = {
    customerId: customer,
    items: JSON.stringify(items), // Mengubah array items menjadi string JSON
  };
  var menu = [];
  var price = [];
  var qty = [];
  for (const item of items) {
    var index = 0;
    menu.push(item.menu);
    price.push(item.price);
    qty.push(item.qty);
  }
  var totalOrder = 0;
  for (const prices of price) {
    totalOrder += prices;
  }

  for (const menus of menu) {
    db.query("SELECT menu_id FROM menu", (err, rows) => {
      if (err) throw err;
      console.log("Data dari tabel: ", rows);
      res.writeHead(200, "OK");
      res.end(JSON.stringify(rows));
    });
  }
  
  console.log(totalQty);

  db.query("SELECT * FROM orders", (err, rows) => {
    if (err) throw err;
    // console.log("Data dari tabel: ", rows);
    res.writeHead(200, "OK");
    res.end(JSON.stringify(rows));
  });
};
module.exports = orderController;
