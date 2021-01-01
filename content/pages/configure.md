---
title: 'Configure your site' 
date: Last Modified 
permalink: /getting-started/configure/index.html
toc: true
eleventyNavigation:
  order: 5 
  parent: Getting started 
  key: Configure your site 
  title: 'Configure your site'
---
Once you have your spacebook running, your first step is to do some basic configuration to make it your own. All site configuration is stored in a single file located at **_data/site.json**. 

If you have a local copy of your site installed you can edit this file directly, or you can edit and commit the file using the Github UI. The default **site.json** file looks like so: 

```
{
  "name": "Spacebook",
  "subtitle": "Create a modern notebook to document or explain almost anything.",
  "description": "Create a modern notebook to document or explain almost anything with spacebook.app",
  "footer": "<a href='https://spacebook.app'>Made with ❤ in Minneapolis</a>",
  "url": "https://spacebook.app",
  "githubUrl": "https://github.com/broeker/spacebook",
  "githubBranch": "main",
  "navigationStyle": "horizontal",
  "emoji": "💥",
  "enableSearch": true,
  "enableDarkMode": true,
  "enableEditButton": true,
  "enableDatestamp": true,
  "enableGithubLink": true,
  "enableContact": false,
  "enableNetlifyCMS": false,
  "enableComments": false,
  "enableEncryption": false,
  "enablePageNavigation": true
}
```

## Basic settings

When you make changes to this file and deploy them, your site will automically update to reflect your new settings:

* **name** -- this is the name or title of your site as it appears in the header
* **subtitle** *(optional)* -- this is the short subtitle that appears directly below your site name
* **description** -- this is used as your default metadata page description, and can be overridden on a page-by-page basis as needed
* **footer** *(optional)* -- this is the plain text that appears in the bottom footer
* **githubUrl** -- this is the address to your Github repository, used to generate edit links
* **githubBranch** -- this is the main of your primary Github branch (set to "main" by default)
* **navigationStyle** -- you can set your navigation to **horizontal** *(default)*, or **vertical** if you prefer a top navigation bar
* **emoji** *(optional)*  -- this is the emoji used for your favicon 
* **url** -- this is the main URL to your site on Netlify (this is not currently used but seems wise to track in config)


## Enable or disable features

* **enableSearch** -- this will enable or disable the Elasticlunr search engine
* **enableContact** -- enable or disable the Netlify contact form
* **enableDarkMode** -- enable or disable darkmode functionality
* **enableEditButton** -- enable or disable the "edit on Github button"
* **enableDatestamp** -- enable or disable the date stamp that appears on the top of each page
* **enableGithubLink** -- enable or disable the Github link and icon that appears in the footer
* **enableNetlifyCMS** -- enable or disable Netlify CMS (false by default)
* **enableEncryption** -- enable the logout button if you are using encryption (false by default)
* **enablePageNavigation** -- enable or disable the built-in navigation that appears on the bottom of each page
---

::: callout
**Did you know?** If you enable the optional [Netlify CMS integration](/advanced/netlifycms/), all of these settings can also be changed via the CMS.
:::

---

## Basic Netlify configuration

There are probably also a few settings you may wish to change on Netlify:

* You can change your site name and URL to something more personal under **General > Site settings > Site details > Site name** 
* If you leave your contact form enabled, you may wish to set up notifications under **Forms > Form notifications** 
* You may wish to change your deploy settings under **Build & deploy > deploy contexts**
* You may wish to explore other Netlify settings!

Now that you've got your site configured to your wishes you can move on the next step and start working with your content 👍
