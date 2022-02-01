APP_NAME?=nestjs-boilerplate

setup:
	cp .env.example .env
	make dc:build
	
dc\:build:
	docker build -f docker/Dockerfile -t $(APP_NAME) .

dc\:dev:
	docker run -p 8080:3000 -d --name nestjs-tankis $(APP_NAME)
