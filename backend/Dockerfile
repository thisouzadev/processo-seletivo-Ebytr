FROM node:14-alpine as backendTelzir
WORKDIR /telzir-backend
ADD ./ ./
COPY . .
EXPOSE 3001
CMD ["npm", "install"]
ENTRYPOINT ["npm", "start"]
