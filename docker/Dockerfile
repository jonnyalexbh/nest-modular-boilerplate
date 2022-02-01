FROM node:16.13

# specifies the application directory
WORKDIR /home/node/app

# copying package.json file to the /home/node/app directory
COPY package.json .
COPY package-lock.json .

# copying rest of the application to /home/node/app directory
COPY . .

# generate build
RUN npm run build

EXPOSE 3000

# production
ENTRYPOINT ["node", "dist/main"]
