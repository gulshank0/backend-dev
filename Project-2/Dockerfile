# Use an official node.js runtime as a parent image
FROM node:22-alpine

# Workdir form the app to run on container

WORKDIR /app

# Copy the package.json and the package-lock.json files to the container 

COPY package*.json .

#Install the depandencies 
RUN npm install

#Copy the rest of the application node

COPY . . 


# Expose the port that code run on 
EXPOSE 3000

#Define the command to run on the application

CMD ["node","./src/server.js"]
