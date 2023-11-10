//Definir todas las URLs para la gestión de la tabla de autores

const router = require('express').Router();

const AutoresController = require('../../controllers/autores.controller');

router.get('/', AutoresController.getAllAutores); //ruta /api/autores
  router.get('/:autorId', AutoresController.getAutorById);
 router.post('/', AutoresController.createAutor);
// router.put('/:autorId', AutoresController.updateAutor);
// router.delete('/:autorId', AutoresController.deleteAutor);

module.exports = router;