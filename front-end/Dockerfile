FROM node:18-alpine

# sets working directory
WORKDIR /usr/src/app/front_end

# copy the package and lock file
COPY package.json yarn.lock ./

# install dependencies
RUN yarn install && yarn cache clean

# add additional dependencies
RUN yarn add @mui/icons-material

# copy the rest of the project files
COPY . .

# copy tsconfig.json (or tsconfig.node.json) if needed
COPY tsconfig.json ./

# exposes port 5174
EXPOSE 5173

# runs the command npm start
CMD ["yarn", "dev"]
