const express = require('express');
const productsController = require('../controllers/productsController');



const routerProducts = express.Router();

//const validations=require('../middlewares/validationNinnerasMiddlewares')
const upload=require('../middlewares/multerMiddlewares')
const admin=require('../middlewares/adminMiddlewares')



routerProducts.get('/products/sign', productsController.create);
routerProducts.post('/products/sign',upload.single('img'),productsController.store);
routerProducts.get('/products/compras', productsController.allgetProducts);

    

routerProducts.get('/products/:id/edit_delete',productsController.edit);
routerProducts.get('/products/:id/', productsController.detail);
routerProducts.put('/products/:id/edit',upload.single('img'),productsController.update);
routerProducts.delete('/products/:id/delete',admin,productsController.destroy);

routerProducts.post('/products/buscar', productsController.search);

module.exports=routerProducts;
