FROM nginx:alpine
# Copy your built static folder into the Nginx web root
COPY ./dist/ /usr/share/nginx/html
# For SPAs: ensure client-side routing works
RUN sed -i 's|try_files \$uri \$uri/ =404;|try_files \$uri \$uri/ /index.html;|g' /etc/nginx/conf.d/default.conf
EXPOSE 80
