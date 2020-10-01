# Getting Started

## 1 - Install
*install the basics dependencies* :

- [NodeJS](https://nodejs.org/en/)
- [GulpJS](http://gulpjs.com/)

## 2 - The global configs

*Open the `config.json` file and add your global information and preferences:*

```json
{
  "site_url":"http://afonsopacifer.com/",
  "share_img_url":"http://afonsopacifer.com/assets/img/share.png",
  "twitter_card_type":"summary_large_image",
  "open_graph_type":"website"
}
```

- `site_url`: Will be used for social sharing meta tags.<br>
- `share_img_url`: Will be used for social sharing meta tags.
- `twitter_card_type`: More Info on [Twitte Cards Types](https://dev.twitter.com/cards/types).
- `open_graph_type`: More Info on [Open Graph Reference](https://developers.facebook.com/docs/reference/opengraph/).

<hr>

## 3 - Create a page

*Go to `src/` directory and create your `.jade` file:*

`example.jade`

```jade
extends ./layouts/default.jade

block page_infos
	-var title = "Example title"
	-var description = "Cool description"
	-var keywords = "Your keywords"

block page_style
	-var skin = "bs-default"

block content
	div Hello World
```

- `title`: Will be used for social sharing and SEO meta tags.
- `description`: Will be used for social sharing and SEO meta tags.
- `keywords`: Will be used for SEO meta tag.
- `skin`: Will be used for page style.

<hr>

## 4 - Create a tag

*Go to `src/tags` directory and create your `.jade` file:*

`example-tag.jade`

```jade
extends ./../layouts/tag.jade

block page_infos
	-var title = "example-tag"
	-var description = "Cool description"
	-var keywords = "Your keywords"

block page_style
	-var skin = "bs-default"

block page_content
	-var page = "example-tag"
```

- `title`: Will be used for social sharing and SEO meta tags.
- `description`: Will be used for social sharing and SEO meta tags.
- `keywords`: Will be used for SEO meta tag.
- `skin`: Will be used for page style.
- `page`: Define the page content here.

<hr>

## 5 - Build, Serve and Deploy

*Build all files*
```sh
$ gulp build
```

*Watch the files to build and run a static server on http://localhost:8080/*
```sh
$ gulp serve
```

*Deploy for gh-pages*
```sh
$ gulp deploy
```
