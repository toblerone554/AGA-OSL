// Modelo de lo que vamos a almacenar en la base de datos
// Con esto, importanto este archivo desde otro archivo de js accedemos a el
// como podría ser una libreria de npm

// Creamos el ORM
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var serietv = new Schema({
	titulo: String,
	temporadas: Number,
	pais: String,
	genero: {
		type: String,
		emum: ['Comedia', 'Fantasia', 'Drama', 'Terror', 'Sci-Fi']
	}
});

module.exports = mongoose.model('SerieTV', serietv);
