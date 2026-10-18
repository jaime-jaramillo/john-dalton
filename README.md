# Hello world with Hugo

A minimal Hugo site with a plain HTML page that says **Hello world**.

Hugo is a static site generator written in Go. This project uses the Hugo executable; no Go application, theme, or npm dependencies are needed.

## Run locally

Prerequisite: Hugo 0.161.0 or newer. This project was verified with Hugo 0.161.0.

From this directory, run:

```sh
hugo server
```

Open <http://localhost:1313/>. Hugo automatically rebuilds and refreshes the browser when you edit files. Press Ctrl+C to stop the server.

## Build

```sh
hugo
```

The generated site is written to `public/`. To build for a deployed URL:

```sh
hugo --baseURL https://example.com/
```

## Files

- `hugo.toml`: site settings.
- `layouts/home.html`: homepage markup.

Documentation: [Hugo quick start](https://gohugo.io/getting-started/quick-start/) and [template types](https://gohugo.io/templates/types/).
