#!/bin/sh
sh install-docker.sh
sh install-docker-compose.sh
docker compose up -d --build