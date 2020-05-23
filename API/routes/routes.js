const express = require('express');
const router = express.Router()
const test = require('../controllers/test')
const signup = require('../controllers/signup')
const displayDB = require('../controllers/dispDb');
const login = require('../controllers/login')

router.get('/test', test.getTest);
router.get('/db', displayDB.getDisp);
router.post('/login', login.checkConn);
router.post('/signup', signup.addUser);

module.exports = {
    router
}