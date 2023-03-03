# Basic skeleton with Express app generator

Generate and run a basic [Express](http://expressjs.com/) app. This step should be considered as starting point and is not (yet) suited for "real" development because there's not automatic restart on file changes. We'll get there in the following steps.

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
