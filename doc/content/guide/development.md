+++
title = "Development Guide"
date = "2020-03-05"
description = "Development workflow instructions."
categories = [
    "Development Guides"
]
+++

Get familiarized with the development workflow of the project.

## Installing Dependencies

All dependencies in the project are managed through NPM, including Hugo.

To install the dependencies, open a command line at the root of the project and
run:

```s
$ npm ci
```

To avoid package compatiblity issues, use Node version `12.x`.

## Hot Reload Servers

Hot reload development servers can be launched for the demo site, the
documentation or storybook.

### Demo

Run a development server of the demo site while watching the theme with Webpack:

```s
$ npm run demo:dev
```

It should be accessible at `localhost:1313/Lander/demo/`.

### Documentation

Run a development  server of the documentation while watching the theme with
Webpack:

```s
$ npm run doc:dev
```

It should be accessible at `localhost:1313/Lander/`.

### Storybook

Run a Storybook dev server:

```s
$ npm run story
```

It should be accessible at `localhost:6006/`.

## Building

When customizing the theme only a build of the theme itself is needed.
The rest of the build scripts are mostly for CI/CD pipelines.

### Theme

Build the theme in production mode:

```s
$ npm run theme:build:prod
```

Build the theme in development mode:

```s
$ npm run theme:build
```

### Sites

Note that having a built theme in `dist/` is required for building the sites.

Build the documentation:

```s
$ npm run doc:build
```

Build the demo site:

```s
$ npm run demo:build
```

## Linting

ESLint and Stylelint are used in the project. To run them:

```s
$ npm run lint
```

The linters are also configured into the Webpack build. When using the
development servers linting output is displayed in the console.
