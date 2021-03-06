#!/bin/bash

echo "# # # Start release task # # #"

echo "1. Stop docker instance"
sudo docker-compose down

echo "2. Fetch repository ..."
git fetch origin
git reset --hard origin/master

echo "3. Rebuild docker instance"
sudo docker-compose build

echo "4. Restart docker instance"
sudo docker-compose up -d

echo "5. make scripts executable"
sudo chmod +x -R scripts/

echo "# # # Finished release task # # #"