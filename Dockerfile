# Use lightweight Node image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy only package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy rest of the code
COPY . .

# Set environment variable
ENV PROJECT_NAME="CI/CD-Pipeline-with-jenkins-docker"

# Expose app port
EXPOSE 3000

# Run app
CMD ["npm", "start"]
