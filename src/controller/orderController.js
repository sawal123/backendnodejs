const db = require("../config/db_config");
const orderController = {};

orderController.getOrder = (req, res) => {
  // const orderId = req.params.userId;
  // console.log(orderId);

  const sql = `
  SELECT user.name AS customerName,
         menu.menu AS menu,
         menu.price AS price,
         orders.order_date AS orderDate,
         orders.qty AS qty
  FROM orders
  JOIN user ON orders.user_id = user.id
  JOIN menu ON orders.menu_id = menu.menu_id
`;

  db.query(sql, (err, rows) => {
    if (err) throw err;
    const customers = [];

    for (const row of rows) {
      const existingCustomer = customers.find(
        (customer) => customer.customerName === row.customerName
      );
      if (existingCustomer) {
        existingCustomer.orders.push({
          menu: row.menu,
          price: row.price,
          qty: row.qty,
        });
      } else {
        const newCustomer = {
          customerName: row.customerName,
          orders: [
            {
              menu: row.menu,
              price: row.price,
              qty: row.qty,
            },
          ],
          orderDate: row.orderDate,
        };

        customers.push(newCustomer);
      }
    }

    for (const customer of customers) {
      customer.totalOrder = customer.orders.reduce(
        (total, order) => total + order.price * order.qty,
        0
      );
    }

    res.json(customers);
  });
};

orderController.addOrder = async (req, res) => {
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
    menu.push(item.menu);
    price.push(item.price);
    qty.push(item.qty);
  }

  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const dateOnly = `${year}-${month}-${day}`;
  // console.log(dateOnly);

  const combinedData = [];

  function insertDataIntoDatabase(index) {
    if (index >= menu.length) {
      // Semua data sudah selesai dimasukkan
      console.log("Data yang dimasukkan:", combinedData);
      for (const cs of combinedData) {
        const { customer, menu_id, qty } = combinedData;
        const sql =
          "INSERT INTO orders (user_id, menu_id, qty) VALUES (?, ?, ?)";
        db.query(sql, [cs.customer, cs.menu_id, cs.qty], (err, results) => {
          if (err) {
            console.error("Gagal melakukan insert:", err);
          } else {
            console.log(
              "Data berhasil diinsert. ID data yang baru:",
              results.insertId
            );
          }
        });
      }

      var totalOrder = 0;
      for (const prices of price) {
        totalOrder += prices;
      }

      res.status(201).json({
        status: "Ok",
        message: "Data Berhasil Ditambahkan !",
        orders: combinedData,
        totalOrder: totalOrder,
        orderDate: dateOnly,
      });

      return;
    }

    const sql = "SELECT menu_id FROM menu WHERE menu = ?";
    db.query(sql, [menu[index]], function (err, rows) {
      if (err) {
        throw err;
      }
      const menuId = rows[0].menu_id;
      const quantity = qty[index];
      const combinedRow = {
        customer: customer,
        menu_id: menuId,
        qty: quantity,
      };
      combinedData.push(combinedRow);
      console.log("Data yang dimasukkan:", combinedRow);

      // Lanjutkan ke elemen berikutnya
      insertDataIntoDatabase(index + 1);
    });
  }

  // Memulai proses dengan indeks 0
  insertDataIntoDatabase(0);

  // console.log(menu);
};
module.exports = orderController;
