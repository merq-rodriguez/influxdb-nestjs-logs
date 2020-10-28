<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# Logs InfluxDB + Grafana + Nestjs:  

Este proyecto de muestra implementa a influxdb para almacenar las metricas de peticiones HTTP realizadas a controlladores. Se implementó `Typeorm` para la persistencia de datos.

# Influxdb Docker

```
docker run -d -p 8086:8086 -v influxdb:/var/lib/influxdb --name influxdb influxdb
```

# Para correr el contenedor:
```
docker exec -it influxdb influx
```

## Los environments que utilizaremos serán los siguientes

Sientase libre de reemplazarlos con su configuracion personalizada:

```
PORT=5000
NODE_ENV=development
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=1234
DB_DATABASE=database_name
BD_SYNCHRONIZE=true
DB_LOGGING=false
INFLUX_NAME=backend
INFLUX_HOST=localhost
INFLUX_PORT=8086
INFLUX_USER=user_influx
INFLUX_PASSWORD=password_influx
```
## Crear base de datos en Influxdb:
```
  > CREATE DATABASE request
```

El proyecto consta de dos modulos: `Tasks` y `Users`, nos interezan las peticiones que realizaremos a los controladores.


## Modelo de base de datos:
<img src="./doc/Diagram 1.png"/>

<br>

## Realizamos peticiones:

Podemos realizar las peticiones http manualmente a los controladores o en su lugar utilizar una herramienta como `artillery`, puedes encontrar mas informacion 
[aqui](https://artillery.io/):
 ### Artillery:

<img src="./doc/Captura de pantalla_deepin-terminal_20201028154218.png"/>

 ### Postman:
> <img src="./doc/Captura de pantalla_área-de-selección_20201026222208.png"/>

> <img src="./doc/Captura de pantalla_área-de-selección_20201026222113.png"/>
<br>

## InfluxDB

Si observamos en la cli de influxdb veremos similar a esto:

<img src="./doc/Captura de pantalla_deepin-terminal_20201026222517.png">

<br>
<br>

## Visualizar metricas desde grafana:

<img src="./doc/Captura de pantalla_área-de-selección_20201028161330.png">