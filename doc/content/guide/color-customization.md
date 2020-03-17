+++
title = "Color Customization"
date = "2020-03-17"
description = "Instructions for the color configuration parameters."
categories = [
    "User Guides"
]
+++

All colors of the theme can be customized through options in the site's
configuration.

The theme only requires the small version of Hugo as this is done through CSS
variables, not Sass variables.

## Options

If an invalid option is supplied, it will not be rendered and a warning will be
emmited.

Colors of a higher number are darker.

### Primary

Used mostly on buttons.

``` toml
[params]
  [params.colors]
    primary-600 = "hsl(216, 40%, 32%)"
    primary-500 = "hsl(216, 45%, 35%)"
    primary-400 = "hsl(216, 55%, 40%)"
```

### Secondary

Used on buttons, links and active TOC links.

``` toml
[params]
  [params.colors]
    accent-600 = "hsl(27, 95%, 38%)"
    accent-500 = "hsl(27, 90%, 42%)"
    accent-400 = "hsl(27, 80%, 50%)"
```

### Background

Used as the background for both light and dark sections. Note `200` and `100` are
the light backgrounds and `900` is the dark background.

``` toml
[params]
  [params.colors]
    background-900 = "hsl(216, 40%, 20%)"
    background-200 = "hsl(216, 10%, 95%)"
    background-100 = "hsl(216, 10%, 97%)"
```

### Text

Used for text. Note the three dark colors `900`, `800` and `700` and the single
light color `100`.

``` toml
[params]
  [params.colors]
    text-900 = "hsla(0, 0%, 0%, 0.75)"
    text-800 = "hsla(0, 0%, 0%, 0.7)"
    text-700 = "hsla(0, 0%, 0%, 0.55)"
    text-100 = "hsla(0, 0%, 100%, 0.9)"
```

### Highlight

Used on the highlight blocks.

* `highlight-text` is used for names, strings and namespaces.
* `highlight-background` is used for the background of highlight blocks.
* `highlight-comment` is used for comments.
* `highlight-special` is used for types and exceptions.
* `highlight-operator` is used for operators and parenthesis.
* `highlight-literal` is used for literals and keywords.

``` toml
[params]
  [params.colors]
    highlight-text = "hsl(240, 35%, 99%)"
    highlight-background = "hsl(240, 13%, 14%)"
    highlight-comment = "hsl(250, 25%, 55%)"
    highlight-special = "hsl(180, 75%, 55%)"
    highlight-operator = "hsl(330, 95%, 75%)"
    highlight-literal = "hsl(250, 80%, 70%)"
```

## Example

This example configuration sets all the valid color options.

``` toml
[params]
  [params.colors]
    primary-600 = "hsl(216, 40%, 32%)"
    primary-500 = "hsl(216, 45%, 35%)"
    primary-400 = "hsl(216, 55%, 40%)"
    accent-600 = "hsl(27, 95%, 38%)"
    accent-500 = "hsl(27, 90%, 42%)"
    accent-400 = "hsl(27, 80%, 50%)"
    background-900 = "hsl(216, 40%, 20%)"
    background-200 = "hsl(216, 10%, 95%)"
    background-100 = "hsl(216, 10%, 97%)"
    text-900 = "hsla(0, 0%, 0%, 0.75)"
    text-800 = "hsla(0, 0%, 0%, 0.7)"
    text-700 = "hsla(0, 0%, 0%, 0.55)"
    text-100 = "hsla(0, 0%, 100%, 0.9)"
    highlight-text = "hsl(240, 35%, 99%)"
    highlight-background = "hsl(240, 13%, 14%)"
    highlight-comment = "hsl(250, 25%, 55%)"
    highlight-special = "hsl(180, 75%, 55%)"
    highlight-operator = "hsl(330, 95%, 75%)"
    highlight-literal = "hsl(250, 80%, 70%)"
```