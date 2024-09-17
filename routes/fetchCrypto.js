const express = require('express');
const router = express.Router();

const {initializeDb} = require('../controllers/initDb');




router.get('/init-db',initializeDb);





module.exports=router;