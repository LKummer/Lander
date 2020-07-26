+++
title = "Color Customization"
description = "Instructions for color configuration parameters."
categories = [
    "Application"
]
+++

Lander only requires the non-extended version of Hugo to build.
Every color in the theme can be customized without a Sass rebuild,
thanks to CSS custom properties.

Lander is built around two types of sections: _light_ and _dark_.
Color customization is built around enabling independent coloring of each type.
This means you can theme Lander with both section types dark, light or reversed.

Note all examples in this guide are in `TOML`.
The options can be used in other configuration formats.

## Options

If an invalid option is supplied a warning will be emmited.

### Primary

Primary color used mostly for buttons over _light_ sections.

``` toml
[params]
  [params.colors]
    primary-600 = "hsl(216, 40%, 32%)"
    primary-500 = "hsl(216, 45%, 35%)"
    primary-400 = "hsl(216, 55%, 40%)"
```

### Accent

Accent color used for buttons and links.

* `100`, `200` and `300` are used for link card accents in _dark_ sections.
* `400`, `500` and `600` are used for buttons, links and active items in _light_
  sections.

``` toml
[params]
  [params.colors]
    accent-600 = "hsl(27, 95%, 38%)"
    accent-500 = "hsl(27, 90%, 42%)"
    accent-400 = "hsl(27, 80%, 50%)"
    accent-300 = "hsl(216, 27%, 65%)"
    accent-200 = "hsl(216, 25%, 67%)"
    accent-100 = "hsl(216, 20%, 70%)"
```

### Background

Used as the background for both _light_ and _dark_ sections.

* `100` is the _light_ background.
* `200`, `300` and `400` are used on cards and link cards in _dark_ background.
* `900` is the _dark_ background.

``` toml
[params]
  [params.colors]
    background-900 = "hsl(216, 40%, 20%)"
    background-400 = "hsl(216, 10%, 90%)"
    background-300 = "hsl(216, 10%, 92%)"
    background-200 = "hsl(216, 10%, 95%)"
    background-100 = "hsl(216, 10%, 97%)"
```

### Text

Used for text. Note the three dark colors `900`, `800` and `700` and the five
light colors `500`, `400`, `300`, `200` and `100`.

* `100` is used in _dark_ secctions.
* `200` is used in buttons in _light_ sections.
* `300`, `400` and `500` are used in the footer navigation (_dark_).
* `700`, `800` and `900` are used in _light_ sections.

``` toml
[params]
  [params.colors]
    text-900 = "hsla(0, 0%, 0%, 0.75)"
    text-800 = "hsla(0, 0%, 0%, 0.7)"
    text-700 = "hsla(0, 0%, 0%, 0.55)"
    text-500 = "hsl(216, 56%, 78%)"
    text-400 = "hsl(216, 48%, 83%)"
    text-300 = "hsl(216, 40%, 90%)"
    text-200 = "hsla(0, 0%, 100%, 0.85)"
    text-100 = "hsla(0, 0%, 100%, 0.9)"
```

### Highlight

Used on the highlight blocks.

* `highlight-inline` is used for inline `code` elements.
* `highlight-text` is used for names, strings and namespaces.
* `highlight-background` is used for the background of highlight blocks.
* `highlight-comment` is used for comments.
* `highlight-special` is used for types and exceptions.
* `highlight-operator` is used for operators and parenthesis.
* `highlight-literal` is used for literals and keywords.

``` toml
[params]
  [params.colors]
    highlight-inline = "hsl(27, 80%, 50%)"
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
    text-500 = "hsl(216, 56%, 78%)"
    text-400 = "hsl(216, 48%, 83%)"
    text-300 = "hsl(216, 40%, 90%)"
    text-200 = "hsla(0, 0%, 100%, 0.85)"
    text-100 = "hsla(0, 0%, 100%, 0.9)"
    highlight-text = "hsl(240, 35%, 99%)"
    highlight-background = "hsl(240, 13%, 14%)"
    highlight-comment = "hsl(250, 25%, 55%)"
    highlight-special = "hsl(180, 75%, 55%)"
    highlight-operator = "hsl(330, 95%, 75%)"
    highlight-literal = "hsl(250, 80%, 70%)"
```