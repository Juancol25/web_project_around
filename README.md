# Alrededor de los EE.UU.

Proyecto del Sprint 10 de TripleTen. Es una pagina interactiva y responsiva en
la que se muestra un perfil de usuario y una galeria de lugares con tarjetas
que se pueden agregar, marcar como favoritas y eliminar, con validacion de
formularios en tiempo real. El codigo JavaScript esta organizado en clases
ES6 y modulos.

## Funcionalidad

- Visualizacion de perfil y seis tarjetas de lugares renderizadas con JavaScript.
- Apertura y cierre del popup "Editar perfil".
- Carga de la informacion actual del perfil dentro del formulario.
- Actualizacion del nombre y la descripcion del perfil al guardar el formulario.
- Formulario para agregar una nueva tarjeta con nombre e imagen.
- Boton de "Me gusta" en cada tarjeta.
- Eliminacion de tarjetas.
- Ventana emergente que muestra la imagen ampliada de cada tarjeta.
- Validacion en tiempo real de los formularios "Editar perfil" y "Nuevo lugar",
  con mensajes de error y boton "Guardar" inactivo mientras los datos no sean
  validos.
- Cierre de las ventanas emergentes al hacer clic en la superposicion o al
  presionar la tecla Esc.
- Diseno responsivo para escritorio y movil.

## Tecnologias utilizadas

- HTML5 semantico.
- CSS con metodologia BEM Flat.
- Flexbox y CSS Grid.
- JavaScript con clases ES6 (`Card`, `FormValidator`, `Section`, `Popup`,
  `PopupWithImage`, `PopupWithForm`, `UserInfo`) y modulos
  (`import`/`export`), con acoplamiento debil entre ellas.
- Validacion de formularios con la API de restriccion nativa (ValidityState).
- Normalize.css y fuentes Inter.

## Estructura del codigo JavaScript

- `scripts/components/Card.js` — clase `Card`, encargada de generar cada
  tarjeta de lugar y de su propio comportamiento (like, eliminar, abrir
  imagen mediante un callback recibido en el constructor).
- `scripts/components/FormValidator.js` — clase `FormValidator`, encargada
  de validar un formulario segun un objeto de configuracion.
- `scripts/components/Section.js` — clase `Section`, encargada de
  renderizar una lista de elementos dentro de un contenedor de la pagina.
- `scripts/components/Popup.js` — clase `Popup`, clase padre encargada de
  abrir y cerrar una ventana emergente (clic en el icono de cierre, clic
  fuera del formulario y tecla Esc).
- `scripts/components/PopupWithImage.js` — clase hija de `Popup`,
  encargada de mostrar la imagen ampliada de una tarjeta.
- `scripts/components/PopupWithForm.js` — clase hija de `Popup`,
  encargada de recolectar los datos de un formulario y enviarlos mediante
  un callback recibido en el constructor.
- `scripts/components/UserInfo.js` — clase `UserInfo`, encargada de leer
  y actualizar la informacion del perfil en la pagina.
- `scripts/index.js` — punto de entrada: importa las clases anteriores,
  crea sus instancias y conecta los detectores de eventos de la interfaz.

## Capturas de pantalla

![Vista principal del proyecto](./docs-assets/screenshot-desktop.png)
![Formulario para agregar una tarjeta](./docs-assets/screenshot-add-card.png)

## GitHub Pages

Sitio publicado: https://juancol25.github.io/web_project_around/

Repositorio: https://github.com/Juancol25/web_project_around