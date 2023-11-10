
const PostModel = require('../models/post.model');
//GET /api/posts
const getAllPosts = async (req, res) => {
    try {
        const [result] = await PostModel.selectAllPosts();//[result] coge la posicion 0 del array
    
    /**
     * El resultado de cualquier ejecución de query nos devuelve un array con dos posiciones.
    La primera posición es el resultado, la segunda son datos de la tabla
    Sólo queremos la primera posición
    Hacemos algo llamado Destructuring
     * 
     */
    
    res.json(result); //devuelve el array en json
    } catch (error) {
        res.json({ fatal: error.message });
    }
    
};
const getPostById = async (req, res) => {
    try{
    const { postId } = req.params; // Lo mismo que const postId = req.params.postId
    const [post] = await PostModel.selectPostById(postId);
        res.json(post[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const getPostByAutorId = async (req, res) => {
    try{
    const { autorId } = req.params; // Lo mismo que const postId = req.params.postId
    const [post] = await PostModel.selectPostByAutorId(autorId);
        res.json(post);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}
const createPost = async (req, res) => {
    try {
        const [result] = await PostModel.insertPost(req.body); //Le estoy pasando el body de la request!(ThunderClient)
        const [post] = await PostModel.selectPostById(result.insertId)
        res.json(post[0]); //con esto recibo en el body del thunder client
    } catch(error) {
        res.json({ fatal: error.message });
    }
};

const updatePost = (req, res) => {
    res.send('Se actualiza el post!');
};

const deletePost = (req, res) => {
    res.send('Se borra el post!');
};



module.exports = { getAllPosts, createPost, updatePost, deletePost, getPostById,getPostByAutorId };
