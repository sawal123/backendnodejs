const db =require("../config/db_config")
const menuController = {};

menuController.getMenu=(req, res)=>{
    db.query("SELECT * FROM menu", (err, rows) => {
        if (err) throw err;
        console.log("Data dari tabel: ", rows);
        res.writeHead(200, "OK");
        // res.end("Hallo !");
        res.end(JSON.stringify(rows));
      });
}

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
          res.status(200).json({status: "OK" , message: 'Menu berhasil ditambah' });
        }
      });
}


menuController.editMenu=(req, res)=> {
    const menu ={
        menu: req.body.menu,
        kategori: req.body.kategori,
        price: req.body.price,
        menu_id: req.body.menu_id
    };
    var sql = "UPDATE menu SET menu =? , kategori=?, price=? WHERE menu_id = ?";
    db.query(sql,  [menu.menu, menu.kategori, menu.price, menu.menu_id], (err, result)=>{
        if (err) {
            console.error('Gagal melakukan edit', err);
            res.status(500).json({ error: 'Gagal melakukan edit' });
          } else {
            console.log('Data berhasil diinsert', result.insertId);
            res.status(200).json({ message: 'Menu berhasil diubah' });
          }
    });
}

menuController.deleteMenu=(req, res)=>{
    const id = {
        menu_id: req.body.menu_id
    };
    var sql= "DELETE FROM menu WHERE menu_id = ?";
    db.query(sql, [id.menu_id], (err, result)=>{
        if (err) {
            console.error('Gagal melakukan delete', err);
            res.status(500).json({ error: 'Gagal melakukan delete' });
          } else {
            console.log('Data berhasil diinsert', result.insertId);
            res.status(200).json({ message: 'Menu berhasil dihapus' });
          }
    })
}

module.exports = menuController;
