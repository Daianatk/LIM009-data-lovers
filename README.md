# Word Bank

## Resumen del proyecto

En este proyecto **se contruyo un Site Web para informar sobre la Data ya existente del Banco Mundial** 

* [Indicadores de desarrollo del Banco Mundial]
  de algunos países (Brasil, Chile, México y Perú). Estos datos incluyen
  indicadores demográficos, económicos y comerciales.

### Definición del producto

En este archivo `README.md` se esta documentando el proyecto elaborado por nosotras,considerando que lo entregado resuelve el problema que el usuario compartio.

### Historias de usuario

1.    Primera Historia de Usuario:
Como usuario deseo poder ver la data del banco mundial a partir de la selección de un indicador.

Para esto necesito los siguientes aspectos:
 
a.	Experiencia de usuarios:
-     Investigación sobre los usuarios, utilizando encuesta.
-     Diagrama de Flujo, para conocer los pasos a seguir.
-     Prototipado de la vista, realizar un maquetado.
 
b.	Funcionalidad:
-    Crear una función que muestre la data completa.
-    Crear una función que muestre solo los indicadores.
-    Mostrar los indicadores dentro de una Lista en HTML en la cual el usuario seleccione el índice que desea ver, y esta se muestre en el contenido de la web como un título.
 
c. 	Estructura HTML:
-     Dentro del body crear un header con un contenedor para insertar una imagen.
-     Crear un banner para insertar una imagen.
-     Crear un contenedor y un formulario para implementar el elemento lista dentro del body.
-     Dentro del contenido de la web se mostrará el título del indicador elegido
-     Crear un footer.

d.	Estructura CSS:
-     Establecer paleta de Colores a usar.
-     Establecer estilos principales para cada elemento del body.

e.	Test:
-     Escribir pruebas para las funciones principales.
-     Ejecutar las pruebas unitarias y corregir errores.

2.    Segunda Historia de Usuario:
Como usuario deseo poder filtrar la data por países.

Para esto necesito los siguientes aspectos:
 
Funcionalidad:
-   Crear una función que al seleccionar una opcion me muestre los datos por país es decir utilizando los cuatro países (México, Brasil, Chile y Perú), luego de darle un clic a la lista de indicadores.
-  Mostrar los países dentro del formulario con opciones para elegir la información en años del país que desea verificar. Dicha información se mostrará en una tabla.
 
b. 	Estructura JS:
-   Crear dentro del main.js la función que nos mostrará las opciones de los países.
-   Crear dentro del main.js la función que creará la tabla, la cual mostrara los años y cantidad.

c.	Test:
-     Escribir pruebas para las funciones principales.
-     Ejecutar las pruebas unitarias y corregir errores.

Definición de Terminado (Primer Sprint)
La web muestra la data completa filtrada mediante indicadores dentro de la web, esto se realiza dando click a la lista y eligiendo qué indicador desea mostrar al realizar esta acción se muestra dentro del contenido de la web como un título, se estableció como deberá mostrar el logo y el título, se puso una imagen en el banner. La web es responsive y posee colores, tipografía y elementos gráficos. 
Se realizó la función que muestra los datos del país seleccionado en una tabla (Solo se puede seleccionar un país).
 
3.    Tercera Historia de Usuario:
Como usuario deseo seleccionar por años la data que quiero ver.

Para esto necesito los siguientes aspectos:

Funcionalidad:
Añadir y/o modificar a la función de filtrado con los parámetros que contengan la cantidad de años ingresados por el usuario.
Esto funcionara de la siguiente manera: El usuario selecciona el indicador pEsto funcionara de la siguiente manera: El usuario selecciona el indicador luego el pais, y despues los años. Con esto se mostrará la tabla y haciendo click en el menú gráfico aparecerá la tabla con los datos y a su vez el gráfico estadístico.

Estructura HTML:
Agregar un par de listas “select”  que muestren el periódo de tiempo de la data, para que el usuario pueda seleccionar los años que desee ver.

Estilos en CSS:
Dar un formato centrado y amigable a los“select” .

Test:
Escribir pruebas para la función modificada.
Ejecutar las pruebas unitarias y corregir posibles errores.
Definición de Terminado (Segundo Sprint)
La web muestra los datos filtrados por año, desde, hasta, segun el usuario lo solicite. Esto se realiza seleccionando el indicador, luego se selecciona un país, después se selecciona los años que van desde 1960 hasta 2017, todo esto se muestra a través de una tabla.

