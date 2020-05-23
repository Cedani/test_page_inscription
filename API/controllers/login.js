const db = require('../database/db')

function checkInfo(name, passwd, rows) {
    for (const row in rows) {
        console.log(`Email = ${name} and passwd = ${passwd}`);
        console.log(`rows Email = ${rows[row].Email} and rows passwd = ${rows[row].passwd}`);
        if (name === rows[row].Email && passwd === rows[row].passwd) {
            return row;  
        }
    }
    return false;
}

const checkConn = (req, res, next) => {
    db.con.query(`SELECT * FROM user_info`, (err, rows) => {
        if (err) throw err;
        const check = checkInfo(req.body[0].Email, req.body[0].Passwd, rows);
        if (check === false)
            res.send(`false`);
        else
            res.send(`true`);
    })
}

module.exports = {
    checkConn
}