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