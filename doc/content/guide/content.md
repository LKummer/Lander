+++
title = "Content Management"
date = "2020-03-05"
description = "Content structure and front matter options."
categories = [
    "User Guides"
]
+++

For the best experience, content should be structured and configured according to
this guide.

## Sections

All section list pages in the theme are rendered the same way. All section pages
are rendered without pagination, sorted by category.

You can read more about customizing section list pages in the
[Section Customization with Front Matter]({{< ref "/guide/front-matter-customization" >}})
guide.

## Section Content Pages

The front matter options available for section content pages are:

The `title` option used as the title of the page.

```toml
title = "Content Management"
```

The `description` option, used for list rendering and SEO.

```toml
description = "Content structure and front matter options."
```

The `categories` option, used for sorting on list pages. Each page must have
either one or no category in order for the list rendering to work correctly.

```toml
categories = [
    "User Guides"
]
```

To wrap it up, an example page front matter:

```toml
+++
title = "Content Management"
description = "Content structure and front matter options."
categories = [
    "User Guides"
]
+++
```
