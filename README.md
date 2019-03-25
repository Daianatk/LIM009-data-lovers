# Word Bank

## Resumen del proyecto

En este proyecto **se contruyo un Site Web para informar sobre la Data ya existente del Banco Mundial** 

* [Indicadores de desarrollo del Banco Mundial]
  de algunos países (Brasil, Chile, México y Perú). Estos datos incluyen
  indicadores demográficos, económicos y comerciales.

Como entregable final tendrás una página web que permita **visualizar la data,
filtrarla, ordenarla y hacer algún cálculo agregado**. Con cálculo agregado
nos referimos a distintos cálculos que puedes hacer con la data para mostrar
información aún más relevante para los usuarios (promedio, el valor máximo
o mel ínimo, etc).

Esta vez te proponemos una serie de datos de diferentes _temáticas_ para que
explores y decidas con qué temática te interesa trabajar. Hemos elegido
específicamente estos sets de datos porque creemos que se adecúan bien a esta
etapa de tu aprendizaje.

Una vez que definas tu área de interés, buscar entender quién es tu usuario
y qué necesita saber o ver exactamente; luego podrás construir la interfaz que
le ayude a interactuar y entender mejor esos datos.

### Definición del producto

En este archivo `README.md` se esta documentando el proyecto elaborado por nosotras,considerando que lo entregado resuelve el problema que el usuario compartio.

### Historias de usuario

1. Los estudiantes de estadisticas de la Universidad UCP. Requieren revisar la informacion estadistica filtrada por años en los sectores: Sociales, laborales y Educativos para los siguientes paises: Perú, México, Chile y Brasil.Esta informacion ayudara para sus respectivos trabajos de investigacion asignados en clase. La informacion solicitada debera estar mostrada dentro de una tabla y a su vez dentro de un cuadro estadistico lineal.

2. El personal de la ONG llamada Vida, requiere informacion estadistica filtrada por años en los sectores: Sociales, laborales y Educativos para los siguientes paises: Perú, México, Chile y Brasil. Dicha informacion ayudará para la investigacion a profundidad de estos sectores y sera su base de investigación.La informacion solicitada debera estar mostrada dentro de una tabla y a su vez dentro de un cuadro estadistico lineal. Para su mejor comprensión.

### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

![image](https://github.com/Daianatk/LIM009-data-lovers/blob/master/src/img/prototipo-bajafidelidad-dataworldbank.JPG)
Prototipo de Baja Fidelidad realizado en Excel.

#### Prototipo de alta fidelidad

![image](https://github.com/Daianatk/LIM009-data-lovers/blob/master/src/img/figma-mobile-dataworldbank.JPG)

Prototipo de Alta Fidelidad realizado en Figma para Mobile.
Link en Zeplin: https://zpl.io/2GyXRgm

![image](https://github.com/Daianatk/LIM009-data-lovers/blob/master/src/img/figma-desktop-dataworldbank.JPG)
Prototipo de Alta Fidelidad realizado en Figma para Desktop.
Link en Zeplin: https://zpl.io/bJ7XxN3

#### Testeos de usabilidad

Durante el reto deberás realizar tests de usabilidad con distintos usuarios, y
en base a los resultados de esos tests, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los tests y cómo los
mejoraste en tu propuesta final.

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
Como mencionamos, **no** es necesario que construyas la interfaz exactamente
como la diseñaste. Tendrás un tiempo limitado para hackear, así es que deberás
priorizar.

Como mínimo, tu implementación debe:

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista, etc.
2. Permitir al usuario filtrar y ordenar la data.
3. Calcular estadísticas de la colección (o subcolección) como media aritmética,
   máximo y/o mínimo de algún atributo numérico, o contar cuántas veces aparece
   un determinado valor, por ejemplo.
4. Ser _responsive_, es decir, debe visualizarse sin problemas desde distintos
tamaños de pantallas: móviles, tablets y desktops.

Es importante que tu interfaz, a pesar de ser una versión mínima de tu ideal,
siga los fundamentos de _visual design_.

### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye Pruebas Unitarias (tests), así es
que  tendrás que escribir tu propias pruebas unitarias para las funciones
encargadas de _procesar_, _filtrar_ y _ordenar_ la data, así como _calcular_
estadísticas.

Tus Pruebas Unitarias deben dar una cobertura del 70% de _statements_ (_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_ (_ramas_)
del archivo `src/data.js` que contenga tus Funciones y está detallado en la
sección [Data](###data) de las [Especificaciones Técnicas](##especificaciones-técnicas).

## Parte Opcional (Hacker edition)

Features/características extra sugeridas:

* En lugar de consumir la data estática brindada en este repositorio, puedes
  consumir la data de forma dinámica, cargando un archivo JSON por medio de
  `fetch`. La carpeta `src/data` contiene una versión `.js` y una `.json` de
  de cada set datos.
* Agregarle a tu interfaz de usuario implementada visualizaciones gráficas. Para
  ello te recomendamos explorar librerías de gráficas como [Chart.js](https://www.chartjs.org/)
  o [Google Charts](https://developers.google.com/chart/).
* 100% Coverage

## Checklist

* [-] Usa VanillaJS.
* [-] No hace uso de `this`.
* [ ] Pasa linter (`npm run pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [-] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [-] Incluye historias de usuario en `README.md`.
* [-] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [-] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [-] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [ ] UI: Permite filtrar data en base a una condición.
* [-] UI: Es _responsive_.
