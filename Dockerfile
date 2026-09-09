FROM node:25-slim

# Set working directory
WORKDIR /usr/src/app

# Copy package.json to the working directory
COPY package*.json ./

# Install a npm
RUN npm install 

# Copy project files into the image
COPY . .

# Expose the internal port the server will listen on
EXPOSE 5000

# Start the server on port 5000
CMD ["npm", "run", "dev"]
