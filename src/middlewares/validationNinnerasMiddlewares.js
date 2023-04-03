const{body} = require('express-validator');
const path = require('path');

const validations =[
    body('img').custom((value,{req})=>{
        let file = req.file;
        if(!file){
            throw new Error('Tienes que subir una imagen')
        }
    }),
    body('nombre').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('apellido').notEmpty().withMessage('Tienes que escribir un apellido'),
    body('email').notEmpty().withMessage('Tienes que escribir un email').bail().isEmail().withMessage('Ingresas un formato de email valido'),
    body('username').notEmpty().withMessage('Tienes que escribir un username'),
    body('password').notEmpty().withMessage('Tienes que escribir un password'),
    body('edad').notEmpty().withMessage('Tienes que escribir una edad'),
    body('nacionalidad').notEmpty().withMessage('Tienes que escribir una nacionalidad'),
    body('pais_de_residencia').notEmpty().withMessage('Tienes que escribir un pais'),
    body('ciudad_de_residencia').notEmpty().withMessage('Tienes que escribir una ciudad'),
    body('direccion').notEmpty().withMessage('Tienes que escribir un direccion'),
    body('celular').notEmpty().withMessage('Tienes que escribir un celular'),
    body('descripcion').notEmpty().withMessage('Tienes que escribir una descripcion'),
    body('frase').notEmpty().withMessage('Tienes que escribir una frase'),
    body('precio').notEmpty().withMessage('Tienes que escribir un precio'),
    body('aptitudes').notEmpty().withMessage('Tienes que escribir 3 aptitudes'),
]

module.exports=validations;