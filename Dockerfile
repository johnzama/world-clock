# Use the official Nginx image as a base
FROM nginx:alpine

# Set the working directory to /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

# Remove the default Nginx static assets
RUN rm -rf ./*

# Copy the current directory contents into the container at /usr/share/nginx/html
COPY . .

# Expose port 8023
EXPOSE 8023

# Start Nginx and listen on port 8023
CMD ["nginx", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]
