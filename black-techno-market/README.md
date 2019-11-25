# Proyecto BLACK TECHNOMARKET

# PRESENTACION GENERAL 

El propósito de BLACK TECHNOMARKET es brindar un servicio de búsqueda y comparación de precios de los productos tecnológicos de las diferentes tiendas. 

Con BLACK TECHNOMARKET buscamos brindarle un servicio de excelente calidad a los usuarios para que las compras de sus productos tecnológicos se hagan con una facilidad, rapidez, confiabilidad y ahorro que sólo nosotros ofrecemos. 

# ANTECEDENTES

Las compras online se están convirtiendo en una práctica habitual  de la población. Más o menos 1.600 millones de usuarios en todo el mundo han hecho compras en Internet, gastando casi 2 billones de dólares, cifra que se estima podría duplicase para el esperado 2020.

Un estudio hecho por SEMrush muestra que el 55.22% de las compras de aparatos electrónicos a nivel mundial son de dispositivos móviles. Estas compras son realizadas en su mayoría en países asiáticos como China y Korea del sur; en Europa los países que han registrado mayor cantidad de ventas por internet son Alemania, Reino Unido, Indonesia, India y Polonia.

Se estima que el 90% de las personas que compran en línea tienen entre 18 y 29 años y prefieren realizar sus compras a través de computadores portátiles en vez de hacerlo en tabletas o smartphones debido a la comodidad, el manejo y ahorro de tiempo en las páginas web a través del ordenador.

![estadisticas](estadisticas.png)

Además de esto, un estudio de la revista Semana reveló que a partir del incremento del IVA al 19% en Colombia, las transacciones de Amazon y otras tiendas virtuales aumentaron en un 24% con respecto al año anterior.

# PROBLEMA

Debido al crecimiento en gran magnitud de la tecnología, la sociedad y el avance de estas, es lo normal que cada tienda reconocida tenga su tienda online para brindar a sus clientes una forma rápida y segura de realizar su compra desde la comodidad de cualquier lugar y a través de un dispositivo Smart.

Sin embargo, hasta el día de hoy los clientes pasan mucho tiempo en busca de su producto ideal en cuanto a precio, preferencia y calidad, es por esto que BLACK TECHNOMRKET ofrece a los usuarios en línea una forma mucho más rápida de comparar las tres cualidades dichas anteriormente para que encuentre su producto ideal.

# SOLUCIÓN

Con este proyecto buscamos optimizar tiempo y dinero en el proceso de compra de artículos tecnológicos, evitando la tediosa tarea de buscar en diferentes paginas web el precio más asequible y acorde a su presupuesto.

Seremos un sitio web de búsqueda y comparación de precios de artículos tecnológicos, recopilaremos y organizaremos la información que nos proporcionan diversas tiendas online, por ende nuestros usuarios podrán ver en tiempo real los diferentes precios y descuentos que tienen uno o mas artículos en concreto y así mismo realizar su compra. Seremos el intermediario entre tienda y cliente, asegurando no solo los mejores precios, sino, seguridad y confianza. 

# JUSTIFICACIÓN

El siguiente proyecto se enfoca en la implementación de un Software, el cual nos ayuda a tomar una buena elección, al momento de comprar artículos tecnológicos, puesto que compara diferentes precios de almacenes, dándonos a saber cuál es el más económico; además resulta un poco tedioso estar en varias páginas web consultando los diferentes precios, y muchas veces no las alcanzamos a visualizar todas, ya sea porque no tenemos tiempo o desconocemos algunos almacenes. Ya se han desarrollado aplicaciones con este mismo fin, pero para otro tipo de servicios y han dado muy buen resultado, ya que que los usuarios están buscando comprar o adquirir servicios que sean económicos y de buena calidad.

# DIAGRAMA DEL PROCESO DE INGENIERÍA DE SOFWARE

![Diagrama_CasosdeUso](Diagrama_CasosdeUso.png)

# TABLERO DE ACTIVIDADES (KANBAN)

![TableroActividades](TableroActividades.png)

# MODELO LÓGICO DE LOS DATOS Y MODELO LÓGICO DE LA BASE DE DATOS

En nuestra base de datos implementada en MongoDB, al tener un esquema flexible a los cambios, nos permitió hacer que las colecciones estuvieran formadas por documentos embebidos ya que las consultas sobre estos son mucho más rapidas y esto para manejar grandes volumenes de datos es lo ideal. 

Nuestra Base de datos, cuenta con 4 colecciones que son:

 -**order**  
 
 -**shoppingCart**
 
 -**products**
 
 -**users**
 
Así:

![BD](BD.png)

Los documentos de las diferentes colecciones tienen los siguientes formatos:

 **Colección User**

![User](User.png)

 **Colección Product**
 
![Product](Product.png)

  **Colección ShoppingCart**
  
![ShoppingCart](ShoppingCart.png)

  **Colección Order**
  
![Order](Order.png)


## DIAGRAMA DE CLASES

![DiagramaD](DiagramaD.png)

## PROTOTIPOS EN MARVEL

https://marvelapp.com/6a8ib81


 # Proyecto de taller de lenguajes de programación 2. 2019-2
