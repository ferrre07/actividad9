//fichero model que va a tener todas las querys de la tabla POSTS

const selectAllPosts = () => {
    return db.query('SELECT * FROM actividad9.posts LEFT JOIN actividad9.autores ON posts.autores_id = autores.idautor;')

}

const selectPostById = (postId) => {
    return db.query('select * from posts LEFT JOIN autores ON autores_id = autores.idautor where id = ? ', [postId])

}
//TODO: *FROM POSTS WHERE ID_AUTOR
const selectPostByAutorId = (postId) => {
    return db.query('SELECT * FROM posts LEFT JOIN autores ON posts.autores_id = autores.idautor WHERE autores.idautor = ?; ', [postId])

}
//no está fecha creación pq se rellena solo con CURRENT_TIMESTAMP
const insertPost = ({titulo, descripcion, categoria, autores_id}) => {
    return db.query('insert into actividad9.posts (titulo, descripcion, categoria, autores_id) values (?,?,?,?)', [titulo, descripcion,categoria, autores_id ]
    )
}

module.exports = { selectAllPosts, insertPost, selectPostById,selectPostByAutorId };