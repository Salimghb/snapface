# based on https://mherman.org/blog/dockerizing-an-angular-app/
# base image
FROM node:14.17.0-alpine


# set working directory
RUN mkdir -p /app
WORKDIR /app

# install and cache app dependencies
COPY package.json /app
RUN npm install

# add app
COPY . /app

# start app
CMD npm run start
