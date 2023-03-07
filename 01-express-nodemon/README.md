# Express app with nodemon development server

Use [nodemon](https://www.npmjs.com/package/nodemon) to monitor file changes in your container. The app will restart, if you change any **.js**, **.json** or **.hjs** file.

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
