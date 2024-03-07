// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const { list, datail  } = require("../controllers/products");



/*** GET ALL PRODUCTS ***/ 
router.get('/', list); 


/*** GET ONE PRODUCT ***/ 
router.get('/detalle/:id', datail); 




module.exports = router;
