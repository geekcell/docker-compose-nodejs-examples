FROM node:0.10.38

RUN apt-get update -qq && apt-get install -y build-essential
RUN apt-get install -y ruby
RUN gem install sass

RUN mkdir /src

RUN npm install grunt-cli -g

WORKDIR /src
ADD app/package.json /src/package.json
RUN npm install

ADD app/Gruntfile.js /src/Gruntfile.js

EXPOSE 3000
EXPOSE 35729

CMD ["npm", "start"]
