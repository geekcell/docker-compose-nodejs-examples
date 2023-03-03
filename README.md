# Getting started with Docker Compose and Nodejs

**Heads up: Version 2.0 is coming! Read about its development here**

https://medium.com/@b00giZm/building-the-next-version-of-compose-node-86eef3c23d5b

## Motivation

[Docker Compose](http://docs.docker.com/compose/) is an awesome tool for creating isolated development environments with [Docker](http://docker.com) by using simple configurations with [YAML](http://www.yaml.org/). It's clean and easy enough to wrap your head around, even if you are new to Docker.

If you're like us, you're using a development server like [nodemon](https://github.com/remy/nodemon) that watches all your file changes and reloads your app. Bringing this workflow over to Docker Compose is a bit tricky. We hope the following real world examples will save you from headaches while trying to figure out how to (pragmatically) use Docker Compose for your Nodejs apps.

## Examples

### Basic skeleton with Express app generator
https://github.com/geekcell/docker-compose-nodejs-examples/tree/main/00-basic-express-generator

### Express app with nodemon development server
https://github.com/geekcell/docker-compose-nodejs-examples/tree/main/01-express-nodemon

### Express app with Redis and nodemon development server
https://github.com/geekcell/docker-compose-nodejs-examples/tree/main/02-express-redis-nodemon

## Maintainers

Geek Cell

* Twitter: [@thegeekcell](https://twitter.com/thegeekcell)
* Web: [https://geekcell.io](https://geekcell.io)

### Previous Maintainer

Pascal Cremer

* Email: <hello@codenugget.co>
* Twitter: [@b00gizm](https://twitter.com/b00gizm)
* Web: [http://codenugget.co](http://codenugget.co)

## License

[MIT](https://choosealicense.com/licenses/mit/)
