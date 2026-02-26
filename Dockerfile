# Step 1: Base image
FROM node:18-alpine

# Step 2: Working directory set karein
WORKDIR /usr/src/app

# Step 3: Pehle package files copy karein (Caching ke liye)
COPY package*.json ./

# Step 4: Dependencies install karein
RUN npm install

# Step 5: Baqi code copy karein
COPY . .

# Step 6: Port open karein
EXPOSE 3000

# Step 7: App start karein
CMD ["npm", "start"]
