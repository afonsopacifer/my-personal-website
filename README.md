#[Afonso Pacifer Personal Website](http://afonsopacifer.com.br/)

##Grunt Plugins list
- contrib-watch
- contrib-connect
- contrib-jade
- contrib-stylus
- gh-pages
- contrib-concat
- contrib-uglify
- html-validation
- contrib-csslint
- contrib-imagemin
- newer
- postcss

###Development
####Clone this repository

    $ git clone https://github.com/afonsopacifer/my-personal-website.git

####Install all dependencies

    $ npm install

####Start the development ambient
*Starts a static server, watch the .jade/.styl for compile, minify the images, active the livereload and concat/minify all files*

    $ grunt dev

####Test the code quality
*W3C html validation and CSS Lint*

*NOTE: For debug the compiled files (no compressed), use the content of the temp/ folder*

    $ grunt quality

####Autoprefixer the css with postcss
*last 2 version of all and >= ie 9*

    $ grunt autoprefixer

####Deploy for gh-pages

    $ grunt deploy

####Commit alterations in the master

    $ git add .
    $ git commit -m "alterations"
    $ git push origin master

### Folders Structure
<pre>
.
├── README.md
├── Gruntfile.js
├── package.json
├── licence.md
├── dev/
|   ├── index.jade
|   ├── CNAME
|   ├── favicon.ico
|   `── assets/
|       ├── img/
|       |   `── icons/
|       ├── styles/
|       |   ├── vendors/
|       |   |   `── normalize.styl
|       |   ├── colors.styl
|       |   ├── fonts.styl
|       |   ├── atoms.styl
|       |   `── style.styl
|       ├── scripts/
|       |   `── script.js
|       `── font/
├── prod/
|   ├── index.html
|   ├── CNAME
|   ├── favicon.ico
|   `── assets/
|       ├── img/
|       |   `── icons/
|       ├── styles/
|       |   `── style.min.css
|       ├── scripts/
|       |   `── script.js
|       `── font/
├── temp/
`── .gitignore
</pre>

### Licence
[MIT Licence](licence.md) © Afonso Pacifer
