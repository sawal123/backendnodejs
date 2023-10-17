const getUser = {};
const database = require("../config/db_config");

getUser.getDataUser = (req, res) => {
  database.query("SELECT * FROM user", (err, rows) => {
    if (err) throw err;
    console.log("Data dari tabel: ", rows);
    res.writeHead(200, "OK");
    res.end(JSON.stringify(rows));
  });
};
module.exports = getUser;
