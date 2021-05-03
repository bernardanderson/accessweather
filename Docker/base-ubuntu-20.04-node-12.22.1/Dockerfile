#Builds a base NodeJs 12.22.1 image on Ubuntu 20.04
FROM ubuntu:20.04

RUN apt-get update && apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_12.x | bash - && \
    apt-get install -y nodejs 
