# Spacebook

[![Netlify Status](https://api.netlify.com/api/v1/badges/707f50ae-80e6-4681-823e-669b69068bae/deploy-status)](https://app.netlify.com/sites/laughing-swartz-36ce3d/deploys)

Create your own spacebook exactly like this one and customize it to your needs. Spacebooks are speedy to set up, free, and 100% open source. 🔥 

* **Easy to use** 😀 -- add a new page and it appears magically in your navigation 
* **Writing focused** ❤️ -- beautiful typography and a minimalist design managed with easy-to-use Markdown
* **Speedy and accessible** 🚀 -- static files, system fonts, minimal JavaScript, purge and minify All the Things, fully responsive, accessible to all
* **Privacy first** 🔒 -- User-agent: * Disallow: / is set by default with noreferrer links; encrypt your full site with a password if desired
* **Flexible** 💪 -- disable features you don't need, add advanced features with serverless functions or Alpine.js

Communicators and learners from [Da Vinci](https://en.wikipedia.org/wiki/Leonardo_da_Vinci) and [Darwin](https://en.wikipedia.org/wiki/Charles_Darwin) to [Grace Hopper](https://en.wikipedia.org/wiki/Grace_Hopper) and [Ida Tarbell](https://en.wikipedia.org/wiki/Ida_Tarbell) are famous for their use of notebooks, illustrations, and the written word to explain complex ideas. Spacebooks are modern notebooks you can use to create documentation, sketch out new ideas, or whatever suits your fancy.

- - -


##  Launch a new spacebook now 🙋

You can launch your own spacebook and deploy it to the cloud on Netlify with the click of a button. You'll need an existing [Github account](https://github.com/) and a [Netlify account](https://www.netlify.com/) (which you  can create during this process if you wish):

<div class="flex width-full  justify-center">
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/broeker/spacebook"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>
</div>

Once complete, your new spacebook will be available immediately on Netlify and ready for customization and automatic deploys from your shiny new Github repository 👍 

---

## 🤠 Whoa, slow down Tex 

What even is this? A spacebook is a simple website generator that will help you create your own project just like this one using:

* [Eleventy](https://www.11ty.io) a super fast Node-based static site generator that stays out of your way and lets you ship only what you want to ship 🚀
* [Tailwind 2.0](https://tailwindcss.com/) a brilliant and tiny utility-first CSS framework ([Tailwind Typography](https://tailwindcss.com/docs/typography-plugin) included) 🎨
* [Alpine.js](https://github.com/alpinejs/alpine) a minimal utility-first framework for simple or advanced JavaScript 🕹️
* [Elasticlunr](http://elasticlunr.com/) a lightweight full-text search engine 🔍
* [Advanced Markdown-it support](https://github.com/markdown-it/markdown-it) with footnotes, custom containers, emoji support, tables, task lists, and auto-linked images ✏️ 
* [Netlify](https://www.netlify.com/) for cloud hosting and one-click installs, easy form support, and an automated [Github](https://github.com/) deployment pipepline 🤖
* [Netlify CMS](https://www.netlify.com/) (optional) to provide an easy Markdown editor for creating and changing content with optional [Cloudinary support](https://cloudinary.com/) for advanced image management. 💻

All of this results in a speedy and accessible website that scores 100s across the board on Google Lighthouse metrics for mobile and desktop: 

![Performance](/static/img/spacebook.png)

::: callout
**Did you know?** If you enable the optional Netlify CMS, you will typically lose 2-3 performance points due to the required loading of the Netlify identity script but this is a pretty swell starting point. 👍
:::

If you wish, you may customize your spacebook or use it as the basis for your creating your own starter. It was built on the [shoulders of giants](/credits). 

- - -

## Who needs a spacebook? 🤔 

A spacebook is for anybody who believes in the [#indieweb](https://indieweb.org/) and wants a simple, modern, and free way to put something on the web that they own and control:

* Writers and thinkers
* Planners and dreamers
* Technical doc writers
* Project managers
* Teachers and students

Anybody who is willing to learn a few simple things can create as many spacebooks as they'd like for any reason in the world.

---

## 👩‍🚀 Install spacebook

In theory, you can launch a spacebook without ever downloading the code or running your site locally. Just click that big green button and edit your files directly on Github! But if you want to customize your codebase or write your Markdown files in a local editor, you'll want to download and install your site locally. 

### Requirements

You must be running **Node version 12 or higher** due to the Tailwind 2.0 release. I recommend using NVM to easily manage your Node versions if you need to switch back and forth between older versions. 

* [Node](https://nodejs.org/)
* [NVM](https://github.com/nvm-sh/nvm) (optional)

#### To find your current node version:

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

*Note: You'll need to remove the existing .git file and add your own upstream repository if you want to use this as a basis for moving forward. You can also simply [fork the repository](https://github.com/broeker/spacebook) directly from Github.* 

### Step two

Install the site and run an initial build command:

```
cd spacebook 

npm install

npn run build (only necessary the first time!)
```

*If you get errors here, double check your node version!*

### Step three

Now spin up your local server to see your site!

```
npm run start
```

This command will start a local server and you'll be able to work on your site with hot reloads and some nice Browsersync features. If you install your site locally without connecting it to Netlify, you can easily do so later by moving your code into its own Github repository, and then creating a new Netlify site connect to that repository. 💥