3.    Tercera Historia de Usuario:
Como usuario deseo agregar gráfico a la data que quiero ver.

Para esto necesito los siguientes aspectos:

Funcionalidad:
Añadir una función que nos permita crear gráficos o implementar las librerías de Chart.js y Google Chart Tools.
Esto funcionara de la siguiente manera: El usuario selecciona el indicador luego el pais, y despues los años. Aparecerá la tabla con los datos y a su vez el gráfico estadístico. Para mostrar las operaciones básicas el usuario deberá dar clic en el menú ver estadísticos y se mostrará las funciones.

      b.   Estructura HTML:
Agregar el código necesario para mostrarlo dentro del contenido.

      c.   Estilos en CSS:
Dar un formato centrado a los elemento que se mostrarán.

5.    Cuarta Historia de Usuario:
Como usuario deseo observar datos estadísticos en la interfaz para poder comprender mejor la información

Para esto necesito los siguientes aspectos:

Funcionalidad:
Añadir una funciones para realizar las operaciones estadísticas básicas como la media, mediana, moda, etc.
Esto funcionara de la siguiente manera: El usuario selecciona el indicador luego el pais, y despues los años. Con esto se mostrará la tabla y haciendo click en el menú gráfico aparecerá la tabla con los datos y a su vez el gráfico estadístico.

      b.   Estructura HTML:
Agregar el código necesario para mostrarlo dentro del contenido.

      c.   Estilos en CSS:
Dar un formato centrado al elemento que se mostrará.

Definiciones de Usuario(Tercer Sprint)

Muestra una interfaz con una opción para seleccionar indicadores , otra opción que muestra los países disponibles en la data y otra que permita seleccionar el año desde y hasta el cual el usuario desee ver la información, a esto se le acompañará amigables botones que el usuario ejecutará para el filtrado o para limpiar lo ya seleccionado por el mismo; en la parte de section el usuario podrá visualizar la data filtrada de acuerdo a lo seleccionado acompañado a esto le acompañará un gráfico temporal de dicho indicador y a su vez se podrá mostrar información estadísticas básica en la opción del menú ver estadística. El sitio web no debe contener errores, y la interfaz debe ser agradable para el usuario.

Para ello necesito:
Implementar librería.

### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

![image](https://github.com/Daianatk/LIM009-data-lovers/blob/master/src/img/prototipo-bajafidelidad-dataworldbank.JPG)
Prototipo de Baja Fidelidad realizado en Excel.

#### Prototipo de alta fidelidad

![image](https://github.com/Daianatk/LIM009-data-lovers/blob/master/src/img/figma-mobile-dataworldbank.jpg)

Prototipo de Alta Fidelidad realizado en Figma para Mobile.
Link en Zeplin: https://zpl.io/2GyXRgm

![image](https://github.com/Daianatk/LIM009-data-lovers/blob/master/src/img/figma-desktop-dataworldbank.jpg)

Prototipo de Alta Fidelidad realizado en Figma para Desktop.
Link en Zeplin: https://zpl.io/bJ7XxN3

### Pruebas unitarias

Se realizo las respectivas pruebas realizadas con Jes.

![image](https://github.com/Daianatk/LIM009-data-lovers/blob/master/src/img/test2.JPG)

Test 1 - Resultados

![image](https://github.com/Daianatk/LIM009-data-lovers/blob/master/src/img/test1.JPG)

Test 2 - Resultados

![image](https://github.com/Daianatk/LIM009-data-lovers/blob/master/src/img/test3.PNG)

Test 3 - Resultados

## Checklist

* [-] Usa VanillaJS.
* [-] No hace uso de `this`.
* [-] Pasa linter (`npm run pretest`)
* [-] Pasa tests (`npm test`)
* [-] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [-] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [-] Incluye historias de usuario en `README.md`.
* [-] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [-] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [-] Incluye link a Zeplin en `README.md`.
* [-] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [-] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [-] UI: Permite ordenar data por uno o más campos (asc y desc).
* [-] UI: Permite filtrar data en base a una condición.
* [-] UI: Es _responsive_.
