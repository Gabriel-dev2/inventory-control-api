# Inventory Control API

A Node.js projecto to manage stocks

## Overview  
This api was written using the Express.js framework [Express](https://expressjs.com/).
Using the ORM [Sequelize](https://sequelize.org/) with migrations.

## Prerequisites

- Node v12.22.12
- NPM 6.14.16

## Environment variables

**Create your own environment file as the .env.sample ex: .env**

    PORT=3000

    DATA_BASE_USER=root
    DATA_BASE_PASSWORD=root
    DATA_BASE_NAME=inventory_control
    DATA_BASE_HOST=localhost
    SALT=10
    SECRET=some-secret-ley

## To run this api

**Before you run the api server execute the following command to execute the DB migrations**

        npx sequelize-cli db:migrate

**To run the api server use following command**

        npm start

## Authors

* **Gabriel Lucas** - *Initial work* - [Gabriel](mailto:gabriel23costalima@outlook.com)
