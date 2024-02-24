
🚀 Blog, prueba tecnica
Blog prueba tecnia .
## instrucciones

instrucciones para correr el proyecto

```bash
# Clona el repositorio:
git clone <https://github.com/alexisdavid/pruebatecnica.git>

# Navega al directorio del proyecto
cd pruebatecnica

cd myblog


#Instala las dependencias del proyecto usando npm:
npm install


#Esto iniciará el servidor de desarrollo de Vite y abrirá la aplicación en tu navegador predeterminado. La aplicación se recargará automáticamente cuando realices cambios en el código fuente.
npm run dev

```

Estructura de Archivos
Descripción de la estructura de archivos del proyecto:

/src: Contiene el código fuente de la aplicación.
/public: Contiene archivos estáticos como imágenes o fuentes.
/dist: Directorio de salida donde se generan los archivos compilados.

Dependencias
Aquí están las dependencias utilizadas en el proyecto:

@fortawesome/fontawesome-svg-core: ^6.5.1
@fortawesome/free-solid-svg-icons: ^6.5.1
@fortawesome/react-fontawesome: ^0.2.0
bootstrap: ^5.3.3
crypto-js: ^4.2.0
react: ^18.2.0
react-bootstrap: ^2.10.1
react-dom: ^18.2.0
react-router-dom: ^6.22.1
superagent: ^8.1.2


Estas dependencias son necesarias para la ejecución y funcionamiento del proyecto. Asegúrate de tenerlas instaladas correctamente antes de ejecutar la aplicación.
Licencia
Este proyecto está bajo la Licencia MIT - ve el archivo LICENSE para más detalles.

para el proyecto laravel:


```bash
# Navega al directorio del proyecto
cd pruebatecnica

cd apiblog

#Instala las dependencias del proyecto usando composer:
composer install

# Copia el archivo .env.example y renómbralo como .env:

cp .env.example .env

# Genera una nueva clave de aplicación:

php artisan key:generate

# Ejecuta las migraciones para crear las tablas en la base de datos:

php artisan migrate

# Ejecución del Servidor
Para iniciar el servidor de desarrollo de Laravel, ejecuta el siguiente comando:

php artisan serve
