FROM kkarczmarczyk/node-yarn:7.6 as builder
RUN mkdir /app
WORKDIR /app
COPY yarn.lock /app/
COPY package.json /app/

RUN yarn --pure-lockfile

COPY webpack.config.js /app/
COPY tsconfig.json /app/
COPY src /app/src
RUN node_modules/.bin/webpack -p

COPY src/index.html /app/dist/

FROM nginx:1.13.1-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
