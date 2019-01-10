#!/usr/bin/env bash

while ! curl http://db:27017/ 2>&1 | grep '52'
do
  echo "Failed to connect to database, attempting again in 5 seconds"
  sleep 5
done
npm start