// Modelo de lo que vamos a almacenar en la base de datos
// Con esto, importando este archivo desde otro archivo de js accedemos a el
// como podría ser una libreria de npm

// Creamos el ORM
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var material = new Schema({
	referencia: Number,

	revisado: Boolean,

	localizacion:{
		type: String,
		enum: ['Oficina, en uso','Oficina', 'Almacén', 'Prestado']
	},

	tipo: {
		type: String,
		enum: ['Sobremesa','Impresora','Servidor','Proyector','Portátil','PC','Impresora']
	},
	
	cpu: String,
	mhz: Number,
	ram: Number,
	hd: Number,
	cd_dvd: String,
	ethernet: Boolean,
	nota: String,
	campania: String,
	puntuacion: Number,

});

module.exports = mongoose.model('Material', material);
