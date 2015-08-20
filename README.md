# Afonso Pacifer Personal Website
> Visit the website in  [afonsopacifer.com](http://afonsopacifer.com/)

## Project Stack (nodejs)
- **HTML template engine:** Jade
- **CSS preprocessor:** Stylus
- **Task runner:** Grunt
- **CSS reset:** normalize
- **Grid:** flex-grid-framework

## Run the website

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

### Folders Structure
<pre>
.
├── README.md
├── CONTRIBUTING.md
├── LICENCE.md
├── Gruntfile.js
├── package.json
├── data.json
├── dev/
|   ├── index.jade
|   ├── projects.jade
|   ├── articles.jade
|   ├── talks.jade
|   ├── CNAME
|   ├── favicon.ico
|   ├── includes/
|   |   ├── head-requests.jade
|   |   ├── top-bar.jade
|   |   ├── footer.jade
|   |   `── bottom-requests.jade
|   `── assets/
|       ├── img/
|       |   `── icons/
|       ├── styles/
|       |   ├── base/
|       |   |   ├── normalize.styl
|       |   |   `── flex-grid-framework.styl
|       |   ├── layout/
|       |   |   ├── top-bar.styl
|       |   |   `── footer.styl
|       |   `── style.styl
|       `── scripts/
|           ├── analytics.js
|           `── script.js
├── prod/
├── temp/
`── .gitignore
</pre>

## Contributing

Want to contribute? [Follow these recommendations](https://github.com/afonsopacifer/my-personal-website/blob/master/CONTRIBUTING.md).

## Licence

[MIT Licence](https://github.com/afonsopacifer/my-personal-website/blob/master/LICENCE.md) © Afonso Pacifer
