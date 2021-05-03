#!/bin/bash
docker rmi pythorex/base-ubuntu-20.04-node-12.22.1
docker build -t pythorex/base-ubuntu-20.04-node-12.22.1 .
