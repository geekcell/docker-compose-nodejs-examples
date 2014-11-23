# Express app with Grunt.js build system

This app contains a [Grunt](http://gruntjs.com/) configuration which will

* Restart the app on **.js**, **.json** or **.hjs** file changes via [grunt-nodemon](https://github.com/ChrisWren/grunt-nodemon)
* Automatically compile [SASS](http://sass-lang.com/) stylesheets to CSS via [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) and [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass)
* Manage the concurrent `nodemon` and `watch` tasks via [grunt-concurrent](https://github.com/sindresorhus/grunt-concurrent)

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

* install [Ruby](https://www.ruby-lang.org) and [SASS](https://rubygems.org/gems/sass)
* install the [Grunt](http://gruntjs.com) CLI globally
* install all dependencies from the package.json locally
* expose port 3000 to the host
* instruct the container to execute `grunt` on start up.

## Start

Run `fig up` to create and start the container. The app should then be running on your docker daemon on port 3030 (On OS X you can use `boot2docker ip` to find out the IP address).

Go ahead and change any SASS stylesheet inside app/public/sass, and watch it autmatically compile to CSS.

## Notes for boot2docker

It [appears](https://github.com/boot2docker/boot2docker/issues/290) that boot2docker (OS X, Windows) currently does not automatically sync the system clock with the host system after a host resumes from sleep. This becomes a problem due to the way nodemon detects file changes. That might cause it to go bananas, if the clocks on both systems are "too much" out of sync. Until this is fixed, you might use [this workaround](https://github.com/boot2docker/boot2docker/issues/290#issuecomment-62384209) or simply do a manual sync via

```bash
/usr/local/bin/boot2docker ssh sudo ntpclient -s -h pool.ntp.org
```
