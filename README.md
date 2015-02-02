###[AGA-OSL - Automatización de la gestión del almacén de reciclaje y donaciones de la oficina de software libre](https://github.com/Samu92/AGA-OSL)

Integrantes actuales:

1. Juan Antonio Marin Sanchez
2. Pablo Perez Ruiz
3. Samuel Hernández Ballesteros
4. Harí Carreras Pérez

**Servidor Web realizado con Ruby On Rails**

[Repositorio de la aplicación REST Ruby On Rails](https://github.com/hcarreras/AGA-OSL-rails-app)

[Aplicación desplegada en Heroku](http://aga-osl.herokuapp.com/stock.json)

[Documentación - Apartado de REST API](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Documentaci%C3%B3n%20t%C3%A9cnica.md)

También estamos desarrollando dos aplicaciones de tipo cliente que interactuarán con esta aplicación haciendo uso de la información que reciban.

Estas aplicaciones de tipo cliente son una página web y una aplicación Android que tendrá la funcionalidad de trabajar con códigos QR.

**Cliente Android**

[Repositorio de la aplicación Android - Documentación en Readme](https://github.com/Samu92/AGA-OSL-Android-App)

[Enlace al APK](https://github.com/Samu92/AGA-OSL-Android-App/blob/master/bin/AgaOsl.apk)

**Cliente Web**

[Repositorio de la Web](https://github.com/JAntonioMarin/AGA-OSL-Web-App)

[Aplicación Web desplegada en GoogleAppEngine](http://aga-osl-web.appspot.com/)

En la parte de documentación y pruebas tenemos:

**Documentación**

[Presentación del proyecto](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Presentaci%C3%B3n%20del%20proyecto.md)

[Presentación web](https://github.com/Samu92/AGA-OSL/tree/master/Documentaci%C3%B3n/Presentaci%C3%B3n)

[Documentación del proyecto](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Documentaci%C3%B3n%20t%C3%A9cnica.md)

**Contenedores**

[Docker & DockerHub - Digital Ocean Droplet](http://178.62.92.114/stock.json)

[Documentación - Apartado de contenedores](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Documentaci%C3%B3n%20t%C3%A9cnica.md)

**Tests y Pruebas**

Hemos utilizado [New Relic](http://newrelic.com/sp/brand?utm_source=GOOG&utm_medium=adwords&utm_content=rpm&utm_campaign=RPM&utm_term=NewRelic&mpc=PS-GOOG-RPM-EN-SIGNUP-Europe-Brand-NewRelic-LP3&gclid=Cj0KEQiAzb-kBRDe49qh9s75m-wBEiQATOxgwdPt9jKY8auuF_Y5KoKYNJ6eI_DDrJJmVO91Z-IM_MkaAlK18P8HAQ) para testear la aplicación.

Hemos realizado test para comprobar el buen funcionamiento de las aplicaciones
- RoR: [Rspec](https://github.com/hcarreras/AGA-OSL-rails-app/tree/master/spec)
- Android: [JUnit FrameWork](https://github.com/Samu92/AGA-OSL-Android-App/blob/master/src/com/etsiit/agaosl/TestAgaOsl.java)
- PHP: [SimpleTest](http://aga-osl-web.appspot.com/phpUnit.php)

[Documentación - Apartado de test y pruebas](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Documentaci%C3%B3n%20t%C3%A9cnica.md)

**Integración continua**

[Jenkins - Interfaz](http://178.62.92.114:8080/)

[Documentación - Apartado de integración continua](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Documentaci%C3%B3n%20t%C3%A9cnica.md)

**Provisionamiento**

Vagrant y Chef para Ruby on Rails

[Documentación - Apartado de provisionamiento](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Documentaci%C3%B3n%20t%C3%A9cnica.mdci%C3%B3n)

------------------------------------------------

**Extras**

Documento de google docs para organización del proyecto
[Correciones](https://docs.google.com/document/d/1aY6bwWLNVAhc91OPJflwDRFZ9RhVMzVc0_Z6UXUpZZ8/edit)

**Como actualizar los submodulos**
```bash
	git submodule init

	git submodule update
  
	git submodule foreach git pull origin master
  
	git add *

	commit y push
```


------------------------------------------------
**Participación**

Juan Antonio Marín Sanchez

Ha participado en la documentación


- [x] [Descripción del proyecto](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Presentaci%C3%B3n%20del%20proyecto.md)
- [ ] [Presentación del proyecto]()
- [x] [Documentación técnica - Herramientas utilizadas](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Entorno%20de%20pruebas/Contenedores%20y%20pruebas.md)
- [ ] [Documentación REST - Apartado REST API](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Documentaci%C3%B3n%20t%C3%A9cnica.md)

Ha participado en el desarrollo de los siguientes contenedores

- [ ] [Docker - Dockerhub]()


Ha participado en estos scripts de provisionamiento

- [ ] [Vagrantfile](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Scripts/Vagrantfile)
- [ ] [Cheffile](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Scripts/Cheffile)
- [ ] [Dockerfile](https://github.com/hcarreras/AGA-OSL-rails-app/blob/master/Dockerfile)
- [ ] [Script de provisionamiento - Vagrant & Chef Solo](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Scripts/script_provisionamiento)


Ha participado en estos tests (o issues)


- [x] [Test - SimpleTest PHP para la Web](https://github.com/JAntonioMarin/AGA-OSL-Web-App/tree/master/simpletest)
- [ ] [Test - Test de Rails Rspec](https://github.com/hcarreras/AGA-OSL-rails-app/tree/master/spec)
- [ ] [Test - Test de Android JUnit](https://github.com/Samu92/AGA-OSL-Android-App/blob/master/src/com/etsiit/agaosl/TestAgaOsl.java)
- [x] [Definiendo el REST](https://github.com/Samu92/AGA-OSL/issues/14)
- [x] [Conectar con la API Google Drive](https://github.com/Samu92/AGA-OSL/issues/4)
- [x] [Urgente - Correciones](https://github.com/Samu92/AGA-OSL/issues/15)


Ha participado en esta integración continua y PaaS


- [x] [Jenkins en Digital Ocean Droplet](http://178.62.92.114:8080/)
- [x] [Documentación - Parte de integración continua](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Documentaci%C3%B3n%20t%C3%A9cnica.md)



Ha participado en esta configuración de despliegue automático


- [ ] [Heroku - Aplicación Rails](https://aga-osl.herokuapp.com/stock.json)
- [x] [AppSpot - Web](http://aga-osl-web.appspot.com/)



Ha participado en el desarrollo del proyecto


- [x] [Desarrollo de la Web](https://github.com/JAntonioMarin/AGA-OSL-Web-App)
- [ ] [Desarrollo del REST RoR](https://github.com/hcarreras/AGA-OSL-rails-app)
- [ ] [Desarrollo de la aplicación Android](https://github.com/Samu92/AGA-OSL-Android-App)


Pablo Perez Ruíz

Ha participado en la documentación


- [x] [Descripción del proyecto](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Presentaci%C3%B3n%20del%20proyecto.md)
- [ ] [Presentación del proyecto]()
- [x] [Documentación técnica - Herramientas utilizadas](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Entorno%20de%20pruebas/Contenedores%20y%20pruebas.md)
- [ ] [Documentación REST - Apartado REST API](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Documentaci%C3%B3n%20t%C3%A9cnica.md)

Ha participado en el desarrollo de los siguientes contenedores

- [ ] [Docker - Dockerhub]()

Ha participado en estos scripts de provisionamiento


- [ ] [Vagrantfile](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Scripts/Vagrantfile)
- [ ] [Cheffile](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Scripts/Cheffile)
- [ ] [Dockerfile](https://github.com/hcarreras/AGA-OSL-rails-app/blob/master/Dockerfile)
- [ ] [Script de provisionamiento - Vagrant & Chef Solo](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Scripts/script_provisionamiento)


Ha participado en estos tests (o issues)


- [x] [Test - SimpleTest PHP para la Web](https://github.com/JAntonioMarin/AGA-OSL-Web-App/tree/master/simpletest)
- [ ] [Test - Test de Rails Rspec](https://github.com/hcarreras/AGA-OSL-rails-app/tree/master/spec)
- [ ] [Test - Test de Android JUnit](https://github.com/Samu92/AGA-OSL-Android-App/blob/master/src/com/etsiit/agaosl/TestAgaOsl.java)
- [x] [Definiendo el REST](https://github.com/Samu92/AGA-OSL/issues/14)
- [x] [Conectar con la API Google Drive](https://github.com/Samu92/AGA-OSL/issues/4)
- [x] [Urgente - Correciones](https://github.com/Samu92/AGA-OSL/issues/15)



Ha participado en esta integración continua y PaaS


- [x] [Jenkins en Digital Ocean Droplet](http://178.62.92.114:8080/)
- [x] [Documentación - Parte de integración continua](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Documentaci%C3%B3n%20t%C3%A9cnica.md)



Ha participado en esta configuración de despliegue automático


- [ ] [Heroku - Aplicación Rails](https://aga-osl.herokuapp.com/stock.json)
- [x] [AppSpot - Web](http://aga-osl-web.appspot.com/)



Ha participado en el desarrollo del proyecto


- [x] [Desarrollo de la Web](https://github.com/JAntonioMarin/AGA-OSL-Web-App)
- [ ] [Desarrollo del REST RoR](https://github.com/hcarreras/AGA-OSL-rails-app)
- [ ] [Desarrollo de la aplicación Android](https://github.com/Samu92/AGA-OSL-Android-App)


Samuel Hernández Ballesteros



Ha participado en la documentación


- [x] [Descripción del proyecto](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Presentaci%C3%B3n%20del%20proyecto.md)
- [x] [Presentación del proyecto]()
- [x] [Documentación técnica - Herramientas utilizadas](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Entorno%20de%20pruebas/Contenedores%20y%20pruebas.md)
- [x] [Documentación REST - Apartado REST API](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Documentaci%C3%B3n%20t%C3%A9cnica.md)

Ha participado en el desarrollo de los siguientes contenedores

- [x] [Docker - Dockerhub]()


Ha participado en estos scripts de provisionamiento


- [x] [Vagrantfile](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Scripts/Vagrantfile)
- [x] [Cheffile](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Scripts/Cheffile)
- [ ] [Dockerfile](https://github.com/hcarreras/AGA-OSL-rails-app/blob/master/Dockerfile)
- [x] [Script de provisionamiento - Vagrant & Chef Solo](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Scripts/script_provisionamiento)


Ha participado en estos tests (o issues)


- [ ] [Test - SimpleTest PHP para la Web](https://github.com/JAntonioMarin/AGA-OSL-Web-App/tree/master/simpletest)
- [ ] [Test - Test de Rails Rspec](https://github.com/hcarreras/AGA-OSL-rails-app/tree/master/spec)
- [x] [Test - Test de Android JUnit](https://github.com/Samu92/AGA-OSL-Android-App/blob/master/src/com/etsiit/agaosl/TestAgaOsl.java)
- [x] [Definiendo el REST](https://github.com/Samu92/AGA-OSL/issues/14)
- [x] [Conectar con la API Google Drive](https://github.com/Samu92/AGA-OSL/issues/4)
- [x] [Urgente - Correciones](https://github.com/Samu92/AGA-OSL/issues/15)



Ha participado en esta integración continua y PaaS


- [x] [Jenkins en Digital Ocean Droplet](http://178.62.92.114:8080/)
- [x] [Documentación - Parte de integración continua](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Documentaci%C3%B3n%20t%C3%A9cnica.md)



Ha participado en esta configuración de despliegue automático


- [ ] [Heroku - Aplicación Rails](https://aga-osl.herokuapp.com/stock.json)
- [ ] [AppSpot - Web](http://aga-osl-web.appspot.com/)
- [x] [Script Rails - Heroku]()

Ha participado en el desarrollo del proyecto


- [ ] [Desarrollo de la Web](https://github.com/JAntonioMarin/AGA-OSL-Web-App)
- [x] [Desarrollo del REST RoR](https://github.com/hcarreras/AGA-OSL-rails-app)
- [x] [Desarrollo de la aplicación Android](https://github.com/Samu92/AGA-OSL-Android-App)


Harí Carreras Pérez

Ha participado en la documentación


- [x] [Descripción del proyecto](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Presentaci%C3%B3n%20del%20proyecto.md)
- [x] [Presentación del proyecto]()
- [x] [Documentación técnica - Herramientas utilizadas](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Entorno%20de%20pruebas/Contenedores%20y%20pruebas.md)
- [x] [Documentación REST - Apartado REST API](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Documentaci%C3%B3n%20t%C3%A9cnica.md)

Ha participado en el desarrollo de los siguientes contenedores

- [x] [Docker - Dockerhub]()


Ha participado en estos scripts de provisionamiento


- [ ] [Vagrantfile](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Scripts/Vagrantfile)
- [ ] [Cheffile](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Scripts/Cheffile)
- [x] [Dockerfile](https://github.com/hcarreras/AGA-OSL-rails-app/blob/master/Dockerfile)
- [ ] [Script de provisionamiento - Vagrant & Chef Solo](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Scripts/script_provisionamiento)


Ha participado en estos tests (o issues)


- [ ] [Test - SimpleTest PHP para la Web](https://github.com/JAntonioMarin/AGA-OSL-Web-App/tree/master/simpletest)
- [x] [Test - Test de Rails Rspec](https://github.com/hcarreras/AGA-OSL-rails-app/tree/master/spec)
- [ ] [Test - Test de Android JUnit](https://github.com/Samu92/AGA-OSL-Android-App/blob/master/src/com/etsiit/agaosl/TestAgaOsl.java)
- [x] [Definiendo el REST](https://github.com/Samu92/AGA-OSL/issues/14)
- [x] [Conectar con la API Google Drive](https://github.com/Samu92/AGA-OSL/issues/4)
- [x] [Urgente - Correciones](https://github.com/Samu92/AGA-OSL/issues/15)



Ha participado en esta integración continua y PaaS


- [x] [Jenkins en Digital Ocean Droplet](http://178.62.92.114:8080/)
- [x] [Documentación - Parte de integración continua](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Documentaci%C3%B3n%20t%C3%A9cnica.md)



Ha participado en esta configuración de despliegue automático


- [x] [Heroku - Aplicación Rails](https://aga-osl.herokuapp.com/stock.json)
- [ ] [AppSpot - Web](http://aga-osl-web.appspot.com/)
- [x] [Script Rails - Heroku]()

Ha participado en el desarrollo del proyecto


- [ ] [Desarrollo de la Web](https://github.com/JAntonioMarin/AGA-OSL-Web-App)
- [x] [Desarrollo del REST RoR](https://github.com/hcarreras/AGA-OSL-rails-app)
- [ ] [Desarrollo de la aplicación Android](https://github.com/Samu92/AGA-OSL-Android-App)


