
DB_CONTAINER_NAME = my_db_container
API_IMAGE_NAME = my_rest_api
API_CONTAINER_NAME = my_api_container

# Start DB container
start-db:
	docker-compose up -d db

# Run DB DML migrations
run-migrations:
	docker-compose run --rm app npx prisma migrate deploy

# Build REST API docker image
build-api:
	docker-compose build app

# Run REST API docker container
run-api:
	docker-compose up -d app

# Stop all containers
stop:
	docker-compose down

# Remove all containers and volumes
clean:
	docker-compose down -v

# Start everything
start-all: start-db run-migrations build-api run-api

.PHONY: start-db run-migrations build-api run-api stop clean start-all