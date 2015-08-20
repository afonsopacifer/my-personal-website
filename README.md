# Afonso Pacifer Personal Website
> Visit the website in  [afonsopacifer.com](http://afonsopacifer.com/)

## Run the website

### Install all dependencies

```sh
$ npm install
```

### Start the development ambient
*Starts a static server, watch the .jade/.styl for compile, minify the images, active the livereload and concat/minify all files*

```sh
$ grunt dev
```

## Tasks list

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

[MIT Licence]((https://github.com/afonsopacifer/my-personal-website/blob/master/LICENCE.md) © Afonso Pacifer
