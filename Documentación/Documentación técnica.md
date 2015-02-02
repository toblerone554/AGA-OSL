#Creando un entorno de pruebas para la aplicación AGA-OSL

**Integrantes actuales:**

Juan Antonio Marín Sánchez

Pablo Peréz Ruiz

Samuel Hernández Ballesteros

Harí Carreras Pérez


- - -
###Contenedor de pruebas para AGA-OSL


### Contenedor desplegado

### Pruebas unitarias

Hemos utilizado [New Relic](http://newrelic.com/sp/brand?utm_source=GOOG&utm_medium=adwords&utm_content=rpm&utm_campaign=RPM&utm_term=NewRelic&mpc=PS-GOOG-RPM-EN-SIGNUP-Europe-Brand-NewRelic-LP3&gclid=Cj0KEQiAzb-kBRDe49qh9s75m-wBEiQATOxgwdPt9jKY8auuF_Y5KoKYNJ6eI_DDrJJmVO91Z-IM_MkaAlK18P8HAQ) para realizar las pruebas de la aplicación REST.

New Relic testea aplicaciones web y móviles en tiempo real.

Para testear nuestra aplicación Ruby On Rails, añadimos una nueva aplicación en New Relic.

Escogemos el lenguaje Ruby y generamos la clave de la licencia.

Añadimos la gema a nuestro Gemfile:

````
gem 'newrelic_rpm'
````

En el directorio de nuestra aplicación:

````
bundle install
````

Y descargamos el archivo newrelic.yml y lo añadimos al directorio de configuración (config):

[Archivo newrelic.yml añadido](https://github.com/hcarreras/AGA-OSL-rails-app/blob/a982918f4213d08cd1426d9ebe250fe774c3b584/config/newrelic.yml)

Ya tenemos la aplicación enlazada para los test:

![Aplicacion enlazada](http://i58.tinypic.com/2ajuom9.jpg)

Aqui vemos como se enlaza correctamente:

![NewRelic](http://i62.tinypic.com/20kdmhl.jpg)

En el apartado transaction podemos que funciones se han ejecutado en el REST y su tiempo de respuesta.

### TEST Realizados a las diferentes aplicaciones

Hemos realizado tests para las diferentes partes del proyecto

**Test en el cliente Web**

Los test para la web se han realizado con [SimpleTest](http://www.simpletest.org/) para PHP.

Para crear un test sobre una clase debemos crear una clase que extienda de UnitTestCase, en la que podemos obtener diferentes test, para nuestro caso hemos hecho unos test sencillos sobre la función de 3 clases distintas.

La documentación esta en: [Api SimpleTest](http://simpletest.org/api/)

Un ejemplo de test de un objeto seria:

```
 class pruebaClase extends UnitTestCase {
  function testdefunciondeclase(){
  $prueba = new Clase($parametros);
  $this->assertEqual('OK', $prueba->ejecutaFuncion());}
}

```

Test de comprobación de clases:

![Imagen Unit](http://i58.tinypic.com/vooh8n.jpg)

Y ahora tendriamos en la clase que retornar un ok en caso de que todo este correcto:

```

 class Clase{
 public function ejecutaFuncion(){
    //En caso de exito
    return 'OK';
  }
 
 }

```

![Imagen Unit 2](http://i62.tinypic.com/21ditjd.jpg)






En este [enlace](https://github.com/JAntonioMarin/AGA-OSL-Web-App/tree/master/simpletest) podemos ver los test realizados y [aquí](http://aga-osl-web.appspot.com/phpUnit.php) un ejemplo de ejecución de los mismos.

![Imagen de prueba de test](http://i61.tinypic.com/dczrls.jpg)

**Tests a servidor REST RoR**

El REST tiene diferentes tests para comprobar su correcto funcionamiento. 
Hemos usado lo popular librería [Rspec](http://rspec.info/) para crear los tests. El motivo es que usa una mejor sintaxis que los test que usa Rails por defecto. 

Tenemos dos tipos de tests para el REST:
Test de controladores:
Básicamente comprueban que el REST devuelve una estado OK cuando la petición es correcta. 
Estos test comprueban exactamente que la función INDEX y SHOW de nuestro recurso stock devuelve un 200 si la petición es correcta. [Enlace a test del controlador](https://github.com/hcarreras/AGA-OSL-rails-app/blob/master/spec/controllers/stock_controller_spec.rb)
Para el controlador "Search" (utilizado para filtar los datos desactualizados), no solo comprueba que la respuesta sea 200, si no que además comprueba que la respuesta está filtrada correctamente.  [Enlace a test del controlador](https://github.com/hcarreras/AGA-OSL-rails-app/blob/master/spec/controllers/searches_controller_spec.rb)

[Test de modelos](https://github.com/hcarreras/AGA-OSL-rails-app/blob/master/spec/model/document_spec.rb):
Comprueban que la lógica interna usada en el REST es correcta.
Para ello hemos creado una [hoja de cálculos diferente](https://docs.google.com/spreadsheets/d/1hpawAU9Y0cKmKXg0ROtTwPVmA_qkd9y-0tS2HheZ5RI), ya que vamos a modificarla durante los tests, y esto no debería afectar a la hoja que se usa para producción.
* Los test inicializan la aplicación con los datos de la hoja de cálculos y comprueba que se generan los modelos de manera válida.
* Comprueba como dado una referencia el modelo devuelve el equipo correcto o una excepción 404 si no encuentra el equipo.
* Comprueba como dado los datos de un equipo, los añade correctamente a la hoja de cálculo, modificando correctamente los parámetros de control (Última referencia)
* Comprueba como dado los datos actualiza un equipo o devuelve 404 si el equipo que se intenta modificar no existe.

**Test a la aplicación Android**

Para realizar test a la aplicación Android se ha utilizado el [Framework JUnit](http://junit.org/) para hacer test de las diferentes llamadas al servidor REST. En el siguiente [enlace](https://github.com/Samu92/AGA-OSL-Android-App/blob/master/src/com/etsiit/agaosl/TestAgaOsl.java) podemos ver el código del TestCase utilizado.

Para ejecutar estos test simplemente habría que declarar un objeto TestAgaOsl y llamar a las distintas funciones de la siguiente forma:
```
 TestCase test= new TestAgaOsl("recuperar_equipo");
 test.run();

```

### Integración Continua

Para la integración continua hemos utilizado Jenkins, siguiendo el siguiente tutorial:

[Turorial Jenkins](http://blog.diacode.com/integracion-continua-con-jenkins-parte-1-introduccion-e-instalacion)

Jenkins además de ser open source, ejecuta la batería de test de nuestros proyectos en un entorno independiente, archiva los resultados de cada build y genera estadísticas.

Tenemos una máquina virtual en la nube (Digital Ocean), con RoR instalado y con Jenkins funcionando bajo nuestro repositorio en Github.

Para utilizarlo lo que hemos hecho ha sido lo siguiente:

En primer lugar tenemos que instalar las dependencias Java en nuestro sistema si no las tenemos aún, para ello hacemos:

    sudo apt-get install openjdk-7-jre and openjdk-7-jdk

![Imagen1](http://i59.tinypic.com/icnyvn.jpg)


Accedemos a los repositorios de Jenkins para obtener la ultima versión:
```bash
    wget -q -O - http://pkg.jenkins-ci.org/debian/jenkins-ci.org.key | sudo apt-key add -
    sudo sh -c 'echo deb http://pkg.jenkins-ci.org/debian binary/ > /etc/apt/sources.list.d/jenkins.list'
    sudo apt-get update
    sudo apt-get install jenkins
```
![Imagen2](http://i57.tinypic.com/2qxc76r.jpg)

Para añadirle seguridad a Jenkins (que no trae por defecto) entramos en la url de nuestro servidor:

http://178.62.92.114/jenkins/configureSecurity/

Y marcamos las opciones 'Usar base de datos de Jenkins' y 'Permitir que los usuarios se registren'.

En la 'Configuración de seguridad' le damos permisos de lectura a usuario 'Anónimo', añadimos un nuevo administrador:

![IMAGEN3](http://i59.tinypic.com/jt9aib.jpg)

 y guardamos los cambios:

![IMAGEN4](http://i59.tinypic.com/ejingk.jpg)

Ahora reiniciamos el servidor de jenkins haciendo:

    sudo service jenkins restart

Para dar de alta al usuario que previamente dimos permisos, accedemos a la url de nuestro servidor Jenkins de nuevo y clickamos en Registrarse o Crear cuenta, e introducimos el mismo nombre de usuario, teniendo así todos los permisos.

Ya nos encontramos dentro del sistema autenticados, ahora desmarcaremos el checkbox que activamos antes 'Permitir que los usuarios se registren' para evitar que se registre gente no deseada.
Los usuarios deseados que queramos que accedan al sistema serán dados de alta manualmente a través de la gestión de usuarios de Jenkins:

    http://178.62.92.114/securityRealm/

![IMAGEN5](http://i59.tinypic.com/2u4u9o0.jpg)

Finalmente ya podemos trabajar de forma segura en nuestro servidor Jenkins CI.

Ahora vamos a configurar el proyecto Rails e intregrarlo con Bitbucket y HipChat:

[Tutorial Jenkins 2](http://blog.diacode.com/integracion-continua-con-jenkins-parte-2-configurar-proyecto-rails-e-integracion-con-bitbucket-y-hipchat)

En primer lugar instalamos los plugins necesarios para la integración con Bitbucket y Hipchat, haciendo click en Administrar Jenkins, Administrar Plugins e introduciendo los plugins en la search bar:

![IMAGEN7](http://i59.tinypic.com/33wbn81.jpg)

Para configurar el plugin de HipChat debemos generar un token en el servicio de Atlassian. Debemos logearnos con nuestra cuenta de HipChat desde la web y hacer click en el icono de la esquina superior derecha, y seleccionar 'Account Settings, API Access y Create Token'.

![IMAGEN8](http://i60.tinypic.com/23l00ea.jpg)

Seleccionamos el token generado, y nos vamos a Jenkins, Administrar Jenkins, Configurar el Sistema, Global HipChat Notifier Settings. En API Token introducimos el token y hacemos click en Guardar.

![IMAGEN9](http://i57.tinypic.com/55kw90.jpg)

Si seleccionamos nuestro proyecto y seleccionamos Construir ahora, veremos un historial de tareas planificadas para la fecha y hora indicadas, además podremos ver nuestro workspace si seleccionamos espacio de trabajo:

![IMAGEN10](http://i60.tinypic.com/29erdzo.jpg)

Seleccionamos por ejemplo la última tarea #9, y podemos ver un resumen de ésta:

![IMAGEN11](http://i59.tinypic.com/2n8oc5e.jpg)

Vemos gracias a la salida de consola que la tarea ha sido planificada correctamente sin fallos (esfera de color azul), Finished: SUCCESS.

![IMAGEN12](http://i62.tinypic.com/1zdmdl3.jpg)

Para configurar nuestro proyecto, nos logueamos en Jenkins, seleccionamos dicho proyecto y nos vamos a Configurar. 
* En la sección de HipChat Notifications habilitamos Notify Build Start. 

![IMAGEN13](http://i58.tinypic.com/nygzup.jpg)

* En la sección Configurar el origen del código fuente seleccionaremos el tipo Git y la URL del repositorio.

![IMAGEN14](http://i61.tinypic.com/2uhl152.jpg)

* En Disparadores de ejecuciones seleccionamos "Lanzar ejecuciones remotas (ejem: desde 'scripts')"
* En Ejecutar, hacemos click en el desplegable 'Añadir un nuevo paso' y elegimos 'Ejecutar linea de comandos (shell)', en la que añadimos:

```bash
    source /var/lib/jenkins/.bashrc
    bundle install
    cp /var/lib/jenkins/conf_projects/nombre_proyecto/database.yml config/database.yml
    rake
```
![IMAGEN15](http://i58.tinypic.com/505rwo.jpg)

* En Acciones para ejecutar después haremos click sobre Añadir una acción y elegimos HipChat Notifications.

Pulsamos sobre Aplicar los cambios y Guardar.

![IMAGEN16](http://i57.tinypic.com/2gw5cvk.jpg)

Acceder a Jenkins de nuestro proyecto: http://178.62.117.12:8080/

#####Para asociar el servicio de jenkins en github, hemos hecho lo siguiente:

En nuestro repositorio, nos hemos ido al menu vertical de la derecha, y le hemos dado a Settings:
![IMAGEN1](http://i57.tinypic.com/2mhshew.jpg)

Webhooks & Services, add service, y hemos seleccionado del despegable "Jenkins (Git plugin)".

![IMAGEN2](http://i62.tinypic.com/hvcw79.jpg)

Abajo en el casillero hemos introducido la url de jenkins en la máquina virtual de Digital Ocean:

http://178.62.92.114:8080//github-webhook/

Y le hemos dado a Add Service:

![IMAGEN3](http://i57.tinypic.com/15ofh2h.jpg)

Una vez asociado el servicio al repositorio, cada vez que se haga un push al repositorio se hará una nueva build en jenkins.

Accedemos a la url: http://178.62.92.114:8080/

Nos autenticamos y seleccionamos AGA-OSL-WEB y le damos a GitHub Hook Log. Ahí está el log del último push que se hizo:


![IMAGEN4](http://i57.tinypic.com/35koduo.jpg)


### Provisionamiento

Hemos utilizado Vagrant, una herramienta para configurar automáticamente un entorno de desarrollo dentro de una máquina virtual en el ordenador. Esto sirve para que el entorno de desarrollo pueda coincidir exactamente con el servidor de producción y todos los compañeros del proyecto puedan ejecutar exactamente el mismo software.

En nuestro caso hemos utilizado Vagrant para el desarrollo de Rails, en cuestión de minutos podremos tener en marcha nuestro proyecto.

También hemos utilizado Chef que nos ayuda a automatizar como nuestro entorno de desarrollo de la máquina virtual obtiene la configuración. Éste se hará cargo de la creación de Ruby y todos los demás paquetes en nuestro sistema.

En nuestra máquina virtual en Digital Ocean hemos seguido los siguientes pasos para configurar el provisionamiento:

Primero hemos instalado Vagrant y Virtualbox
```bash
	sudo add-apt-repository multiverse
	sudo apt-get update
	sudo apt-get install virtualbox

	sudo apt-get install vagrant
```
Después instalamos los siguientes plugins de vagrant

	vagrant plugin install vagrant-vbguest

Este plugin instala automaticamente el host de VirtualBox Guest Addition en el sistema invitado.

	vagrant plugin install vagrant-librarian-chef

Este automaticamente inicia chef cuando encendemos nuestra máquina.

Ahora creamos el config de Vagrant, para ello hemos entrado en el directorio de nuestro proyecto y hemos ejecutado lo siguiente:

	vagrant init

    touch Cheffile

Estos comandos generan los archivos Vagrantfile y Cheffile que habrá que configurar.


**Fichero Cheffile**

Este fichero es igual que el fichero Gemfile que tenemos en nuestro proyecto Rails para indicar las gemas que se usan pero para Chef. Este fichero define las recetas de cocina del Chef que utilizaremos en nuestro proyecto.

Más tarde en el VagrantFile le diremos a Vagrant cómo utilizar las recetas para configurar nuestro entorno.

En nuestro Cheffile tenemos:

```bash
site  "http://community.opscode.com/api/v1"

cookbook 'apt'
cookbook 'build-essential'
cookbook 'ruby_build'
cookbook 'nodejs', git: 'https://github.com/mdxp/nodejs-cookbook'
cookbook 'rbenv', git: 'https://github.com/fnichol/chef-rbenv'
cookbook 'vim'
```

**Fichero Vagrantfile**

Nuestro Vagrantfile define el sistema operativo y la configuración Chef para nuestra máquina virtual.

Utilizamos Ubuntu 14.04 de 64 bits, utilizamos el puerto 3000 de la máquina virtual, cuando ejecutemos nuestro servidor rails podremos acceder desde nuestro navegador.

Nuestro VagrantFile


```bash
# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # Use Ubuntu 14.04 Trusty Tahr 64-bit as our operating system
  config.vm.box = "ubuntu/trusty64"

  # Configurate the virtual machine to use 1GB of RAM
  config.vm.provider :virtualbox do |vb|
    vb.customize ["modifyvm", :id, "--memory", "1024"]
  end

  # Forward the Rails server default port to the host
  config.vm.network :forwarded_port, guest: 3000, host: 3000

  # Use Chef Solo to provision our virtual machine
  config.vm.provision :chef_solo do |chef|
    chef.cookbooks_path = ["cookbooks", "site-cookbooks"]

    chef.add_recipe "apt"
    chef.add_recipe "nodejs"
    chef.add_recipe "ruby_build"
    chef.add_recipe "rbenv::user"
    chef.add_recipe "rbenv::vagrant"
    chef.add_recipe "vim"

    # Install Ruby 2.1.3 and Bundler
    chef.json = {
      rbenv: {
        user_installs: [{
          user: 'vagrant',
          rubies: ["2.1.3"],
          global: "2.1.3",
          gems: {
            "2.1.3" => [
              { name: "bundler" }
            ]
          }
        }]
      },
    }
  end
end
```

Ahora que tenemos Vagrant y Chef configurados correctamente, vamos a arrancar la máquina virtual Vagrant y entrar por ssh en ella.

La primera vez que ejecutamos vagrant tomará un tiempo, ya que aprovisionará la máquina virtual con la configuración chef. Después de la primera vez, vagrant no tendrá que ejecutar chef y se iniciará mucho más rápido.

Si alguna vez se edita el Vagrantfile o Cheffile ,se puede utilizar el siguiente comando para volver a configurar la máquina.

	vagrant provision

Vagrant configura la carpeta vagrant / como un directorio compartido entre la máquina virtual y el sistema operativo host. Si ejecutamos, vagrant cd / y ejecutamos ls podremos ver todos los archivos de nuestra aplicación Rails.

Aquí, podemos ejecutar bundle para instalar todas las gemas como solemos hacer normalmente.

Desde este directorio podemos hacer rails server para ejecutar nuestro servidor rails en el puerto 3000.

Este proceso se ha automatizado mediante un [script de provisionamiento](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Scripts/script_provisionamiento) para la instalación de vagrant, chef y virtualbox

**Docker**

Tras mucha guerra intentando hacer un Dockerfile desde una imagen de ubuntu, al final gracias a como Docker permite compartir imagenes, ha resultado ser extraordinariamente sencillo al final. 
Gracias a que hay imagenes con rails que otros usuarios comparten, el [Dockerfile](https://github.com/hcarreras/AGA-OSL-rails-app/blob/master/Dockerfile) se ha quedado realmente sencillo. Esta imagen base de Docker, tiene ya ruby y rails, asi como nginx y otras liberías necesarias. Al ejecutar build:
*Copiará el directorio base (en el cual está la aplicación rails) a "/app". 
*Ejecutará el comando "bundle install" el cual instala todas las dependencias de rails.
Al ejecutar el comando run ejecutará el servidor y dará salida al puerto 80
Para probar el dockerfile en local podemos escuchar a cualquier otro puerto o al mismo 80

![Docker funcionando](http://s3.postimg.org/58zxqqvwj/Screen_Shot_2015_02_02_at_20_25_07.png)

Y así hemos montando un docker funcionando con un servidor rails. 
Lo hemos subido a [dockerhub](https://registry.hub.docker.com/u/hcarreras/aga-osl-rails-app/).
Y aquí lo puedes ver funcionando: 


### API REST ###

La API es completamente REST. 
Básicamente maneja un recurso al que hemos llamado stock, el cual son los equipos de [la hoja de excel](https://docs.google.com/spreadsheets/d/1UAB7hIZ_iHl1L1i3P6m--rclLCf8wR-8g6jcQ3dRthQ)
Lo primero que hace la API es autenticarse con un usuario que hemos creado para la OSL. Después pide la hoja de cálculo gracias a la gema de [google drive](https://github.com/gimite/google-drive-ruby) la cual por desgracia tiene una documentación extremadamente pobre.
Esta gema nos devuelve los datos de una forma bastante cruda, por lo que la aplicación lo gestion con una clase llamada Document y otra llamada Computer, dónde Computer es una fila de la hoja.
Los controladores gestionan las peticiones (después de que las rutas asignen la petición al controlador), en el caso de StockController, este gestionará las peticiones REST a las direcciones /stock.json y /stock/:id.json
Un ejemplo de un Computer parseado a JSON sería:

	{
		referencia: 1,
		revisado: "",
		localizacion: "Oficina, en uso",
		tipo: "Sobremesa",
		cpu: "Intel(R) Pentium(R) Dual CPU E2180",
		mhz: "2048",
		ram: "1024",
		disco_duro: "160",
		cd_dvd: "Grabadora DVD",
		floppy: "No",
		ethernet: "Sí",
		fuente_alimentacion: "420 W",
		notas: "",
		campana_numero: "OSL",
		puntuacion_cpu: "71433554238",
		puntuacion_ram: "10",
		puntuacion_dd: "10",
		puntuacion: "85716777119",
		ultima_modificacion: "2015-01-25"
	}

Básicamente gestiona lo que cualquier API REST
El [controllador de stock](https://github.com/hcarreras/AGA-OSL-rails-app/blob/master/app/controllers/stock_controller.rb) gestiona:
Un elemento de 
* GET /stock.json lo controla a acción index. Devuelve un json con un array de hashes, dónde cada hash es un Computer parseado a JSON
* GET /stock/:referencia.json lo controla a acción show. Devuelve un 404 si la referencia solicitada no existe. Si existe, devuelve el Computer parseado a JSON
* POST /stock + request_data: [Datos del nuevo computer]. Es gestionado por la acción Create. Creará un Computer y lo escribirá en el excel. Asignará automáticamente la referencia necesaria, por lo que no se debe pasar como parámetro.
* PUT /stock/:referencia.json + request_data: [Datos para el computer]. Es gestionado por la acción Update. Modificará el Computer  con referencia igual a la recibida por el argumento y lo actualizará con los datos pasados como parámetro en la clave [:data]. Los cambios los escribirá en el excel. 

No tiene función DELETE debido a razones de consistencia.

Ejemplos de llamadas CURL a la API:

Get del recurso (index) en formato json

    curl -X GET -H "Content-Type: application/json"  http://aga-osl.herokuapp.com/stock.json

Get de una instancia del recurso (show) en formato json

    curl -X GET -H "Content-Type: application/json"  http://aga-osl.herokuapp.com/stock/:referencia.json
    curl -X GET -H "Content-Type: application/json"  http://aga-osl.herokuapp.com/stock/226.json

POST para crear

    curl -X POST -H "Content-Type: application/json" -d "{\"data\":[\"Testing con curl\",\"no importante\",\"\",\"borrable\"]}"  http://aga-osl.herokuapp.com/stock.json

Para editar una instancia (update) usamos PUT. Le tenemos que pasar los nuevos datos como si fuese un create.

    curl -X PUT -H "Content-Type: application/json" -d "{\"data\":[]}"  http://aga-osl.herokuapp.com/stock/:referencia.json
    curl -X PUT -H "Content-Type: application/json" -d "{\"data\":[\"Nuevos datos\",\"no son importante\",\"\",\"\",\"borrable\"]}"  http://aga-osl.herokuapp.com/stock/389.json
   
    
Para las búsquedas se ha creado un recurso llamado "Search" y su controlador es el [SearchesController](https://github.com/hcarreras/AGA-OSL-rails-app/blob/master/app/controllers/stock/searches_controller.rb) su ruta es /stock/search
Cuando buscamos estamos creando una búsqueda, por lo que es exactamente lo que hacemos, llamar a la función create de Search.
Hay que enviar un método http POST para crear la búsqueda. A este le pasamos como parámetros en la clave request_data los datos que actualmente tenemos, el objetivo es que devuelve los datos con una fecha de actualización mayor y los datos cuya referencia no tenemos. Esto evitará grandes cargas de datos cuando lo descargamos desde el móvil. 
Los parámetros que espera es un string que dentro tenga un array de hashes, cada hash tiene 2 claves: "Referencia" y "ultima_modificacion"
ultima modificación ha de ir en formato "dia/mes/año"

* Post /stock/search.json + request_data["[Datos que tenemos]"] 

Ejemplo con curl:

    curl -X POST -H "Content-Type: application/json" -d "{\"request_data\":\"[{referencia: 1, ultima_modificacion: '26/01/2015'},{referencia: 300, ultima_modificacion: '16/01/2015'}]\"}"  http://aga-osl.herokuapp.com/stock/search.json

En este ejemplo devolverá todos los equipos excepto:
	El equipo con referencia 1 si su fecha de ultima_modificación es posterior al 26/01/2015
	El equipo con referencia 300 si su fecha de ultima_modificación es posterior al 16/01/2015
**Notese que los datos están dentro de un string**






















