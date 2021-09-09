# Next.js + Express - Application template with example

## Description

Next.js application which makes external API calls to Express app. Both written in TypeScript.

Express app uses TypeORM to communicate with PostresSQL database.

Example demonstrates proper connection: **client --- server --- postgres**

## Requirements

-   Node.js
-   Docker with Docker Compose

## Usage

1. Run `npm install` inside **_client_** and **_server_** directory
2. Run `docker-compose up` in root directory
3. Open http://localhost:3000 in your browser

or run

```shell
bash ./install.sh
```
