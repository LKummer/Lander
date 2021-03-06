+++
title = "Section Customization with Front Matter"
description = "Guidance for the customizable sections of the theme."
categories = [
    "Application"
]
+++

The root `_index.md` and section `_index.md` files render sections that are
customizable through front matter options.

## Section Options

Some sections are only availbale for certain pages.

Most section options are optional, but it is recommended to fill all sections for
optimal aesthetics.

### Masthead

The `masthead` section is available for both root and section `_index.md` files.

It is the background colored section with large titles right under the navigation.
This is the element users usually see first and it can be used to guide them to
important pages or download links.

```yaml
masthead:
  title: 'Masthead Title'
  subtitle: 'Masthead Subtitle'
```

The `title` and `subtitle` strings are used for the masthead's large title and
smaller subtitle. Both are optional.

```yaml
masthead:
  buttons:
    - label: 'Primary Colored Button'
      href: '#'
    - label: 'Accent Colored Button'
      to: 'guide/'
      color: 'accent'
```

The `buttons` array is used to render links in the masthead. Each button requires
a `label`, either an `href` or `to` and optionally contains a `color`.
The `buttons` array itself is optional.

The `to` option is used to link to internal pages, as it formats a URL in the
current active language for all languages. The `href` option is used for external
links as it directly sets URL for the link.

Avoid using the `to` option with paths that begin with `/` because Hugo's
`absLangURL` method behaves unexpectedly.

Currently the available settings for `color` are `primary` and `accent`. When no
color is supplied it defaults to `primary`.

### Introduction

The `introduction` section is only available for the root `_index.md` file.

The introduction section is rendered after the masthead. In list pages it is replaced by a category-sorted list of the section's pages.
This section is used to introduce your project and mention some of it's selling
points.

```yaml
introduction:
  title: 'Introduction Title'
  text: 'Introduction Text'
```

The `title` and `text` strings are used for an offset section displayed above
the cards. Both are optional.

```yaml
introduction:
  cards:
    - title: 'First Card'
      text: 'First Card Text'
    - title: 'Second Card'
      text: 'Second Card Text'
```

The `cards` array contains cards that must have both `title` and `text` options.
Currently the `text` options do not support Markdown formatting.

### Bottom

The `bottom` section is available for both both root and section `_index.md` files.

It is the background colored section at the bottom of the page, right above the
footer. It catches the user's attention after they've finished scrolling and can
be used to direct them to content they might be looking for.

```yaml
bottom:
  title: 'Bottom Title'
  text: 'Bottom Text'
```

The `title` and `text` are used to render centered text. Both are optional.

```yaml
bottom:
  buttons:
    - label: 'Bottom Button'
      to: 'guide/'
      color: 'accent'
```

The `buttons` array is rendered like the Masthead `buttons` array. It is
optional.

## Example Configurations

To finish the guide, let's take a look at a couple of full front matter page
configurations.

### Root `_index.md`

This is a full front matter configuration of a site's root `_index.md` file.

```yaml
---
title: 'Home'
menu:
  main:
    weight: 10
# Section Configuration:
masthead:
  title: 'Masthead Title'
  subtitle: 'Masthead Subtitle'
  buttons:
    - label: 'Primary Colored Button'
      href: '#'
    - label: 'Accent Colored Button'
      to: 'guide/'
      color: 'accent'
introduction:
  title: 'Introduction Title'
  text: 'Introduction Text'
  cards:
    - title: 'First Card'
      text: 'First Card Text'
    - title: 'Second Card'
      text: 'Second Card Text'
bottom:
  title: 'Bottom Title'
  text: 'Bottom Text'
  buttons:
    - label: 'Bottom Button'
      to: 'guide/'
      color: 'accent'
---
```

### Guide Section `_index.md` 

This is a full front matter configuration of a section's `_index.md` file.

```yaml
---
aliases:
  - "guides"
title: "Guides"
# Section Configuration:
menu:
  main:
    weight: 20
masthead:
  title: 'Masthead Title'
  subtitle: 'Masthead Subtitle'
  buttons:
    - label: 'Primary Colored Button'
      href: '#'
    - label: 'Accent Colored Button'
      to: 'guide/'
      color: 'accent'
bottom:
  title: 'Bottom Title'
  text: 'Bottom Text'
  buttons:
    - label: 'Bottom Button'
      to: 'guide/'
      color: 'accent'
---
```
