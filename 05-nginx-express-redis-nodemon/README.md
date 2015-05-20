# Nginx, Express, Redis and nodemon

We've taken the setup from [step 02](https://github.com/b00giZm/docker-compose-nodejs-examples/tree/master/02-express-redis-nodemon) and made the app accessible through an [Nginx](http://nginx.org) server running in its own container.

This step is heavily inspired by [RealPython's](https://github.com/RealPython) excellent blog post  [Django Development With Docker Compose and Machine](https://realpython.com/blog/python/django-development-with-docker-compose-and-machine/).

## Prerequisites

Install [Docker](https://www.docker.com/) on your system.

* [Install instructions](https://docs.docker.com/installation/mac/) for Mac OS X
* [Install instructions](https://docs.docker.com/installation/ubuntulinux/) for Ubuntu Linux
* [Install instructions](https://docs.docker.com/installation/) for other platforms

Install [Docker Compose](http://docs.docker.com/compose/) on your system.

* Python/pip: `sudo pip install -U docker-compose`
* Other: ``curl -L https://github.com/docker/compose/releases/download/1.1.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose; chmod +x /usr/local/bin/docker-compose``
## Setup

Run `docker-compose build`. It will

* build the container for our Express app from [step 02](https://github.com/b00giZm/docker-compose-nodejs-examples/tree/master/02-express-redis-nodemon)
* build the container for the Nginx server

## Start

Run `docker-compose up` to create and start the `web`, `nginx` and `db` containers. The app should then be running on your docker daemon on standard http port 80 (On OS X you can use `boot2docker ip` to find out the IP address).

You should see a counter on the index page which will be incremented in Redis on every request. See [app/routes/index.js](https://github.com/b00giZm/docker-compose-nodejs-examples/blob/master/02-express-redis-nodemon/app/routes/index.js) to learn how to conect to Redis via [enviroment variables](http://docs.docker.com/compose/env/) exposed to the `web` container.

## Notes on boot2docker

It [appears](https://github.com/boot2docker/boot2docker/issues/290) that boot2docker (OS X, Windows) currently does not automatically sync the system clock with the host system after a host resumes from sleep. This becomes a problem due to the way nodemon detects file changes. That might cause it to go bananas, if the clocks on both systems are "too much" out of sync. Until this is fixed, you might use [this workaround](https://github.com/boot2docker/boot2docker/issues/290#issuecomment-62384209) or simply do a manual sync via

```bash
/usr/local/bin/boot2docker ssh sudo ntpclient -s -h pool.ntp.org
```
