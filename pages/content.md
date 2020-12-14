---
title: 'Set up your content' 
date: 2020-11-20
permalink: /getting-started/content/index.htm
toc: true
eleventyNavigation:
  order: 10
  parent: Home
  key: Set up your content 
---
All of your content pages are stored in a single top-level directory called **pages** and if you look inside this folder, you will see the sample pages that are part of your spacebook.

You can edit and change any of the sample files, or remove them and create your own. 

The trick to managing a spacebook is a basic understanding of Markdown and how it is used. Use your editor or the Github UI to examine any one of the files in your pages folder to get the lay of the land. 

## Understanding Frontmatter

Frontmatter is a complicated sounding word for a simple concept. Frontmatter is simply a few lines of configuration that live at the top your markdown files. This configuration tells your page what to do and how to behave. The minimal lines of frontmatter for a spacebook page live at the top of the file in between a block of three dashes like so:

```
---
title: About us 
date: 2020-11-20
permalink: /about/index.html
eleventyNavigation:
  order: 10
  key: About us 
---
```

* **title** -- this is what shows up at the top of your page as the main H1 header
* **date** -- this is the published or last updated date that appears at the top of each page
* **permalink** -- the permalink is used to define the URL for the page. It must follow this format and end with *index.html*
* **eleventyNavigation** -- this is used to define the menu item for your page, and to tell it where it will appear in the menu hierarchy.
  * **order** -- this determines where your menu appears relative to other menu items (0=first) 
  * **key** -- this is the menu "label" for your and also serves a simple slug or key used to track parent and child pages

 
:::

## Frontmatter options

There are five additional frontmatter items you can add that will affect how your page behaves, including the ability to create a hierarchy of parent and child pages:

```
---
title: About us 
metaDescription: An override for your page's description metatag 👈 
date: 2020-11-20
permalink: /about/index.html
toc: true 👈
comments: false 👈
eleventyNavigation:
  order: 10
  key: About us 
  title: A custom menu title 👈
  parent: Home 👈
---

```

* **metaDescription:** -- this can be used to create a custom description metatag on a page-by-page basis. If not present, the global metatag description from **sites.json** is used.
* **toc** -- if you have set *enableTOC* to true in *site.json*, you can add **toc: true** to any page to display an inline Table of Contents on wide screens
* **comments** -- if you have set *enableComments* to true in *site.json* comments will appear on all pages unless you opt out using **comments: false**
* **title** -- you add a custom title to change the menu label (useful if you want a short key but a longer menu label) 
* **parent** -- this is used to set up a hierarchy of parent and child pages for your menu system. If you set the **parent** of a given page to match the **key** of another page, it will show up as a child page within the menu system.

::: callout
**Did you know?:** If you enable the optional [Netlify CMS integration](/netlifycms), all of these frontmatter settings can be changed via the CMS.
:::

## Adding your content 

Once you understand frontmatter, you can begin adding or editing your content using simple markdown. Anything that appears directly below your frontmatter will appear as the main body of your page, like so:

```
---
title: About us 
date: 2020-11-20
permalink: /about/index.html
eleventyNavigation:
  order: 10
  key: About us 
---
This is my content! 👈

```

Your content can include all sorts of [markdown tags](/markdown) and you can organize and structure it however it makes the most sense to you. It is best to use consistent formatting techniques throughout your pages to keep them looking good. 

If you are working locally, you should be seeing all of your changes as you work and if you are editing your Github files directly or using Netlify CMS your changes will appear as soon as the site builds and finishes its deploy. 👍

## Mind your spaces

::: callout
**Mind your spaces!** Be sure to add one space after each entry in your frontmatter or it will cause an error in your build. The nested options under **eleventyNavigation** are indented with exactly two spaces.