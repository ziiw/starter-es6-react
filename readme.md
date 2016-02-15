<p align="center">
  <img src="https://github.com/ziiw/starter-es6-react/blob/master/public/assets/img/piece_of_cake-02.jpg" />
</p>
## Starter ES6: React / Stylus / Browserify

### Why ?
Yes I know it's another JS starter, but I needed a starter for my projects, a starter that I know perfectly how it works etc... If you like the way I do, don't be shy and use it ;). I will be gracefull :D.

### No Tasks runner
I don't use tasks runners because I don't really need them. I used to use Gulp for my projects but I wanted something light and fast to build my starter (maybe one day I will build a task runner starter). So npm that's it :).

### First launch
Installation needed for compilation:
``` sh
npm install -g browserify uglify-js stylus autoprefixer-stylus
```

Install modules:
``` sh
npm install
```

### Start
``` sh
npm start
```
It start the budo server, watch your styles and javascript files.

### Deploy
``` sh
npm run build
```
All you need to deploy will be in `public/`

### Todo
* Stylus minimal configuration :white_check_mark:
* React Router :white_check_mark:
* Redux branch 
* Observables (RxJS || Bacon.JS || ...)
