FROM node:16.17.0

WORKDIR /API

COPY package*.json .

RUN npm install

COPY . . 

EXPOSE 3000

CMD ["npm", "start"]

# on supprime tout les conteneurs
# docker rm $(docker ps -a -q) 

# apres rm rajoutes -f pour forcer la suppression, et -aq au lieu de -q pour supprimer tout les conteneurs

#on supprime toues les volumes
# docker rm $(docker ps -a -q)

