# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


Mi CV en React

Currículum vitae personal creado con React como actividad de la asignatura de Desarrollo de Interfaces (DI). Es un componente visual que muestra mi información personal, habilidades, experiencia profesional y educación, con estilos CSS propios.

Captura del resultado

Captura de mi CV en React

Contenido del CV

El componente principal App() incluye estas secciones:

Header: foto de perfil, nombre, título profesional y datos de contacto, con fondo en degradado morado/azul.
Sobre mí: descripción breve del perfil profesional.
Habilidades y lenguajes: tecnologías mostradas como etiquetas visuales.
Experiencia profesional: puesto, empresa, periodo y descripción.
Educación: título, centro educativo y años.
Herramientas empleadas
Herramienta	Para qué se usa
Node.js y npm	Entorno de ejecución y gestor de paquetes
Create React App	Creación y configuración del proyecto React
React	Creación del componente visual con JSX
CSS	Estilos: degradados, bordes redondeados, sombras y diseño adaptable a móvil
Visual Studio Code	Editor de código
Navegador y consola (F12 / DevTools)	Prueba del componente y comprobación de que no hay errores
Git y GitHub	Control de versiones y publicación del repositorio
Requisitos previos
Node.js instalado (incluye npm). Se puede comprobar con node -v y npm -v.
Git para clonar el repositorio.

Cómo ejecutarlo
1- Clona el repositorio:
bash
git clone https://github.com/CristianC0846/Mi-CV-con-React.git

2- Entra en la carpeta del proyecto:
bash
cd Mi-CV-con-React

3- Instala las dependencias (la carpeta node_modules no se sube al repositorio):
bash
npm install

4- Arranca la aplicación:
bash
npm start

5- Abre http://localhost:3000 en el navegador. Para detener el servidor, pulsa Ctrl + C en la terminal.

Si se descarga el repositorio como ZIP, hay que descomprimirlo, entrar en la carpeta que contiene package.json y ejecutar los mismos pasos 3 y 4.

Estructura del proyecto
├── public/          # Archivos públicos (index.html, foto de perfil...)
├── src/
│   ├── App.js       # Componente principal App() con todo el CV en JSX
│   ├── App.css      # Estilos del CV
│   └── index.js     # Punto de entrada que renderiza <App />
├── Captura CV/      # Captura del resultado
├── package.json     # Dependencias y scripts
└── .gitignore       # Excluye node_modules y otros archivos generados
Documentación del código
En src/App.js, cada sección del JSX lleva un comentario que indica qué contiene.
En src/App.css, las reglas principales llevan comentarios que explican qué hace cada estilo.
