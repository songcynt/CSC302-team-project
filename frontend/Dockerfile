# Official node image
FROM node:17
# Setting the working directory to "/client"
WORKDIR /frontend

# Copies the package.json file into "/client" and run npm i
COPY package.json /frontend
RUN npm install
# Copies the entire react source code into "/client"
COPY . /frontend

EXPOSE 3000
# Starting the react app
CMD [ "npm", "start"]