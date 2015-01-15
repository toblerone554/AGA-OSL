#Creando un entorno de pruebas con LXC (Linux Containers) para la aplicación AGA-OSL

**Integrantes actuales:**

Juan Antonio Marin Sanchez

Pablo Perez Ruiz

Samuel Hernández Ballesteros

Harí Carreras Pérez


- - -


El primer paso será crear un "puente" con nuestra interfaz de red. Nos servirá para enjaular aplicaciones y servicios, funcionando como una especie de chroot, pero mucho más versátil.

Primero, debemos instalar los paquetes necesarios.

	sudo apt-get install lxc lxc-templates bridge-utils

Comprobamos que se ha creado la interfaz de red.

	ifconfig -a

![Tema4EJ2.png](http://i62.tinypic.com/152g5cy.jpg)

	brctl show

Vemos que el contenedor tiene acceso a internet.

Creamos un contenedor Debian para nuestra aplicación:

	sudo lxc-create -t debian -n Aga-osl

![P3-1](http://i59.tinypic.com/4j85cg.jpg)

Lo iniciamos con el siguiente comando:

	lxc-start -n Aga-osl

![P3-2](http://i59.tinypic.com/20ifbet.jpg)

Como udev no funciona dentro de los contenedores, debemos asegurarnos que se crean unos dispositivos mínimos. Para ello, creamos el archivo /var/lib/lxc/Aga-osl/nodos, y le añadimos los dispositivos necesarios:

![P3-3](http://i62.tinypic.com/15z1ao3.jpg)

Como hemos creado los nodos a mano, añadimos un script para eliminarlos después. Creamos el archivo /var/lib/lxc/Aga-osl/stop con el siguiente contenido:

![P3-4](http://i62.tinypic.com/2lwtxmq.jpg)

Damos permisos de ejecución a los dos archivos:

	sudo chmod +x /var/lib/lxc/Aga-osl/{nodos,stop}

Una vez hecho esto, editamos el archivo de configuración y lo adaptamos a nuestras necesidades, incluyendo los hooks que acabamos de crear:

![P3-5](http://i60.tinypic.com/23scjsn.jpg)

Comprobamos que todo va bien accediendo al contenedor con:

	sudo lxc-console -n Aga-osl

Modo demonio:
	lxc-start -n name -d #( -d for daemonize)

También podemos instalar lxc-webpanel para controlar las máquinas virtuales que tengamos instaladas.

	wget http://lxc-webpanel.github.io/tools/install.sh -O - | bash

Y accedemos desde el navegador con http://localhost:5000

![P3-6](http://i59.tinypic.com/34pkg86.jpg)

Este panel nos permitirá restringuir los recursos que se puede usar.

MUY IMPORTANTE UNA VEZ CREADO EL CONTENEDOR DEBEMOS CONFIGURAR BIEN LA INTERFAZ DE RED PARA QUE NUESTRO SERVIDOR TENGA SALIDA A INTERNET, PODEMOS HACERLO SE LA SIGUIENTE FORMA:

	iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 3000 -j DNAT --to 10.0.3.251:3000

Donde 10.0.3.251:3000 será la ip del contenedor junto con el puerto del servidor.

# Pruebas unitarias

Hemos utilizado [New Relic](http://newrelic.com/sp/brand?utm_source=GOOG&utm_medium=adwords&utm_content=rpm&utm_campaign=RPM&utm_term=NewRelic&mpc=PS-GOOG-RPM-EN-SIGNUP-Europe-Brand-NewRelic-LP3&gclid=Cj0KEQiAzb-kBRDe49qh9s75m-wBEiQATOxgwdPt9jKY8auuF_Y5KoKYNJ6eI_DDrJJmVO91Z-IM_MkaAlK18P8HAQ) para monitorizar la aplicación REST.

New Relic testea aplicaciones web y móviles en tiempo real.

![NewRelic](http://i62.tinypic.com/2qs43s6.jpg)

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

# Contenedor desplegado
Una vez instalado y funcionando hace falta instalar todos los componentes necesarios para probar nuestra aplicación.

En nuestro caso para que funcione nuestra aplicación REST instalamos Ruby On Rails con RVM utilizando el siguiente script:

    #!/bin/bash
    apt-get install build-essential openssl libreadline6 libreadline6-dev curl git-core zlib1g zlib1g-dev libssl-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt-dev autoconf libc6-dev ncurses-dev automake libtool bison subversion pkg-config

    #RVM
    gpg --keyserver hkp://keys.gnupg.net --recv-keys D39DC0E3
    \curl -sSL https://get.rvm.io | bash -s stable --rails

    #Clonamos el repositorio en nuestro contenedor
    git clone https://github.com/Samu92/AGA-OSL-rails-app.git

    #Accedemos a la carpeta
    cd AGA-OSL-rails-app

    #Instalamos las gemas necesarias
    bundle install
    gem install nokogiri -v '1.6.3.1' -- --use-system-libraries
    bundle install
	
    curl -sL https://deb.nodesource.com/setup | sudo bash -
    
    sudo apt-get install -y nodejs
    
    #Iniciamos la aplicación
    rails s

![P3-8](http://i60.tinypic.com/2s66dky.jpg)

Tenemos una máquina virtual para pruebas que está ubicada en la nube corriendo bajo Ubuntu 14.04.

La ip del lxc-web panel es http://178.62.92.114:5000/

La ip de nuestro contenedor lxc debianita que contiene la aplicación REST es http://178.62.92.114:3000/


# Qué tenemos hasta ahora
A día de hoy tenemos desarollada una primera versión de la aplicación REST realizada con Ruby On Rails que permite acceder y obtener información de una hoja de cálculo ubicada en una cuenta de Google Docs.

[Repositorio de la aplicación REST Ruby On Rails](https://github.com/hcarreras/AGA-OSL-rails-app)

[Aplicación desplegada](http://aga-osl.herokuapp.com/)

También estamos desarrollando dos aplicaciones de tipo cliente que interactuarán con esta aplicación haciendo uso de la información que reciban.

Estas aplicaciones de tipo cliente son una página web y una aplicación Android que tendrá la funcionalidad de trabajar con códigos QR.

[Aplicación Android](https://github.com/Samu92/AGA-OSL-Android-App)

La web se desarrollará en el mismo repositorio que el REST.

En la parte de documentación y pruebas tenemos:

**Documentación:**

[Explicación del proyecto v1.0](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Documentaci%C3%B3n%20proyecto%20de%20gesti%C3%B3n%20automatizada%20de%20almac%C3%A9n%20de%20reciclaje.md)

[Presentación v1.0](https://github.com/Samu92/AGA-OSL/tree/master/Documentaci%C3%B3n/Presentaci%C3%B3n)

**Contenedores:**

[Contenedor debianita que contiene REST Ruby On Rails - Documentación](https://github.com/Samu92/AGA-OSL/blob/master/Documentaci%C3%B3n/Entorno%20de%20pruebas/Contenedores%20y%20pruebas.md)

[Contenedor desplegado](http://178.62.92.114:3000/)

**Pruebas unitarias:**

Pruebas en el REST Ruby On Rails con Test::Unit

Por el momento no tenemos pruebas

**Monitorización:**

Hemos utilizado [New Relic](http://newrelic.com/sp/brand?utm_source=GOOG&utm_medium=adwords&utm_content=rpm&utm_campaign=RPM&utm_term=NewRelic&mpc=PS-GOOG-RPM-EN-SIGNUP-Europe-Brand-NewRelic-LP3&gclid=Cj0KEQiAzb-kBRDe49qh9s75m-wBEiQATOxgwdPt9jKY8auuF_Y5KoKYNJ6eI_DDrJJmVO91Z-IM_MkaAlK18P8HAQ) para monitorizar la aplicación REST.

New Relic monitorea aplicaciones web y móviles en tiempo real.













