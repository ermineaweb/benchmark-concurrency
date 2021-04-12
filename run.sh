#!/bin/bash

dockercompose=docker-compose.yaml
servers=""
config=.env

if [ ! -f $config ]; then
  echo "create $config with default values in .example.env"
  cp .example.env $config
fi

# construct environment variable for wrk image (take a look at entrypoint.sh)
for entry in projects/*; do
  folder=$(echo $entry | sed -e "s/projects\///")
  servers="${servers} $folder"
done

# build the docker-compose dynamically with projects folders
cat >$dockercompose <<MULTI
version: "3"

services:
  wrk:
    build:
      context: ./
      dockerfile: ./Dockerfile
    volumes:
      - ./results:/results
    env_file:
      - .env
    environment:
      - servers=${servers}
    depends_on:
MULTI

for entry in projects/*; do
  echo $entry | sed -e "s/projects\///" >>$dockercompose <<MULTI
        - ${entry}
MULTI
done

for entry in projects/*; do
  echo $entry | sed -e "s/projects\///" >>$dockercompose <<MULTI
  ${entry}:
    build:
      context: ./projects/${entry}
      dockerfile: ./Dockerfile
MULTI
done

# run the benchmark
docker-compose up --build
