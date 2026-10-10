#!/bin/bash

echo "--- Updating Omniroute ---"
docker compose pull omniroute
docker compose up -d omniroute
docker compose exec omniroute npm install -g --ignore-scripts
echo "--- Update Complete ---"
