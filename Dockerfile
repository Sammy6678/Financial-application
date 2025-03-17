FROM node:20-alpine as build


#creating the working directory

WORKDIR /bookmyshow2

#copying the Json files

COPY package*.json ./

#installing the dependencies

RUN npm install

# Copying all the files in the working directory

COPY . .

# Builing the final stage

RUN npm run build

# stage 2

FROM nginx:alpine

# copying from the build

COPY --from=build /bookmyshow2/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
