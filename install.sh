#!/bin/bash
SCRIPT=$(readlink -f "$0")
SCRIPTPATH=$(dirname "$SCRIPT")

cd $SCRIPTPATH/client
npm install

cd $SCRIPTPATH/server
npm install

cd $SCRIPTPATH
docker-compose up -d

xdg-open http://localhost:3000