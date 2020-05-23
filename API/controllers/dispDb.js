const db = require('../database/db')

const getDisp = (req, res, next) => {
    db.con.query(`SELECT * FROM user_info`, (err, rows) => {
        if (err) throw err;
        res.send(JSON.stringify(rows));
    })
}

module.exports = {
    getDisp
}