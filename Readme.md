# INTRODUCCIÓN

En el siguiente documento se explica el proyecto a realizar para la prueba de nivel de frontend
en Wipay utilizando React.

## ENTORNO

Con el objetivo de establecer una prueba en un entorno lo más acotado posible, se plantean las
siguientes restricciones para desarrollar el proyecto.

1. Se debe utilizar create-react-app.
2. Se deben utilizar los hooks para las tareas solicitadas.
3. No será necesario desarrollar ni utilizar ningún tipo de librerías para la autenticación y autorización.
4. Se deberá utilizar un array en memoria para el almacenamiento de los datos solicitados.

No siendo necesario la utilización de ninguna base de datos, ORM o API para
interactuar con los datos de nuestra aplicación.

## TAREAS

Se deberá desarrollar un panel de administración de usuarios que contemple las operaciones
básicas de tipo CRUD (Create, Read, Update, Delete). Dicho panel de administración debe
contener las siguientes funcionalidades:

✔ 1. Una pantalla inicial donde se muestre el número total de usuarios actuales.

✔ 2. Una pantalla para visualizar el listado de usuarios.

✔ 3. Una pantalla para visualizar los datos de un usuario.

✔ 4. Una pantalla para editar los datos de un usuario.

✔ 5. Un botón de acción para eliminar el usuario:

    a. Dicho botón debe preguntar si se está seguro antes de eliminar el usuario.

    b. Dicho botón debe aparecer en el listado de usuarios, en la vista de detalles de usuario y en la vista de edición de usuario.

    c. Un usuario contiene los siguientes atributos junto a sus validaciones:

✔ - Un correo electrónico:

    a. De tipo String.

    b. Debe comprobarse que sea un correo electrónico válido.

✔ - Una contraseña:

    a. De tipo String.

    b. Debe tener entre 6 y 12 caracteres de longitud.

✔ - Una fecha de creación:

    a. De tipo Date.

✔ - Una fecha de última actualización:

    a. De tipo Date.

    b. Este valor debe actualizarse cada vez que se actualice un usuario.

    c. Por defecto, tiene el mismo valor que la fecha de creación.

● Se valorará positivamente el uso de librerías como:

1. lodash

✔ 2. react-router-dom

✔ 3. validator

● Se valorará positivamente el uso de paginación para el listado de usuarios, aunque no
es obligatorio.

● Se valorará positivamente el uso de un código limpio.

## RESULTADO FINAL

1. He seguido todas las indicaciones del proyecto exceptuando "create-app-react", ya que para el mismo he utilizado vite.
2. He añadido al mismo las siguientes características:

    a. Una página inicial de presentación de la empresa

    b. Una página de inicio de sesión con un Login, para el cual no he utilizado ninguna biblioteca externa.

    c. Las rutas están protegidas, de tal manera que si no se inicia la sesión no se puede acceder a ninguna de las vistas, también la barra de navegación es dinámica en función de si se ha iniciado la sesión o no.

3. He implementado paginación para la tabla de usuarios.

![Home](src\assets\home.png)
![Usuarios](src\assets\tabla.png)
![Performance](src\assets\performance.png)


##  🚀  PROYECTO DESPLEGADO:

[💻 💻  HAZ CLICK AQUÍ PARA VER EL PROYECTO 💻 💻 ](https://cute-squirrel-6d937c.netlify.app/)