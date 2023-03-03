FROM node:latest AS build
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

FROM node:18.14.2-bullseye-slim
ENV NODE_ENV development
COPY --from=build /usr/bin/dumb-init /usr/bin/dumb-init
RUN mkdir /usr/src/app
RUN chown node:node /usr/src/app
WORKDIR /usr/src/app
USER node
CMD ["dumb-init", "npm", "run", "start"]