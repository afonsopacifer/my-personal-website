# Afonso Pacifer Personal Website
> Visit the website in  [afonsopacifer.com](http://afonsopacifer.com/)

## Project Stack (nodejs)
- **HTML template engine:** [Jade](http://jade-lang.com/)
- **CSS preprocessor:** [Stylus](https://learnboost.github.io/stylus/)
- **Task runner:** [Grunt](http://gruntjs.com/)
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
$ grunt dev
```

## Contents
- [About](http://afonsopacifer.com/index.html) - About me :)
- [Projects](http://afonsopacifer.com/projects.html) - The list of open source projects developed.
- [Articles](http://afonsopacifer.com/articles.html) - The list of articles written.
- [Talks](http://afonsopacifer.com/talks.html) - The list of talks presented.
- [Demos](http://afonsopacifer.com/demos.html) - Demonstrations using some frameworks or tools.
- [Fun with CSS](http://afonsopacifer.com/fun-with-css.html) - Generally useless experiments , however great fun and generate great learning.

## Insert new content
1 - Edit the data.json file and add the new content.

2 - Run the grunt task for build the static pages.

```sh
$ grunt build
```

## Tasks list

- Compile, concat and minify all files: `$ grunt build`
- Start the development ambient: `$ grunt dev`
- W3C html validation: `$ grunt validation`
- Lint the css: `$ grunt lint`
- Autoprefixer the css: `$ grunt autoprefixer`
- Deploy for gh-pages: `$ grunt deploy`

## Contributing

Want to contribute? [Follow these recommendations](https://github.com/afonsopacifer/my-personal-website/blob/master/CONTRIBUTING.md).

## Licence

[MIT Licence](https://github.com/afonsopacifer/my-personal-website/blob/master/LICENCE.md) © Afonso Pacifer
