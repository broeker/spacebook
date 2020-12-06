---
title: Privacy settings 
date: 2020-11-20
permalink: /privacy/index.html
eleventyNavigation:
  key: Privacy settings
  order: 70 
---
By default, spacebook sites are set up so they will NOT get indexed by search engines or send referrer links to outside sites. There are no ad trackers, tracking cookies, or other nonsense installed. Many use cases for spacebook are semiprivate and not necessarily intended for a larger audience.

## Encryption with Staticrypt

## Security through obscurity

By default your site is hidden from search engines and won't send referrer links but it is not truly secure. Anybody who discovers the link will be able to view the site. You can use the default Netlify site URL for added obscurity (which typically includes gibberish word and number combos.)

**Additional privacy:**

* You can upgrade your Netlify account for basic sitewide authentication if necessary
* I have a prototype working of a solution using Staticrypt that may come soon 

## Make your site searchable

If you want to open up your site to Google and other search engines, simply remove the **robots.txt** file from the root of your project. 

## Remove noreferrer and/or nofollow attributes

Edit the **mdIterator** plugin settings in your .eleventy.js configuration file to change these settings for external links.