---
title: Getting started
date: 2020-11-20
permalink: /
toc: true
eleventyNavigation:
  key: Home
  title: Getting started
  order: 0
---

Create your own spacebook exactly like this one and customize it to your needs. Spacebooks are speedy to set up, free, and 100% open source.

- **Easy to use** 😀 -- add a new page and it appears magically in your navigation, make edits right from your phone
- **Writing focused** ❤️ -- beautiful typography and a minimalist design managed with easy-to-use Markdown
- **Speedy and accessible** 🚀 -- static files, responsive system fonts, minimal JavaScript, purge and minify All the Things, accessible to all people and devices
- **Privacy first** 🔒 -- User-agent: \* Disallow: / is set by default with noreferrer set on all links; encrypt your full site with a password if desired
- **Flexible** 💪 -- disable features you don't need, add advanced features with serverless functions or Alpine.js

Spacebooks are modern notebooks you can use to create documentation, sketch out new ideas, or whatever suits your fancy. 

---

## Launch a new spacebook

You can launch your own spacebook and deploy it to the cloud on Netlify with the click of a button. You'll need an existing [Github account](https://github.com/) and a [Netlify account](https://www.netlify.com/) (which you can create during this process if you wish): 


<div class="flex width-full justify-center">
<a class="bg-green-700 hover:bg-blue-600 text-white no-underline mb-4 px-4 py-2 rounded" href="https://app.netlify.com/start/deploy?repository=https://github.com/broeker/spacebook">Deploy to Netlify!</a>
</div>

This process will automatically copy the spacebook repository to your own personal Github account. Once complete, your new spacebook will be automatically deployed on Netlify and ready for customization. 👍

---

## What is a spacebook? 

A spacebook is a simple website generator that will help you create your own project just like this one using a bunch of cool, modern, and fast technology:

- [Eleventy](https://www.11ty.io) a super fast Node-based static site generator that stays out of your way and lets you ship only what you want to ship 🚀
- [Tailwind 2.0](https://tailwindcss.com/) a brilliant and tiny utility-first CSS framework 🎨
- [Alpine.js](https://github.com/alpinejs/alpine) a minimal utility-first framework for simple or advanced JavaScript 🕹️
- [Elasticlunr](http://elasticlunr.com/) a lightweight full-text search engine 🔍
- [Advanced Markdown-it support](https://github.com/markdown-it/markdown-it) with footnotes, custom containers, emoji support, tables, task lists, and auto-linked images ✏️
- [Netlify](https://www.netlify.com/) for cloud hosting and one-click installs, easy form support, and an automated [Github](https://github.com/) deployment pipepline 🤖
- [Netlify CMS](https://www.netlify.com/) (optional) to provide an easy Markdown editor for creating and changing content with optional [Cloudinary support](https://cloudinary.com/) for advanced image management. 💻

Don't worry; you don't need to know or understand any of this to launch a spacebook but it results in a speedy, easy-to-use, and accessible website that typically scores 100s across the board on Google Lighthouse metrics for mobile and desktop:
 

![Performance](/static/img/spacebook.png)

::: callout
**Did you know?** If you enable the optional Netlify CMS or add an analytics script, you may lose 1-3 performance points but this is a pretty swell starting point. 👍
:::

If you wish, you may customize your spacebook or use it as the basis for your creating your own starter. It was built on the [shoulders of giants](/credits).

---

## Who needs a spacebook?

A spacebook is for anybody who believes in the [#indieweb](https://indieweb.org/) and wants a simple, modern, and free way to put a notebook-like thing on the web that they own and control:

- Writers and thinkers
- Planners and dreamers
- Technical doc writers
- Project managers
- Teachers and students

Anybody who is willing to learn a few simple things can create as many spacebooks as they'd like for any reason in the world.

---

## Install spacebook

In theory, you can launch a spacebook without ever downloading the code or running your site locally. Just click that big green button and edit your files directly on Github! (The Github UI is fairly mobile friendly, and it is entirely possible to launch and manage a spacebook entirely via your phone :))  

But if you want to customize your codebase or write your Markdown files in a local editor, you'll want to download and install your site locally.

### Requirements

You must be running **Node version 12 or higher** due to the Tailwind 2.0 release. I recommend using NVM to easily manage your Node versions if you need to switch back and forth between older versions.

- [Node](https://nodejs.org/)
- [NVM](https://github.com/nvm-sh/nvm) (optional)

**To find your current node version:**

```
node --version
```

### Step one

If already have a Github repository from a Netlify install, simply clone a copy of your new repository:

```
git clone https://github.com/<your-username>/<your-repository>
```

If you just want to try this out locally, you can clone the Spacebook repository directly:

```
git clone https://github.com/broeker/spacebook
```

_Note: If you choose the second option, you'll need to remove the existing .git folder and add your own upstream repository if you want to use this as a basis for moving forward. You can also simply copy or [fork the repository](https://github.com/broeker/spacebook) directly from Github._

### Step two

Install the site and run an initial build command:

```
cd spacebook

npm install

npm run build (only necessary the first time!)
```

_If you get errors here, double check your node version!_

### Step three

Now spin up your local server to see your site!

```
npm run start
```

This command will start a local server and you'll be able to work on your site with hot reloads and some nice Browsersync features. If you install your site locally without connecting it to Netlify, you can easily do so later by moving your code into its own Github repository, and then creating a new Netlify site connected to that repository. 💥
