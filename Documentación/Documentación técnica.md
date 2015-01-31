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

Cliente Web

Servidor REST RoR

Aplicación Android

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

    wget -q -O - http://pkg.jenkins-ci.org/debian/jenkins-ci.org.key | sudo apt-key add -
    sudo sh -c 'echo deb http://pkg.jenkins-ci.org/debian binary/ > /etc/apt/sources.list.d/jenkins.list'
    sudo apt-get update
    sudo apt-get install jenkins

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

### Provisionamiento

Hemos utilizado Vagrant, una herramienta para configurar automáticamente un entorno de desarrollo dentro de una máquina virtual en el ordenador. Esto sirve para que el entorno de desarrollo pueda coincidir exactamente con el servidor de producción y todos los compañeros del proyecto puedan ejecutar exactamente el mismo software.

En nuestro caso hemos utilizado Vagrant para el desarrollo de Rails, en cuestión de minutos podremos tener en marcha nuestro proyecto.

También hemos utilizado Chef que nos ayuda a automatizar como nuestro entorno de desarrollo de la máquina virtual obtiene la configuración. Éste se hará cargo de la creación de Ruby y todos los demás paquetes en nuestro sistema.

En nuestra máquina virtual en Digital Ocean hemos seguido los siguientes pasos para configurar el provisionamiento:

Primero hemos instalado Vagrant y Virtualbox

	sudo add-apt-repository multiverse
	sudo apt-get update
	sudo apt-get install virtualbox

	sudo apt-get install vagrant

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

```
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


```
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























