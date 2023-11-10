const AutorModel = require('../models/autor.model');

const getAllAutores = async (req, res) => {
    try {
        const [result] = await AutorModel.selectAllAutores();//[result] coge la posicion 0 del array
    
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

const getAutorById = async (req, res) => {
    try{
    const { autorId } = req.params; // Lo mismo que const postId = req.params.postId
    const [autor] = await AutorModel.selectAutorById(autorId);
        res.json(autor[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const createAutor = async (req, res) => {
    try {
        const [result] = await AutorModel.insertAutor(req.body); //Le estoy pasando el body de la request!(ThunderClient)
        const [autor] = await AutorModel.selectAutorById(result.insertId)
        res.json(autor[0]); //con esto recibo en el body del thunder client
    } catch(error) {
        res.json({ fatal: error.message });
    }
};
module.exports = { getAllAutores,getAutorById, createAutor };