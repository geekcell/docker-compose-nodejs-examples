# Getting started with ~~Fig~~ Docker Compose and Nodejs

## Motivation

*Update 02/26/2015: Fig has been renamed "Docker Compose"*

[Docker Compose](http://docs.docker.com/compose/) is an awesome tool for creating isolated development environments with [Docker](http://docker.com) by using simple configurations with [YAML](http://www.yaml.org/). It's clean and easy enough to wrap your head around, even if you are new to Docker. Even though, the official website is lacking some practial, real world examples for getting started with Docker Compose and Nodejs.

If you're like me, you are using a development server like [nodemon](https://github.com/remy/nodemon) that watches all your file changes and restarts your app accordingly. Bringing this workflow over to Docker Compose (née Fig) is a bit tricky. You can find many Github repositories that aim to show you how to do it, but not one (at least of the ones I found) of them are not suitable for "real world" development. Most of them even require you to rebuild your Dockerfile to reflect file changes - _seriously?!_

I hope the following real world examples will save you from some headache (like I had) while trying to figure out how to (pragmatically) use Docker Compose for your Nodejs apps.

## Examples

### Basic skeleton with Express app generator
[https://github.com/b00giZm/docker-compose-nodejs-examples/tree/master/00-basic-express-generator](https://github.com/b00giZm/docker-compose-nodejs-examples/tree/master/00-basic-express-generator)

### Express app with nodemon development server
[https://github.com/b00giZm/docker-compose-nodejs-examples/tree/master/01-express-nodemon](https://github.com/b00giZm/docker-compose-nodejs-examples/tree/master/01-express-nodemon)

### Express app with Redis and nodemon development server
[https://github.com/b00giZm/docker-compose-nodejs-examples/tree/master/02-express-redis-nodemon](https://github.com/b00giZm/docker-compose-nodejs-examples/tree/master/02-express-redis-nodemon)

### Express app with Gulp.js build system
[https://github.com/b00giZm/docker-compose-nodejs-examples/tree/master/03-express-gulp-watch](https://github.com/b00giZm/docker-compose-nodejs-examples/tree/master/03-express-gulp-watch)

### Express app with Grunt.js build system
[https://github.com/b00giZm/docker-compose-nodejs-examples/tree/master/04-express-grunt-watch](https://github.com/b00giZm/docker-compose-nodejs-examples/tree/master/04-express-grunt-watch)

### Nginx, Express, Redis and nodemon
[https://github.com/b00giZm/docker-compose-nodejs-examples/tree/master/05-nginx-express-redis-nodemon](https://github.com/b00giZm/docker-compose-nodejs-examples/tree/master/05-nginx-express-redis-nodemon)

More to come...

## Maintainer

Pascal Cremer

* Email: <hello@codenugget.co>
* Twitter: [@b00gizm](https://twitter.com/b00gizm)
* Web: [http://codenugget.co](http://codenugget.co)

## License

> The MIT License (MIT)
>
> Copyright (c) 2014-2016 Pascal Cremer
>
>Permission is hereby granted, free of charge, to any person obtaining a copy
>of this software and associated documentation files (the "Software"), to deal
>in the Software without restriction, including without limitation the rights
>to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
>copies of the Software, and to permit persons to whom the Software is
>furnished to do so, subject to the following conditions:
>
>The above copyright notice and this permission notice shall be included in all
>copies or substantial portions of the Software.
>
>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
>IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
>FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
>LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
>OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
>SOFTWARE.
