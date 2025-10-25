# Step 1: Use Node.js image
FROM node:18-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy backend package files and install dependencies
COPY backend/package*.json ./backend/
RUN cd backend && npm install

# Step 4: Copy all project files
COPY . .

# Step 5: Expose port
EXPOSE 3000

# Step 6: Start backend server
CMD ["node", "backend/server.js"]
