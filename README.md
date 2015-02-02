###[AGA-OSL - Automatización de la gestión del almacén de reciclaje y donaciones de la oficina de software libre](https://github.com/Samu92/AGA-OSL)

Integrantes actuales:

1. Juan Antonio Marin Sanchez
2. Pablo Perez Ruiz
3. Samuel Hernández Ballesteros
4. Harí Carreras Pérez

Servidor Web realizado con Ruby On Rails

[Repositorio de la aplicación REST Ruby On Rails](https://github.com/hcarreras/AGA-OSL-rails-app)

[Aplicación desplegada](http://aga-osl.herokuapp.com/)

También estamos desarrollando dos aplicaciones de tipo cliente que interactuarán con esta aplicación haciendo uso de la información que reciban.

Estas aplicaciones de tipo cliente son una página web y una aplicación Android que tendrá la funcionalidad de trabajar con códigos QR.

[Aplicación Android](https://github.com/Samu92/AGA-OSL-Android-App)

[Aplicación Web](https://github.com/JAntonioMarin/AGA-OSL-Web-App)

[Aplicación Web desplegada en GoogleAppEngine](http://aga-osl-web.appspot.com/)

En la parte de documentación y pruebas tenemos:

**Documentación**

[Presentación del proyecto](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Presentaci%C3%B3n%20del%20proyecto.md)

[Presentación web](https://github.com/Samu92/AGA-OSL/tree/master/Documentaci%C3%B3n/Presentaci%C3%B3n)

**Contenedores**

DockerHub

[Documentación - Apartado de contenedores](https://github.com/Samu92/AGA-OSL/tree/master/Documentaci%C3%B3n/Presentaci%C3%B3n)

**Tests y Pruebas**

Hemos utilizado [New Relic](http://newrelic.com/sp/brand?utm_source=GOOG&utm_medium=adwords&utm_content=rpm&utm_campaign=RPM&utm_term=NewRelic&mpc=PS-GOOG-RPM-EN-SIGNUP-Europe-Brand-NewRelic-LP3&gclid=Cj0KEQiAzb-kBRDe49qh9s75m-wBEiQATOxgwdPt9jKY8auuF_Y5KoKYNJ6eI_DDrJJmVO91Z-IM_MkaAlK18P8HAQ) para testear la aplicación.

Hemos realizado test para comprobar el buen funcionamiento de las aplicaciones
- RoR: Test::Unit
- Android:
- PHP: [SimpleTest](http://aga-osl-web.appspot.com/phpUnit.php)

[Documentación - Apartado de test y pruebas](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Documentaci%C3%B3n%20t%C3%A9cnica.md)

**Integración continua**

[Jenkins - Interfaz](http://178.62.92.114:8080/)

[Documentación - Apartado de integración continua](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Documentaci%C3%B3n%20t%C3%A9cnica.md)

**Provisionamiento**

Vagrant y Chef con Rails

[Documentación - Apartado de provisionamiento](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Documentaci%C3%B3n%20t%C3%A9cnica.mdci%C3%B3n)

------------------------------------------------

**Extras**

Documento de google docs para organización del proyecto
[Correciones](https://docs.google.com/document/d/1aY6bwWLNVAhc91OPJflwDRFZ9RhVMzVc0_Z6UXUpZZ8/edit)

**Como actualizar los submodulos**

	git submodule init

	git submodule update
  
	git submodule foreach git pull origin master
  
	git add * 

	commit y push

------------------------------------------------
**Participación**

Juan Antonio Marín Sanchez

Ha participado en la documentación


- [x] [Descripción del proyecto](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Presentaci%C3%B3n%20del%20proyecto.md)
- [ ] [Presentación del proyecto]()
- [x] [Documentación técnica - Herramientas utilizadas](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Entorno%20de%20pruebas/Contenedores%20y%20pruebas.md)



Ha participado en estos scripts de provisionamiento

- [ ] [Vagrantfile](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Scripts/Vagrantfile)
- [ ] [Cheffile](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Scripts/Cheffile)
- [ ] [Dockerfile](https://github.com/hcarreras/AGA-OSL-rails-app/blob/master/Dockerfile)


Ha participado en estos tests (o issues)


- [x] [Test - SimpleTest PHP para la Web](https://github.com/JAntonioMarin/AGA-OSL-Web-App/tree/master/simpletest)
- [ ] [Test - Test de Rails]()
- [ ] [Test - Test de Android]()
- [x] [Definiendo el REST](https://github.com/Samu92/AGA-OSL/issues/14)
- [x] [Conectar con la API Google Drive](https://github.com/Samu92/AGA-OSL/issues/4)
- [x] [Urgente - Correciones](https://github.com/Samu92/AGA-OSL/issues/15)


Ha participado en esta integración continua y PaaS


- [x] [Jenkins en Digital Ocean Droplet](http://178.62.92.114:8080/)
- [x] [Documentación - Parte de integración continua](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Documentaci%C3%B3n%20t%C3%A9cnica.md)



Ha participado en esta configuración de despliegue automático


- [ ] [Heroku - Aplicación Rails]()
- [x] [AppSpot - Web]()
- [ ] [Script de despliegue]()



Ha participado en el desarrollo del proyecto


- [x] [Desarrollo de la Web]()
- [ ] [Desarrollo del REST RoR]()
- [ ] [Desarrollo de la aplicación Android]()


Pablo Perez Ruíz

Ha participado en la documentación


- [x] [Descripción del proyecto](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Presentaci%C3%B3n%20del%20proyecto.md)
- [ ] [Presentación del proyecto]()
- [x] [Documentación técnica - Herramientas utilizadas](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Entorno%20de%20pruebas/Contenedores%20y%20pruebas.md)



Ha participado en estos scripts de provisionamiento


- [ ] [Vagrantfile](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Scripts/Vagrantfile)
- [ ] [Cheffile](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Scripts/Cheffile)
- [ ] [Dockerfile](https://github.com/hcarreras/AGA-OSL-rails-app/blob/master/Dockerfile)


Ha participado en estos tests (o issues)


- [x] [Test - SimpleTest PHP para la Web](https://github.com/JAntonioMarin/AGA-OSL-Web-App/tree/master/simpletest)
- [ ] [Test - Test de Rails]()
- [ ] [Test - Test de Android]()
- [x] [Definiendo el REST](https://github.com/Samu92/AGA-OSL/issues/14)
- [x] [Conectar con la API Google Drive](https://github.com/Samu92/AGA-OSL/issues/4)
- [x] [Urgente - Correciones](https://github.com/Samu92/AGA-OSL/issues/15)



Ha participado en esta integración continua y PaaS


- [x] [Jenkins en Digital Ocean Droplet](http://178.62.92.114:8080/)
- [x] [Documentación - Parte de integración continua](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Documentaci%C3%B3n%20t%C3%A9cnica.md)



Ha participado en esta configuración de despliegue automático


- [ ] [Heroku - Aplicación Rails]()
- [x] [AppSpot - Web]()
- [ ] [Script de despliegue]()



Ha participado en el desarrollo del proyecto


- [x] [Desarrollo de la Web]()
- [ ] [Desarrollo del REST RoR]()
- [ ] [Desarrollo de la aplicación Android]()


Samuel Hernández Ballesteros



Ha participado en la documentación


- [x] [Descripción del proyecto](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Presentaci%C3%B3n%20del%20proyecto.md)
- [x] [Presentación del proyecto]()
- [x] [Documentación técnica - Herramientas utilizadas](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Entorno%20de%20pruebas/Contenedores%20y%20pruebas.md)



Ha participado en estos scripts de provisionamiento


- [x] [Vagrantfile](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Scripts/Vagrantfile)
- [x] [Cheffile](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Scripts/Cheffile)
- [ ] [Dockerfile](https://github.com/hcarreras/AGA-OSL-rails-app/blob/master/Dockerfile)


Ha participado en estos tests (o issues)


- [ ] [Test - SimpleTest PHP para la Web](https://github.com/JAntonioMarin/AGA-OSL-Web-App/tree/master/simpletest)
- [ ] [Test - Test de Rails]()
- [x] [Test - Test de Android]()
- [x] [Definiendo el REST](https://github.com/Samu92/AGA-OSL/issues/14)
- [x] [Conectar con la API Google Drive](https://github.com/Samu92/AGA-OSL/issues/4)
- [x] [Urgente - Correciones](https://github.com/Samu92/AGA-OSL/issues/15)



Ha participado en esta integración continua y PaaS


- [x] [Jenkins en Digital Ocean Droplet](http://178.62.92.114:8080/)
- [x] [Documentación - Parte de integración continua](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Documentaci%C3%B3n%20t%C3%A9cnica.md)



Ha participado en esta configuración de despliegue automático


- [ ] [Heroku - Aplicación Rails]()
- [ ] [AppSpot - Web]()
- [ ] [Script de despliegue]()



Ha participado en el desarrollo del proyecto


- [ ] [Desarrollo de la Web]()
- [x] [Desarrollo del REST RoR]()
- [x] [Desarrollo de la aplicación Android]()


Harí Carreras Pérez

Ha participado en la documentación


- [x] [Descripción del proyecto](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Presentaci%C3%B3n%20del%20proyecto.md)
- [x] [Presentación del proyecto]()
- [x] [Documentación técnica - Herramientas utilizadas](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Entorno%20de%20pruebas/Contenedores%20y%20pruebas.md)



Ha participado en estos scripts de provisionamiento


- [ ] [Vagrantfile](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Scripts/Vagrantfile)
- [ ] [Cheffile](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Scripts/Cheffile)
- [x] [Dockerfile](https://github.com/hcarreras/AGA-OSL-rails-app/blob/master/Dockerfile)


Ha participado en estos tests (o issues)


- [ ] [Test - SimpleTest PHP para la Web](https://github.com/JAntonioMarin/AGA-OSL-Web-App/tree/master/simpletest)
- [x] [Test - Test de Rails]()
- [ ] [Test - Test de Android]()
- [x] [Definiendo el REST](https://github.com/Samu92/AGA-OSL/issues/14)
- [x] [Conectar con la API Google Drive](https://github.com/Samu92/AGA-OSL/issues/4)
- [x] [Urgente - Correciones](https://github.com/Samu92/AGA-OSL/issues/15)



Ha participado en esta integración continua y PaaS


- [x] [Jenkins en Digital Ocean Droplet](http://178.62.92.114:8080/)
- [x] [Documentación - Parte de integración continua](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Documentaci%C3%B3n%20t%C3%A9cnica.md)



Ha participado en esta configuración de despliegue automático


- [x] [Heroku - Aplicación Rails]()
- [ ] [AppSpot - Web]()
- [ ] [Script de despliegue]()



Ha participado en el desarrollo del proyecto


- [ ] [Desarrollo de la Web]()
- [x] [Desarrollo del REST RoR]()
- [ ] [Desarrollo de la aplicación Android]()


