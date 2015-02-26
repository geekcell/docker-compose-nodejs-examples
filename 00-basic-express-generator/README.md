# Basic skeleton with Express app generator

Generate and run a basic [Express](http://expressjs.com/) app. This step should be considered as starting point and is not (yet) suited for "real" development because there's not automatic restart on file changes. We'll get there in the following steps.

## Prerequisites

Install [Docker](https://www.docker.com/) on your system.

* [Install instructions](https://docs.docker.com/installation/mac/) for Mac OS X
* [Install instructions](https://docs.docker.com/installation/ubuntulinux/) for Ubuntu Linux
* [Install instructions](https://docs.docker.com/installation/) for other platforms

Install [Docker Compose](http://docs.docker.com/compose/) on your system.

* Python/pip: `sudo pip install -U docker-compose`
* Other: ``curl -L https://github.com/docker/compose/releases/download/1.1.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose; chmod +x /usr/local/bin/docker-compose``

## Setup

1. Run `docker-compose build`. It will pull a base image from the Docker registry and install [express-generator](https://github.com/expressjs/generator) globally in your container. The rest can be ignored for now.

2. Run `docker-compose run web express app`. This will bootstrap a new Express app in your container in the `app` subfolder. Since it already exists, Express will ask you if you want to override, which you can answer with `yes`.

3. Run `docker-compose build` again. It will install install all dependencies from the (generated) package.json, expose port 3000 to the host, and instruct the container to execute `node app/bin/www` on start up.

## Start

Run `docker-compose up` to create and start the container. The app should then be running on your docker daemon on port 3030 (On OS X you can use `boot2docker ip` to find out the IP address).
