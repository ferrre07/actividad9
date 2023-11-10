//Definir todas las URLs para la gestión de la tabla de alumnos

const router = require('express').Router();

const PostsController = require('../../controllers/posts.controller');

router.get('/', PostsController.getAllPosts); //ruta /api/posts
router.get('/:postId', PostsController.getPostById)
//TODO: TIPO GET DE POSTS DE UN AUTOR EN CONCRETO
router.get('/id/:autorId', PostsController.getPostByAutorId)


router.post('/', PostsController.createPost);
router.put('/:postId', PostsController.updatePost);
router.delete('/:postId', PostsController.deletePost);

module.exports = router;
