module.exports = function(app){
	// Importamos el modelo
	var Material = require('./material');
	// Ya podemos utilizar el modelo

	// MÉTODO GET
	findAllMateriales = function(req, res){
		Material.find(function(err,materiales){
			if(!err) res.send(materiales);
			else console.log('ERROR: ' + err);
		});
	};

	// GET
	findById = function(req, res){
		Material.findById(req.param.id, function(err, material){
			if(!err) res.send(material);
			else console.log('ERROR: ' + err);
		});
	};

	// POST
	addMaterial = function(req, res){
		console.log('POST');
		console.log(req.body);

		var material = new Material({
			referencia: req.body.referencia,
			revisado: req.body.revisado,
			localizacion: req.body.localizacion,
			tipo: req.body.tipo,
			cpu: req.body.cpu,
			mhz: req.body.mhz,
			ram: req.body.ram,
			cd_dvd: req.body.cd_dvd,
			ethernet: req.body.ethernet,
			nota: req.body.nota,
			campania: req.body.campania,
			puntuacion: req.body.puntuacion,
		});

		material.save(function(err){
			if(!err)  console.log('Material guardado!');
			else console.log('ERROR:' + err);
		});

		res.send(material);
	};

	// PUT (Update)
	updateMaterial = function(req, res){
		Material.findById(req.params.id, function(err, material){
			
			referencia: req.body.referencia;
			revisado: req.body.revisado;
			localizacion: req.body.localizacion;
			tipo: req.body.tipo;
			cpu: req.body.cpu;
			mhz: req.body.mhz;
			ram: req.body.ram;
			cd_dvd: req.body.cd_dvd;
			ethernet: req.body.ethernet;
			nota: req.body.nota;
			campania: req.body.campania;
			puntuacion: req.body.puntuacion;
		});

		material.save(function(err){
			if(!err) console.log('Material Actualizado!');
			else console.log('ERROR: ' + err);
		});
	};

	// DELETE
	deleteMaterial = function(req, res){
		SerieTV.findById(req.params.id, function(err,material){
			material.remove(function(err){
				if(!err) console.log('Material Borrado!');
				else console.log('ERROR: ' + err);
			})
		});
	}

	// API Routes
	app.get('/materiales', findAllMateriales);
	app.get('/materiales/:id', findById);
	app.post('/materiales',addMaterial);
	app.put('/materiales/:id', updateMaterial);
	app.delete('/materiales/:id', deleteMaterial);
}
