//fichero model que va a tener todas las querys de la tabla AUTORES

const selectAllAutores = () => {
    return db.query('select * from autores');

}
const selectAutorById = (autorId) => {
    return db.query('select * from autores where idautor = ? ', [autorId])
}
const insertAutor = ({nombre, email, imagen}) => {
    return db.query('insert into actividad9.autores (nombre, email, imagen) values (?,?,?)', [nombre, email, imagen]
    )
}
module.exports = { selectAllAutores,selectAutorById,insertAutor };
