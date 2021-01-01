---
title: 'Set up your content' 
date: Last Modified
permalink: /getting-started/content/index.htm
toc: true
eleventyNavigation:
  order: 10
  parent: Getting started 
  key: Set up your content 
---
All of your pages and images are stored in a top-level directory called **content**, with a sub-folder for your pages (**content/pages**) and one for your images (**content/images**). When you first install your spacebook, it will contain a default welcome page that you can change or delete. 

::: callout
**Did you know?** The trick to managing a spacebook is a basic understanding of Markdown and how it is used to create an organize your content. Use your editor or the Github UI to examine any one of the files in your pages folder to get the lay of the land. 
:::

## Understanding Frontmatter

Frontmatter is a complicated sounding word for a simple concept. Frontmatter is simply a few lines of configuration that live at the top your markdown files. This configuration tells your page what to do and how to behave. The minimal lines of frontmatter for a spacebook page live at the top of the file in between a block of three dashes like so:

```
---
title: Hello world 
date: 2020-11-20
permalink: /hello/index.html
eleventyNavigation:
  order: 10
  key: Hello 
---
```

* **title** -- this is what shows up at the top of your page as the main H1 header
* **date** -- this is the (optional) last updated date that appears at the top of each page. You can use a standard date format such as **2021-01-31**, or the handy **Last Modified** value (which will automatically update each time you save a commit.)
* **permalink** -- the permalink is used to define the URL for the page. It must follow this format, and end with *index.html*
* **eleventyNavigation** -- this is used to define the menu item for your page, and to tell it where it will appear in the menu hierarchy.
  * **order** -- this determines where your menu appears relative to other menu items (0=first) 
  * **key** -- this is the menu "label" for your and also serves a simple slug or key used to track parent and child pages

## Frontmatter options

There are four additional frontmatter items you can add that will affect how your page behaves, including the ability to create a hierarchy of parent and child pages:

```
---
title: About us 
metaDescription: An override for your page's description metatag 👈 
date: 2020-11-20
permalink: /about/index.html
comments: false 👈
eleventyNavigation:
  order: 10
  key: About us 
  parent: Home 👈
  title: A custom menu title 👈
  
---

```
 * **metaDescription:** -- this can be used to create a custom description metatag on a page-by-page basis. If not present, the global metatag description from **sites.json** is used
 * **comments** -- (opt out) if you have set *enableComments* to true in *site.json* comments will appear on all pages unless you opt out using *comments: false*
* **parent** -- this is used to set up a hierarchy of parent and child pages for your menu system. If you set the *parent* of a given page to match the *key* of another page, it will show up as a child page within the menu system
* **title** -- you add a custom title to change the menu label (useful if you want a short key but a longer menu label)

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

## Mind your spaces and indents

::: callout
**Mind your spaces!** Be sure to add one space after each entry in your frontmatter and to indent properly, or it will cause an error in your build. The nested options under **eleventyNavigation** are indented with exactly two spaces.