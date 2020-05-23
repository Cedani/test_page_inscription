const db = require('../database/db')


function putingoodformat(param, goodOne) {
    let ret = `'${param}'`;
    return (ret);
}

function correct(param) {
    FirstName = putingoodformat(String(param.body[0].FirstName), FirstName);
    LastName = putingoodformat(String(param.body[0].LastName), LastName);
    Email = putingoodformat(String(param.body[0].Email), Email);
    passwd = putingoodformat(String(param.body[0].Passwd), passwd);
}

function checkArgument(LastName, FirstName, Email, passwd) {
    if (FirstName.length <= 0) return false;
    if (LastName.length <= 0) return false;
    if (Email.length <= 0) return false;
    if (passwd.length <= 0) return false;
    return true;
}


const addUser = (req, res, next) => {
    console.log(req.body[0].LastName);
    correct(req);
    const query = `INSERT INTO user_info (LastName, FirtsName, Email, passwd) VALUES
        (${LastName}, ${FirstName}, ${Email}, ${passwd})`;
    if (checkArgument(FirstName, LastName, Email, passwd) === false) {
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