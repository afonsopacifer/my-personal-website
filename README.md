#Afonso Pacifer Personal Website

### Development
####Clone this repository

    $ git clone https://github.com/afonsopacifer/my-personal-website.git

####Install all dependencies

    $ npm install

####Start the dev mode
*Starts a static server, watch the .jade/.styl for compile, active the livereload and concat/minify all files*

    $ grunt dev

####Test code quality
*W3C html validation*

    $ grunt quality

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
|   ├── assets/
|   |   ├── img/
|   |   |   ├── icons/
|   |   ├── styles/
|   |   |   ├── normalize.styl
|   |   |   ├── style.styl
|   |   ├── scripts/
|   |   |   ├── script.js
├── prod/
|   ├── index.html
|   ├── CNAME
|   ├── favicon.ico
|   ├── assets/
|   |   ├── img/
|   |   |   ├── icons/
|   |   ├── styles/
|   |   |   ├── style.min.css
|   |   ├── scripts/
|   |   |   ├── script.min.js
`── .gitignore
</pre>

### Licence
[MIT Licence](licence.md) © Afonso Pacifer
