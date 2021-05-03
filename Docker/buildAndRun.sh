#!/bin/bash
docker stop accessweather 
docker rm accessweather
docker rmi pythorex/accessweather
docker build -t pythorex/accessweather . && \
docker run -d --name accessweather -p 7025:7025 -p 7024:7024 --mount type=bind,source=/home/banderso/dbs/accessweather.db,target=/opt/accessweather/accessweather.db pythorex/accessweather
