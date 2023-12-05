#!/usr/bin/env bash

#################################
## Run application in DEV mode ##
#################################


started_at=$(date +"%s")

echo "-----> Provisioning containers"
sudo docker-compose --file docker-compose-dev.yaml up
echo ""

# Run Sequalize's migrations.
echo "-----> Running application migrations"
sudo docker exec -it squadhelp_server-dev_1 sequelize db:migrate
echo ""

# Run Sequalize's seeds.
echo "-----> Running application seeds"
sudo docker exec -it squadhelp_server-dev_1 sequelize db:seed:all
echo "<----- Seeds created"

ended_at=$(date +"%s")

minutes=$(((ended_at - started_at) / 60))
seconds=$(((ended_at - started_at) % 60))

echo "-----> Done in ${minutes}m${seconds}s"
