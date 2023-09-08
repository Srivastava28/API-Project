# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy your application files into the container
COPY package*.json ./
COPY app.js ./

# Install application dependencies
RUN npm install

# Expose the port your application listens on
EXPOSE 7850

# Define the command to start your application
CMD ["node", "app.js"]
