FROM nginx
COPY ./dist/ /usr/share/nginx/html/
COPY ./docker/vhost.nginx.conf /etc/nginx/conf.d/nginx-koa.conf
EXPOSE 80
