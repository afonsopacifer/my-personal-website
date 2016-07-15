# afonsopacifer.com

> My personal website.

## Docs

- [Getting Started](https://github.com/afonsopacifer/my-personal-website/blob/master/DOCS.md)

## Stack

- Task Runner: [Gulp](http://gulpjs.com/)
- HTML Template Engine: [Jade](http://jade-lang.com/)
- CSS Post Processor: [PostCSS](https://github.com/postcss/postcss)
- JS Traspiler: [BabelJS](https://babeljs.io/)
- Test Runner: [Karma](https://www.npmjs.com/package/karma)
- Test Framework: [Jasmine](https://github.com/karma-runner/karma-jasmine)
- Browser for test: [PhantomJS](http://phantomjs.org/)

## Insert a new content

1 - Edit the data.json file and add the new content.

2 - Run the grunt task for build the static pages.

```sh
$ gulp build
```

## Folders Structure

	.
	├── README.md
	├── out/
	├── tests/
	├── src/
	|   ├── assets/
	|   |   ├── img/
	|   |   ├── scripts/
	|   |   └── styles/
	|   |       ├── bosons.css
	|   |       ├── atoms.css
	|   |       ├── molecules.css
	|   |       ├── organisms.css
	|   |       └── style.css
	|   ├── includes/
	|   |   ├── analytics.html
	|   |   ├── counter.html
	|   |   └── head-metas.jade
	|   ├── partials/
	|   |   ├── footer.jade
	|   |   └── header.jade
	|   ├── layouts/
	|   |   ├── default.jade
	|   |   └── tag.jade
	|   ├── challenges/
	|   |   └── ?.jade
	|   ├── tags/
	|   |   └── ?.jade
	|   ├── writing.jade
	|   ├── speaking.jade
	|   ├── screencast.jade
	|   ├── projects.jade
	|   ├── misc.jade
	|   └── index.jade
	├── config.json
	├── data.json
	├── gulpfile.js
	├── package.json
	├── karma.conf.js
	├── .editorconfig
	├── .jshintrc
	└── .gitignore

## Automatic Tasks

- `$ gulp build`: Compile, concat and minify all files.
- `$ gulp serve`: Watch the files to build and start a static server.
- `$ gulp deploy`: Deploy for gh-pages.
- `$ gulp validate`: Code quality (JS Hint).
- `$ karma start`: Launch a Phantomjs and watch for unit tests.

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing

Find on our [issues](https://github.com/afonsopacifer/my-personal-website/issues/1) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/afonsopacifer/my-personal-website/blob/master/CONTRIBUTING.md).

## History

See [Releases](https://github.com/afonsopacifer/my-personal-website/releases) for detailed changelog.

## License

[MIT License](https://github.com/afonsopacifer/my-personal-website/blob/master/license.md) © [Afonso Pacifer](http://afonsopacifer.com/)
