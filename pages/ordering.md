---
title: Understanding ordering 
date: 2020-11-20
permalink: /tips-and-tricks/ordering/index.html
eleventyNavigation:
  key: Understanding ordering
  order: 45 
  parent: Tips & Tricks
---
Both the primary menu and the in-page navigation rely on the "order" setting in the frontmatter for each of your pages: 

```
---
title: Home
date: 2020-11-20
permalink: /
eleventyNavigation:
  order: 0 👈
  key: Home 
---
```

Your spacebook homepage is set to **order: 0** which puts at the top of the list. The page with the next highest order will appear next in menu and as the "next page" in the inline navigation. 

::: callout
**Tip:** If you want to create a page that does NOT appear anywhere in your menu navigation, simply remove the entire *eleventyNavigation* from your frontmatter. The page will be available for direct links but will not appear in your menu.
:::


## Hierarchical pages

If you do not have a hierarchical structure and are simply showing a list of top-level pages, ordering is simple. With a hierarchical structure that includes parent and child pages, it is important to note that all pages must follow a strict order throughout the hierarchy. For example, here is a simplified example of a typical structure:

```
title: Home
key: Home
order: 0

title: Page one
key: Page one
order: 5 

  title: Subpage one
  key: Subpage one
  parent: Page one
  order: 10

  title: Subpage two
  key: Subpage two
  parent: Page one
  order: 15

title: Page two
key: Page two
order: 20

title: Page three
key: Page three
order: 25
```

This structure will result in the correct menu ordering and provide the proper in-page navigation. 

::: callout
**Tip:** For this reason, it is wise to leave some space between your ordering as you set up your initial page structure as per the example above. This will help you avoid having to changing all of your order settings whenever you want to add a new page. For larger sites, you could start interval of 10 to be safe.
:::