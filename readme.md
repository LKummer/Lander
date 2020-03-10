# Theme Hugo Theme

Hugo theme for Hugo themes.

## Development Guide

After cloning the project, install the required dependencies:
```shell
$ npm ci
```

### Development Server

To launch a hot reload dev server with a demo Hugo blog:
```shell
$ npm run demo:dev
```

### Storybook

To launch a hot reload Storybook instance:
```shell
$ npm run story
```

### Build

To build in development mode:
```shell
$ npm run theme:build
```

To build in production mode:
```shell
$ npm run theme:build:prod
```

To build the demo blog:
```shell
$ npm run demo:build
```

To build the documentation:
```shell
$ npm run doc:build
```

Built files can be found in the `dist` folder.

## Translation Guide

The translation files are in the `i18n` folder. Translation files should be
named in the form `<language subtag>.toml`, for example: `fr.toml`.

A translation definition takes the following form:
```toml
[definition]
    form = "template string"
```

Where `definition` is the key of the definition, `form` is the
[Go Plural Form](https://godoc.org/golang.org/x/text/feature/plural#Form)
of the argument passed to the `template string` and `template string` is the
translated string.

The `direction` definition is a special definition used to configure whether
the language requires left-to-right or right-to-left styling by being set to
`ltr` or `rtl` respectively.

```toml
# Example direction definition:
[direction]
    other = "ltr"
```

If the `direction` definition is not set to either `ltr` or `rtl`, Hugo will
emit an error and refuse to build. 
