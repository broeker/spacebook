---
title: Privacy settings 
date: 2020-11-20
permalink: /privacy/index.html
eleventyNavigation:
  key: Privacy settings
  order: 70 
---
By default, spacebook sites are set up so they will NOT get indexed by search engines or send referrer links to outside sites. There are no ad trackers, tracking cookies, or other nonsense installed. Many use cases for spacebook are semiprivate and not necessarily intended for a larger audience.

## Level one: Security through obscurity

By default, your site is hidden from search engines and won't send referrer links but it is not truly secure. Anybody who discovers the link will be able to view the site. You can use an obscured Netlify site URL for added protection against accidental discovery. 

## Level two: Encryption

If you wish to you put your site behind a password, you can do so by following the [password protection](/encryption) instructions. This will encrypt all of your files, and require all users to enter a password before viewing. 

## Level three: Basic authentication

 You can upgrade your Netlify account for basic site wide authentication if necessary. It is similar to level two but less rough around the edges and does not use encryption, so there is no page slow down. 


## Make your site searchable

::: callout
If you want to open up your site to Google and other search engines, simply remove the **robots.txt** file from the root of your project. 
:::

## Remove noreferrer and/or nofollow attributes

::: callout 
Edit the **mdIterator** plugin settings in your .eleventy.js configuration file to change these settings for external links.
:::