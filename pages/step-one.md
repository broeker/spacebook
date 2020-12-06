---
title: 'Step 1: Configure your spacebook' 
date: 2020-11-20
permalink: /getting-started/step-one/index.html
eleventyNavigation:
  order: 5
  parent: Home
  key: Step one 
  title: 'Step 1: Configure your site'
---
Once you have your spacebook running, your first step is to do some basic configuration to make it your own. All site configuration is stored in a single file located at **_data/site.json**. If you have a local copy of your site installed you can edit this file directly, or you can edit and commit the file using the Github UI. The default site.json file looks like so: 

```
{
  "name": "Spacebook",
  "subtitle": "Create fast and simple documentation to explain almost anything.",
  "description": "A simple document generator based on Eleventy, Tailwind 2.0, and Alpine.js",
  "footer": "Made with ❤️️ in Minneapolis",
  "emoji": "💥️️",
  "url": "https://spacebook.netlify.app",
  "githubUrl": "https://github.com/broeker/spacebook/",
  "githubBranch": "main",
  "enableSearch": true,
  "enableContact": true,
  "enableDarkMode": true,
  "enableEditButton": true,
  "enableGithubLink": true,
  "enableNetlifyCMS": false,
}
```

::: callout
Note: If you enable the optional Netlify CMS integration, all of these settings can also be changed via the CMS.
:::

## Basic settings

When you make changes to this file and deploy them your site will automically update to reflect your new settings:

* **Name** -- this is the name or title of your site as it appears in the header
* **Subtitle** -- this is the short subtitle that appears directly below your site name (optional)
* **Description** -- this is used as your default metadata page description and can be overridden on a page-by-page basis as needed
* **Footer** -- this is the plain text that appears in the bottom footer (optional)
* **Emoji** -- this is the emoji used in the site header and as a favicon (optional)
* **URL** -- this is the main URL to your site on Netlify
* **githubUrl** -- this is the address to your Github repository, used to generate edit links
* **githubBranch** -- this is the main of your primary Github branch (set to "main" by default)

## Enable or disable features

* **enableSearch** -- this will enable or disable the Elasticlunr search engine
* **enableContact** -- enable or disable the Netlify contact form
* **enableDarkMode** -- enable or disable darkmode functionality
* **enableEditButton** -- enable or disable the "edit on Github button"
* **enableGithubLink** -- enable or disable the link to your Github repo in the footer
* **enableNetlifyCMS** -- enable or disable Netlify CMS (set to false by default)

Now that you've got your site configured to your wishes you can move on the next step and start working with your content 👍