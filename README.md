![open source for the win](https://kodeguild.com/shared/OpenSource4theWin.svg)

## Angular 2 Wishlist

### Intro
- Angular 2 / Typescript demo with mock data
- Uses [Angular2-starter](https://github.com/antonybudianto/angular2-starter) as a starter-kit


*Caution*: written before Angular 2 was officially released. Dependencies are out of date.
My first look at Angular & Typescript. Please, bear with me.

### Preview
- Live Demo → [angular2-wishlist.herokuapp.com](https://angular2-wishlist.herokuapp.com) - takes *a lot* of time to load

![screen one](preview.jpg?raw=true)

### Commands

- `gulp` Development mode
- `gulp build` Create production build
- `gulp serve-build` Serve production build via Browsersync

For further details read [Angular2-starter](https://github.com/antonybudianto/angular2-starter/wiki) Wiki.

### Deploy to Heroku
In package.json file change "postinstall" value to: __" typings install && gulp --env='prod' "__
