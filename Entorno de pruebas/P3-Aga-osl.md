#Creando un entorno de pruebas con LXC (Linux Containers) para la aplicación AGA-OSL

Integrantes actuales:

Juan Antonio Marin Sanchez
Pablo Perez Ruiz
Samuel Hernández Ballesteros
Harí Carreras Pérez
Juan Antonio Ruiz Torres

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

Una vez desplegada podemos acceder a través de la siguiente dirección (Contenedor AGA-osl):


# Qué tenemos hasta ahora
A día de hoy tenemos desarollada una primera versión de la aplicación REST realizada con Ruby On Rails que permite acceder y obtener información de una hoja de cálculo ubicada en una cuenta de Google Docs.

También estamos desarrollando dos aplicaciones de tipo cliente que interactuarán con esta aplicación haciendo uso de la información que reciban.

Estas aplicaciones de tipo cliente son una página web y una aplicación Android.













