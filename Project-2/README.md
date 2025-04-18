## Start the docker file

``$ docker compose build

### Then migrate the database

``$ docker compose run app npx prisma migrate dev --name init

### Starting up the docker file

``$ docker compose up
