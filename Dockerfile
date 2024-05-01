# Use Node.js 14 LTS as the base image
FROM node:14

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose port 3000 (the port your app runs on)
EXPOSE 3000

# Command to run the application
CMD ["node", "app.js"]
