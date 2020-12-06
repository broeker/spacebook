---
title: Configuring Netlify CMS 
date: 2020-11-20
permalink: /netlifycms/index.html
eleventyNavigation:
  key: Configure Netlify CMS
  order: 65 
---
[Netlify CMS](https://www.netlifycms.org/) is a very simple user interface that lets you edit and preview your markdown files via a browser-based editor. It is very useful for beginners or anybody who wants an easy interface for managing content.

## Step 1: Enable Netlify CMS in your configuration

Edit your site configuration in ** _data/sites.json" and set **enableNetlifyCMS** to true

Once enabled you will see a small gear icon in the lower right corner of your site that you can use to access your CMS once it is configured.

## Step 2: Enable Netlify identity

* From your Netlify dashboard, enabled Identity via **Site settings > Identity > Enable Identity
* Once enabled, click on **Identity > Services** and then **Enable Git Gateway**

## Step 3: Enable External providers

* Now go to **Identity > Registration > External providers** and then **Add provide**
* Enable Github and/or Google (typically both)
* This will enable both yourself and any collaborators to login directly using their existing accounts
