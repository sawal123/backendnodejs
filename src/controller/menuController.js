const db =require("../config/db_config")
const menuController = {};
menuController.addMenu=(req, res)=>{
    const menu = {
        menu: req.body.menu,
        kategori: req.body.kategori,
        price: req.body.price
      };
      const sql = 'INSERT INTO menu (menu, kategori, price) VALUES (?, ?, ?)';
      db.query(sql, [menu.menu, menu.kategori, menu.price], (err, result) => {
        if (err) {
          console.error('Gagal melakukan insert', err);
          res.status(500).json({ error: 'Gagal melakukan insert' });
        } else {
          console.log('Data berhasil diinsert', result.insertId);
          res.status(200).json({ message: 'Menu berhasil ditambah' });
        }
      });
}

module.exports = menuController;