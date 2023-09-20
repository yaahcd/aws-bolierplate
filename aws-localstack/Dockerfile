FROM node:16-slim

WORKDIR /src

COPY package.json package-lock.json /src/

RUN npm ci --silent

# copy whole directory(.) to container (.)
COPY . .
 
CMD npm start