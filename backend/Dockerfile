FROM node:14-alpine as todo_tasks
WORKDIR /backend
COPY package*.json .
RUN npm install
COPY . .
CMD ["npm", "start"]

# docker build -t task .
