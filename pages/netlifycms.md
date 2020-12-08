---
title: Enabling Netlify CMS 😎 
date: 2020-11-20
permalink: /netlifycms/index.html
eleventyNavigation:
  key: Enabling Netlify CMS 
  order: 60
  parent: Advanced settings 
---
[Netlify CMS](https://www.netlifycms.org/) is a simple user interface that lets you add, edit, and preview your markdown files via a browser-based editor. It is very useful for beginners or anybody who wants an easy interface for managing content.

## Step 1: Enable Netlify CMS in your configuration

Edit your site configuration in **_data/sites.json** and set **enableNetlifyCMS** to true

```
{
  ...
  "enableNetlifyCMS": true 👈 set this to true!
  ...
}

```

Once enabled, you will see a small gear icon in the lower right corner of your site that you can use to access your CMS once it is configured.

## Step 2: Enable Netlify identity

* From your Netlify dashboard, enabled Identity via **Site settings > Identity > Enable Identity**
* Once enabled, click on **Identity > Services** and then **Enable Git Gateway**

## Step 3: Enable Netlify External providers

* Now go to **Identity > Registration > External providers** and then **Add provider**
* Enable Github and/or Google (typically both)
* This will enable both yourself and any collaborators to login directly using existing accounts

## Step 4: Set your Netlify site to invite only

Unless you want to open access (not advised), you will want to set your CMS to invite only. Go to **Site settings > Registration > Registration preferences** and click "Edit settings" to change to invite only

## Step 5: Login and edit content

You should now be able to login into your Netlify CMS by clicking the gear link in the footer, or by visting https://yoursite.netlify.app/_admin_

::: callout
**Did you know?** In my experience, when you login via Netlify Identity it will confirm your login but will **also show the login button again** as if you did not just authenticate. Click it again and you should see your CMS. Sometimes Netlify identity is a little wonky to set up but once in place works fine.
:::

## Step 6: Invite other users

You can invite other users to your CMS by visting **Identity > Invite users** from the top navigation bar 
