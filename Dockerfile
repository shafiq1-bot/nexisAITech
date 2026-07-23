# Multi-stage Dockerfile for Nexis AI Enterprise Platform (nexisai.us)
# Optimized for Google Cloud Run & Cloud Build deployment

# Stage 1: Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files and install all dependencies
COPY package*.json ./
RUN npm install

# Copy all application source code
COPY . .

# Set node environment to production for client & server bundle compilation
ENV NODE_ENV=production

# Build both Vite static frontend client and Express server bundle (dist/server.cjs)
RUN npm run build

# Stage 2: Production runtime stage
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8080

# Install production dependencies only
COPY package*.json ./
RUN npm install --omit=dev && npm cache clean --force

# Copy compiled distribution output from builder
COPY --from=builder /app/dist ./dist

# Expose standard Cloud Run container port
EXPOSE 8080

# Container healthcheck using standard HTTP check
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/api/health || exit 1

# Launch production server
CMD ["node", "dist/server.cjs"]
