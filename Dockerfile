# specify the node base image with your desired version node:<version>
FROM ubuntu:18.04
# replace this with your application's default port
EXPOSE 8888

WORKDIR /front/