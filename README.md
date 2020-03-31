# ufit

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).


# DOCKER WINDOWS 

Per eseguire il progetto su Windows eseguire

VUE
docker run -it -v C:\Users\tondelli\Desktop\2020\test\ufit:/front -v /front/node_modules -p 0.0.0.0:8080:8080 -p 0.0.0.0:5000:5000 -e CHOKIDAR_USEPOLLING=true off-front

# DOCKER
NGINX
nginx -s reload

ADD RC-SERVICE 
apk add openrc

Docker container ip

docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}'

# LINK 

Vue-Nginx 

https://www.freecodecamp.org/news/vuejs-pwa-on-nginx-22360ee7a7bf/

Docker-Vue

https://mherman.org/blog/dockerizing-a-vue-app/

Simple Nginx

https://medium.com/@thucnc/deploy-a-vuejs-web-app-with-nginx-on-ubuntu-18-04-f93860219030

Nginx-Vue

https://stackabuse.com/single-page-apps-with-vue-js-and-flask-deployment/#settingupnginx


# ERROR

Docker
- System has not been booted with systemd as init system

COSA FARE

Cambiare strategia di Deploy Docker non supporta questo meccanismo

- Ip cababilities

https://unix.stackexchange.com/questions/459206/list-ip-tables-in-docker-container