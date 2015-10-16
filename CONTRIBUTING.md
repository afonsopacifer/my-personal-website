# Contributing

## Project Stack

- **Tools**
	- **HTML template engine:** [Jade](http://jade-lang.com/)
	- **CSS preprocessor:** [Stylus](https://learnboost.github.io/stylus/)
	- **Task runner:** [Grunt](http://gruntjs.com/)
- **Vendors**
	- **CSS reset:** [normalize](https://necolas.github.io/normalize.css/)
	- **Grid:** [flex-grid-framework](https://afonsopacifer.github.io/flex-grid-framework/)

## Run the website locally

### 0 - Install the nodejs
Go to [nodejs website](https://nodejs.org/).

### 1 - Install the grunt-cli

```sh
$ npm install -g grunt-cli
```

### 2 - Install all dependencies

```sh
$ npm install
```

### 3 - Start the development ambient
*Starts a static server, watch the .jade/.styl for compile, minify the images, active the livereload and concat/minify all files*

```sh
$ grunt serve
```

## Submit a Pull Request

*1 - Fork it!*

*2 - Clone*

*3 - Create your feature branch:*
```sh
$ git checkout -b my-new-feature
```
*4 - Commit your changes:*
```sh
$ git commit -a -m 'Add some feature'
```
*5 - Push to the branch:*
```sh
$ git push origin my-new-feature
```
*6 - Submit a pull request :)*
