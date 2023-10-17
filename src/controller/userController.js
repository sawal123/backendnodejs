const db =require("../config/db_config")
const userController = {};
userController.addUser=(req, res)=>{
    const userData = {
        name: req.body.name,
        password: req.body.password
      };
      const sql = 'INSERT INTO user (name, password) VALUES (?, ?)';
      db.query(sql, [userData.name, userData.password], (err, result) => {
        if (err) {
          console.error('Gagal melakukan insert', err);
          res.status(500).json({ error: 'Gagal melakukan insert' });
        } else {
          console.log('Data berhasil diinsert', result.insertId);
          res.status(200).json({ message: 'Data berhasil diinsert' });
        }
      });
}

module.exports = userController;