FROM node
WORKDIR /app

COPY . .

ENV REACT_APP_BACKEND_API="http://localhost:3005"

EXPOSE 8080

RUN npm i

CMD ["npm", "start"]

