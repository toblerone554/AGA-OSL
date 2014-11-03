#Gestión del Almacén de la oficina de software libre.

#### Participantes
Juan Antonio Marín Sánchez

Samuel Hernández Ballesteros

Pablo Pérez Ruíz

Harí Carreras Pérez

Juan Antonio Ruiz Torres

## Introducción
La [oficina de software libre](http://http://osl.ugr.es/), en colaboración con la Gerencia de la UGR, el [CSIRC](http://http://csirc.ugr.es/), el resto de la [Delegación del rector para las TIC](http://detic.ugr.es/) y la [Unidad de Calidad Ambiental](http://www.ugr.es/pages/servicios/uca) de la UGR ha lanzado un campaña de donación de ordenadores a Asociaciones y organizaciones sin ánimo de lucro.

Se trata de ordenadores retirados del uso en las diferentes dependencias de la UGR. Estos equipos informáticos han sido puestos a punto, reparados cuando hacía falta y dotados de todo el software necesario (software libre). Dada la variedad de configuraciones, cada uno de ellos ha sido dotado con la distribución de Linux que mejor se le adaptaba, al igual que se ha hecho con todo el software que le acompaña. Ninguno de los equipos es portátil, todos son equipos de sobremesa.

![puente-hecho-con-monitores-reciclados.png](./Imágenes/puente-hecho-con-monitores-reciclados.png)

Esta campaña de donaciones está dirigida a ONGs, asociaciones y, en general, colectivos sin ánimo de lucro que lo soliciten. Hay un catálogo del material disponible una [hoja con las bases de la campaña](http://osl.ugr.es/cursos-y-eventos/ordenadores-libres-con-software-libre/bases-de-la-x-campana-ordenadores-libres-con-software-libre/) y un formulario donde indicar todos los datos necesarios para solicitar los ordenadores que se consideren necesarios. Todos los equipos del catálogo tienen pantalla, teclado y ratón, pero si hacen falta pantallas adicionales sólo hay que indicar en el catálogo el número de pantallas que se necesitan.

Las solicitudes recibidas serán examinadas por una comisión de la [Delegación TIC de la Universidad de Granada](http://detic.ugr.es/) para asignar el material del modo más justo y eficiente posible.

Fuentes:

[OSL](http://osl.ugr.es/)

[Última campaña realizada](http://osl.ugr.es/2014/09/24/xii-campana-ordenadores-libres-con-software-libre/)

## ¿Cómo funciona el almacén actualmente?

Actualmente el sistema de almacenamiento es muy "manual" introduciendo todos los datos de los diferentes componentes del almacén "a mano" en una hoja de cálculo de Google Docs. Los diferentes equipos situados en diferentes localizaciones están identificados mediante un número de referencia (actualmente hecho a mano - post-it identificativo ó similar). La información de estos equipos junto con su número de referencia son pasados a una hoja de cálculo para llevar constancia de todos los equipos existentes.

Un usuario rellena un formulario solicitando los equipos que desee. Esa solicitud es administrada por la OSL encargada de ponerse en contacto con el solicitante y llegar a un acuerdo de recogida.

Mediante un [sistema de tickets](http://es.wikipedia.org/wiki/Sistema_de_seguimiento_de_incidentes) se realiza un seguimiento de la solicitud.

Se deben generar informes para que las distintas organizaciones colaboradoras tengan constancia de dicha solicitud y que se ha hecho con el material.

Existe la posibilidad de solicitar una furgoneta de la universidad para realizar el transporte indicando una fecha concreta.

Los cambios realizados y solicitudes se graban en una hoja de cálculo de Google Docs donde se muestra el número de referencia del equipo junto con toda la información necesaria, incluyendo la localización del mismo.

También hay un documento de Google Docs donde se indica todo lo existente en el almacén. Inventario, stock.

## ¿Qué es lo que nos pide el cliente?

Lo que se pretende en este proyecto y lo que nos ha solicitado el cliente es agilizar y automatizar el proceso para poder llevar un mejor seguimiento y así poder evitar errores y perdidas de material.

Los requisitos del cliente son los siguientes:

**++Gestión integral del material a reciclar++**

Desde solicitud de recogida hasta entrega por donación del mismo.

Uso de códigos QRs para controlar la presencia de los diferentes equipos (cada QR contendrá el número de referencia del equipo) cualquier cambio en los datos del equipo se hará por lectura del código QR y mediante un formulario se seleccionaran distintas opciones para modificar los datos. Estos datos se modificarán directamente en los documentos de Google Docs pertinentes.

Se debe llevar un seguimiento de inventario de cada uno de los componentes. Esto se hará en otro documento de Google Docs.

Se deben generar los informes necesarios para enviarlos vía e-mail a los organismos que requieren tener conocimiento de todo lo realizado (tiempo desde la solicitud hasta la recogida, tiempo en el almacén, destino de los ordenadores donados...)

El [front-end ](http://es.wikipedia.org/wiki/Front-end_y_back-end) debe ser amigable permitiendo al usuario interactuar con un formulario, modificar los datos del almacén, ver en todo momento la información de stock, solicitudes pendientes, realizadas...

El [back-end](http://es.wikipedia.org/wiki/Front-end_y_back-end) deberá tener la funcionalidad necesaria para acceder a los datos de cada documento, devolver, insertar, modificar información y permitir flexibilidad tanto hardware como software.

## ¿Qué herramientas se utilizarán para implementar lo que nos pide el cliente?

Nos situamos en un proyecto del tipo SaaS/PaaS es decir se utilizarán herramientas desde los que se accederá vía Internet desde un cliente (SaaS) y también se utilizarán servicios de cloud computing (PaaS), en este caso los servicios Cloud de Google.

Para el front-end se utilizarán herramientas de diseño web para la realización de la web como pueden ser Javascript, [MongoDB](http://es.wikipedia.org/wiki/MongoDB), [express.js](http://blog.solucionex.com/javascript/expressjs-un-framework-para-nodejs), [node.js](http://es.wikipedia.org/wiki/Node.js), HTML5, CSS3 etc.

También, para la lectura de los códigos QR se desarrollará una aplicación [Android](http://developer.android.com/index.html), permitiendo modificar y comprobar los datos de un equipo.

Para el back-end se utilizarán herramientas que nos proporciona Google para acceder a los documentos de Google Docs que necesitamos y así recuperar, insertar y modificar información en los mismos.


- - -
Documento creado por Samuel Hernández Ballesteros a fecha de: 26 de Octubre de 2014.

Modificaciones:

- - -

