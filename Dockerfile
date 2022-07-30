# build environment
FROM node:alpine as build
COPY package.json ./
COPY package-lock.json ./
COPY . ./
RUN npm install
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]