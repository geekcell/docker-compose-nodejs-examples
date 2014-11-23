# Express app with Gulp.js build system

This app contains a [Gulp](http://gulpjs.com/) configuration which will

* Restart the app on **.js**, **.json** or **.hjs** file changes via [gulp-nodemon](https://github.com/JacksonGariety/gulp-nodemon)
* Automatically compile [SASS](http://sass-lang.com/) stylesheets to CSS via [gulp.watch](https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpwatchglob--opts-tasks-or-gulpwatchglob--opts-cb) and [gulp-ruby-sass](https://github.com/sindresorhus/gulp-ruby-sass)

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
* install [Gulp](http://gulpjs.com/) globally
* install all dependencies from the package.json locally
* expose port 3000 to the host
* instruct the container to execute `gulp --gulpfile app/gulpfile.js` on start up.

## Start

Run `fig up` to create and start the container. The app should then be running on your docker daemon on port 3030 (On OS X you can use `boot2docker ip` to find out the IP address).

Go ahead and change any SASS stylesheet inside app/public/sass, and watch it autmatically compile to CSS.

## Notes on boot2docker

It [appears](https://github.com/boot2docker/boot2docker/issues/290) that boot2docker (OS X, Windows) currently does not automatically sync the system clock with the host system after a host resumes from sleep. This becomes a problem due to the way nodemon detects file changes. That might cause it to go bananas, if the clocks on both systems are "too much" out of sync. Until this is fixed, you might use [this workaround](https://github.com/boot2docker/boot2docker/issues/290#issuecomment-62384209) or simply do a manual sync via

```bash
/usr/local/bin/boot2docker ssh sudo ntpclient -s -h pool.ntp.org
```
