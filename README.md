
#### Tiny Wishlist

__UPD__: Vue.js 2 version can be found [here](https://github.com/lostinlight/vuejs-wishlist)

Little experiment to try out Angular

> Written before Angular 2 was officially released. Dependencies are *really* out of date.

Live demo, however, still works in dev mode - [angular2-wishlist](https://angular2-wishlist.herokuapp.com) - takes time to load (heroku free dino)

![screen preview](preview.jpg?raw=true)

#### Commands

- `gulp` Development mode
- `gulp build` Create production build
- `gulp serve-build` Serve production build via Browsersync

#### Deploy
In package.json file change "postinstall" value to: __" typings install && gulp --env='prod' "__
