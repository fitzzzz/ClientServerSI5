FROM mongodb:latest

# Create app directory
WORKDIR /usr/deliveroo

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY src src
COPY start.sh start.sh

EXPOSE 8001
ENTRYPOINT ["bash", "start.sh"]