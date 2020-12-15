---
title: Editing content
date: 2020-11-20
permalink: /tips-and-tricks/editing/index.html
toc: true
eleventyNavigation:
  key: Editing content
  order: 25
  parent: Tips & Tricks
---
All of the content in your spacebook is managed with [simple markdown files](/markdown) that are easy to create and customize. There are three basic ways you can edit and update your spacebook content. They can be used interchangeably. 

## Edit directly on Github 

You can edit your markdown files in the **pages** folder directly on Github using their edit tools. When you add or commit a file change to your main branch it will automatically deploy to Netlify. This is a very fast and easy way to make changes from anywhere with only your browser or your phone.  

::: callout
**Did you know?** By default there is an **edit button** that appears on each page of your spacebook that is linked directly to its edit screen on Github. This means that external or internal collaborators can submit pull requests or make edits to any page depending on your permissions. You can disable this button in **site.json** by setting **enableEditButton** to false.
:::

## Edit locally

You can also clone your repository and edit your local markdown files directly in a text editor of your choice, and push those changes back to Github. This can be nice if you are used to writing markdown locally or want the experience of an advanced markdown editor with automatic previews, syntax highlights, and other features.

## Edit using Netlify CMS

You can also configure the optional [Netlify CMS integration](/netlifycms) to enable a fast and easy CMS that will let you manage your content with a WYSIWYG editor and automatic formatting previews. When you publish a page in Netlify CMS, it is automatically committed back to your Github repository and then published to Netlify.
