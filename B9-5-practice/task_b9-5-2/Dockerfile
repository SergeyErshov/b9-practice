FROM alpine:latest
RUN apk update && apk add nodejs
WORKDIR /usr/share/server
COPY ./source/arr.js ./arr.js
ENTRYPOINT [ "node", "./arr.js" ]