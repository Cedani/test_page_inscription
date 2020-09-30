const db = require('../database/db')


function putingoodformat(param) {
    let ret = `'${param}'`;
    return (ret);
}

function correct(req) {
    // console.log
    req.body[0].FirstName = putingoodformat(String(req.body[0].FirstName));
    req.body[0].LastName = putingoodformat(String(req.body[0].LastName));
    req.body[0].Email = putingoodformat(String(req.body[0].Email));
    req.body[0].passwd = putingoodformat(String(req.body[0].Passwd));
}

function checkArgument(LastName, FirstName, Email, passwd) {
    if (FirstName.length <= 0) return false;
    if (LastName.length <= 0) return false;
    if (Email.length <= 0) return false;
    if (passwd.length <= 0) return false;
    return true;
}


const addUser = (req, res, next) => {
    console.log("ok req");
    console.log(req.body[0].LastName);
    correct(req);
    const query = `INSERT INTO user_info (LastName, FirtsName, Email, passwd) VALUES
        (${req.body[0].LastName}, ${req.body[0].FirstName}, ${req.body[0].Email}, ${req.body[0].passwd})`;
    if (checkArgument(req.body[0].FirstName, req.body[0].LastName, req.body[0].Email, req.body[0].passwd) === false) {
        res.send('one of your string were empty');
        return;
    }
    db.con.query(query, (err) => {
        if (err) throw err;
        res.send('ok');
    })
}

module.exports = {
    addUser
}