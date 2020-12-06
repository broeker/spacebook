---
title: Privacy settings 
date: 2020-11-20
permalink: /privacy/index.html
eleventyNavigation:
  key: Privacy settings
  order: 70 
---
By default, spacebook sites are set up so they will NOT get indexed by search engines or send referrer links to outside sites. This is because many use cases for spacebook are private and not necessarily intended for a larger audience.

## Make your site searchable

If you want to open up your site to Google and other search engines, simply remove the **robots.txt** file from the root of your project. 

## Remove noreferred and/or nofollow attributes

Edit the **mdIterator** plugin settings in your .eleventy.js configuration file to change these settings for external links.