---
title: Understanding ordering
date: 2020-11-20
permalink: /tips-and-tricks/ordering/index.html
toc: true
eleventyNavigation:
  key: Understanding ordering
  order: 45 
  parent: Tips & Tricks
---
Both the primary menu and the in-page navigation rely on the **order** setting in the frontmatter for each of your pages. 

## Homepage

Your homepage is set to **order: 0** which will put it at the top of your global navigation.

```
---
title: Home
date: 2020-11-20
permalink: /
eleventyNavigation:
  order: 0 👈 this determines your menu structure!
  key: Home 
---
```

## Other pages

If you do not have a hierarchical structure and are simply showing a list of top-level pages, ordering is simple. All pages will appear in order from lowest to highest. All pages and subpages are displayed using this order scheme. 

## Hierarchical pages

With a hierarchical structure that includes parent and child pages, it is important to note that all pages must follow a strict order throughout the hierarchy. For example, here is a typical structure:

```
title: Home
key: Home
order: 0 👈

title: Page one
key: Page one
order: 10 👈

  title: Subpage one
  key: Subpage one
  parent: Page one
  order: 20 👈

  title: Subpage two
  key: Subpage two
  parent: Page one
  order: 30 👈

title: Page two
key: Page two
order: 40 👈

title: Page three
key: Page three
order: 50 👈
```

This structure will result in the correct menu ordering and provide the proper in-page navigation. 

## Ordering tips

::: callout
**Did you know?** It is wise to leave some space between your ordering as you set up your initial page structure as per the example above. This will help you avoid having to changing all of your order settings whenever you want to add a new page into your existing structure!
:::

## Remove from navigation

::: callout
**Did you know?** If you want to create a page that does NOT appear anywhere in your menu navigation, simply remove the entire *eleventyNavigation* from your frontmatter. The page will be available for direct links but will not appear in your menu.
:::