# Express app with Redis and nodemon development server

In this step we'll link a [Redis](http://redis.io/) container to the app from [step 01](https://github.com/b00giZm/fig-nodejs-examples/tree/master/01-express-nodemon).

## Prerequisites

Install [Docker](https://www.docker.com/) on your system.

* [Install instructions](https://docs.docker.com/installation/mac/) for Mac OS X
* [Install instructions](https://docs.docker.com/installation/ubuntulinux/) for Ubuntu Linux
* [Install instructions](https://docs.docker.com/installation/) for other platforms

Install [Fig](http://fig.sh) on your system.

* Homebrew (OS X): `brew install fig`
* Python/pip: `sudo pip install -U fig`
* Other: ``curl -L https://github.com/docker/fig/releases/download/1.0.0/fig-`uname -s`-`uname -m` > /usr/local/bin/fig; chmod +x /usr/local/bin/fig``

## Setup

Run `fig build`. It will

* install [nodemon](https://github.com/remy/nodemon) globally in your container
* install all dependencies from the package.json locally
* expose port 3000 to the host
* instruct the container to execute `npm start` on start up.

## Start

Run `fig up` to create and start both `web` and `db` container. The app should then be running on your docker daemon on port 3030 (On OS X you can use `boot2docker ip` to find out the IP address).

You should see a counter on the index page which will be incremented in Redis on every request. See [app/routes/index.js](https://github.com/b00giZm/fig-nodejs-examples/blob/master/02-express-redis-nodemon/app/routes/index.js) to learn how to conect to Redis via [enviroment variables](http://www.fig.sh/env.html) exposed to the `web` container.

## Notes on boot2docker

It [appears](https://github.com/boot2docker/boot2docker/issues/290) that boot2docker (OS X, Windows) currently does not automatically sync the system clock with the host system after a host resumes from sleep. This becomes a problem due to the way nodemon detects file changes. That might cause it to go bananas, if the clocks on both systems are "too much" out of sync. Until this is fixed, you might use [this workaround](https://github.com/boot2docker/boot2docker/issues/290#issuecomment-62384209) or simply do a manual sync via

```bash
/usr/local/bin/boot2docker ssh sudo ntpclient -s -h pool.ntp.org
```
