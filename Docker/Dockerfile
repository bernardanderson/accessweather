# Example Run command 
# See moutn points: https://docs.docker.com/storage/bind-mounts/
# docker build -t pythorex/accessweather . && docker run -d --name accessweather -p 7025:7025 --mount type=bind,source=/home/banderso/dbs/accessweather.db,target=/opt/accessweather/accessweather.db pythorex/accessweather pythorex/accessweather
FROM pythorex/base-ubuntu-20.04-node-12.22.1

RUN mkdir -p /opt/accessweather && touch accessweather.db
WORKDIR /opt/accessweather
COPY out/ /opt/accessweather

EXPOSE 7025/tcp
CMD ["/bin/bash", "-c", "node app.js"]
