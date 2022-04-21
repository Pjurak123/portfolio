# build environment
FROM node:alpine
COPY package.json ./
COPY package-lock.json ./
COPY . ./
RUN npm install
CMD ["npm", "start"]