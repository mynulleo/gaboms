#!/bin/bash
# Author: Sarfaraz

if [ ! -f composer.json ]; then
    echo "Please make sure to run this script from the root directory of this repo."
    exit 1
fi

git pull origin dev
composer install
npm install
npm run prod
