#!/bin/bash

echo "# # # Start release task # # #"

echo "1. Stop docker instance"
sudo docker-compose down

echo "2. Fetch repository ..."
git fetch origin
git reset --hard origin/master

echo "3. Start docker instance"
sudo docker-compose up

echo "# # # Finished release task # # #"