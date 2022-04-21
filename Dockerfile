# build environment
FROM node:alpine
COPY package.json ./
COPY package-lock.json ./
COPY . ./
RUN npm install
RUN npm run build
RUN npm install -g serve
EXPOSE 3000:3000
CMD ["serve", "-s", "build"]