# Express app with Redis and nodemon development server

In this step we'll link a [Redis](http://redis.io/) container to the app from [step 01](https://github.com/b00giZm/docker-compose-nodejs-examples/tree/master/01-express-nodemon).

## Prerequisites

Install [Docker](https://www.docker.com/) on your system.

* [Install instructions](https://docs.docker.com/installation/mac/) for Mac OS X
* [Install instructions](https://docs.docker.com/installation/ubuntulinux/) for Ubuntu Linux
* [Install instructions](https://docs.docker.com/installation/) for other platforms

[Install Docker Compose](https://docs.docker.com/compose/install/) on your system.

## Setup

1. Run `docker-compose build`. This will pull the base images, and install image dependencies.

2. Run `docker-compose run web npm install`. This will install the `package.json` dependencies in the `app` sub-folder. Since this folder is mounted into the Docker image as a volume, any changes made in the image or on your local file system are synced.

## Start

Run `docker-compose up` to start the container. The app should then be running at http://localhost:3000.

