#!/bin/bash
# Installer for githook app
#

#### VARIABLES ####
INSTALL_DIR="/var/www"

#### END VARIABLES #####

apt-get update
pid=$!

read -p "Choose installation path or press enter: " INSTALL_DIR

chmod +x /var/www/node-app/my-node-app.js

systemctl daemon-reload
systemctl start node-app-service-name
systemctl enable node-app-service-name1 