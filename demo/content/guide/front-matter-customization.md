+++
title = "Section Customization with Front Matter"
date = "2020-03-05"
description = "Guidance for the customizable sections of the theme."
categories = [
    "User Guides"
]
+++

The root `_index.md` and section `_index.md` files render sections that are
customizable through front matter options.

# Section Options

Some sections are only availbale for certain pages.

Most section options are optional, but it is recommended to fill all sections for
optimal aesthetics.

## Masthead

The `masthead` section is available for both root and section `_index.md` files.

It is the background colored section with large titles right under the navigation.
This is the element users usually see first and it can be used to guide them to
important pages or download links.

```yaml
masthead:
  # `title`, `subtitle` and `buttons` options are all optional.
  title: 'Masthead Title'
  subtitle: 'Masthead Subtitle'
  buttons:
    - label: 'Primary Colored Button'
      # The `href` option is used to link to external URLs.
      # It directly sets the href attribute on the link.
      href: '#'
    - label: 'Accent Colored Button'
      # The `to` option is used to link to internal pages.
      # It finds the URL for the page in the current language.
      to: '/guides'
      # Color is optional and defaults to the primary color.
      color: 'accent'
```

## Introduction

The `introduction` section is only available for the root `_index.md` file.

The introduction section is rendered after the masthead. In list pages it is replaced by a category-sorted list of the section's pages.
This section is used to introduce your project and mention some of it's selling
points.

```yaml
introduction:
  # `title`, `text` and `cards` options are all optional.
  title: 'Introduction Title'
  text: 'Introduction Text'

  cards:
      # Both `title` and `text` options are required for the cards.
    - title: 'First Card'
      text: 'First Card Text'
    - title: 'Second Card'
      text: 'Second Card Text'
```

## Bottom

The `bottom` section is available for both both root and section `_index.md` files.

It is the background colored section at the bottom of the page, right above the
footer. It catches the user's attention after they've finished scrolling and can
be used to direct them to content they might be looking for.

```yaml
bottom:
  # `title`, `text` and `buttons` options are all optional.
  title: 'Bottom Title'
  text: 'Bottom Text'
  # These buttons are rendered exactly like the masthead buttons.
  buttons:
    - label: 'First Button'
      to: '/guides'
      color: 'accent'
```

# Example Configurations

To finish the guide, let's take a look at a couple of full front matter page
configurations.

## Root `_index.md`

This configuration is similar to what is used in this site's root `_index.md`.

```yaml
---
title: 'Home'
menu:
  main:
    weight: 10
# Section Configuration:
masthead:
  title: 'Lander Hugo Theme'
  subtitle: 'Generate landing pages and guidance for your projects.'
  buttons:
    - label: 'Download the Releases'
      href: '#'
    - label: 'See the Guides'
      to: '/guides'
      color: 'accent'
introduction:
  title: 'Create Beautiful Landing Pages for Projects'
  text: >
    Improve the first impression of your project. Ease the learning curve for new
    users. Stop sending people to the readme.
  cards:
    - title: 'Responsively Designed'
      text: >
        Designed from the ground up to work well with any screen size.
    - title: 'Light as a Feather'
      text: >
        Fast for all users at under 50 kB uncompressed including fonts.
bottom:
  title: 'Get Started Today'
  text: 'The guides will help you get up and running as quick as possible.'
  buttons:
    - label: 'See the Guides'
      to: '/guides'
      color: 'accent'
---
```

## Guide Section `_index.md` 

This configuration is similar to what is used in this site's guide section `_index.md`.

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
  title: 'Looking to Get Started?'
  buttons:
    - label: 'See the Quick Start Guide'
      to: '/guide/quickstart'
      color: 'accent'
bottom:
  title: 'Need More Help?'
  text: 'Check out existing Github Issues or open a new one.'
  buttons:
    - label: 'See the Github Issues'
      href: '#'
      color: 'accent'
---
```
