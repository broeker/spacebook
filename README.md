# Spacebook

 Create your own spacebook exactly like this one and customize it to your needs. Spacebooks are speedy to set up, free, and 100% open source. 🔥 

* **Easy to use** 😀 -- add a new page and it appears magically in your navigation 
* **Writing focused** ❤️ -- beautiful typography and a minimalist design managed with easy-to-use Markdown
* **Speedy and accessible** 🚀 -- static files, system fonts, minimal JavaScript, purge and minify All the Things, fully responsive, accessible to all
* **Flexible** 💪 -- disable features you don't need, add advanced features with serverless functions or Alpine.js

Communicators and learners from [Da Vinci](https://en.wikipedia.org/wiki/Leonardo_da_Vinci) and [Darwin](https://en.wikipedia.org/wiki/Charles_Darwin) to [Grace Hopper](https://en.wikipedia.org/wiki/Grace_Hopper) and [Ida Tarbell](https://en.wikipedia.org/wiki/Ida_Tarbell) are famous for their use of notebooks, illustrations, and the written word to explain complex ideas. Spacebooks are modern notebooks you can use to create documentation, sketch out new ideas, or whatever suits your fancy.

- - -


##  Launch a new spacebook now 🙋

You can launch your own spacebook and deploy it to the cloud on Netlify with the click of a button. You'll need a existing [Github account](https://github.com/) and a [Netlify account](https://www.netlify.com/) (which you  can create during this process if you wish):

<div class="flex width-full  justify-center">
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/broeker/spacebook"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>
</div>

Once complete, your new spacebook will be available immediately on Netlify and ready for customization and automatic deploys from your shiny new Github repository 👍 

---

## 🤠 Whoa, slow down Tex! 

What even is this? Spacebooks are created using: 

* [Eleventy](https://www.11ty.io) a super fast Node-based static site generator that stays out of your way and lets you ship only what you want to ship 🚀
* [Tailwind 2.0](https://tailwindcss.com/) a brilliant and tiny utility-first CSS framework ([Tailwind Typography](https://tailwindcss.com/docs/typography-plugin) included) 🎨
* [Alpine.js](https://github.com/alpinejs/alpine) a minimal utility-first framework for simple or advanced JavaScript 🕹️
* [Elasticlunr](http://elasticlunr.com/) a lightweight full-text search engine 🔍
* [Advanced Markdown-it support](https://github.com/markdown-it/markdown-it) with footnotes, custom containers, emoji support, tables, task lists, and auto-linked images ✏️ 
* [Netlify](https://www.netlify.com/) for one-click installs, easy form support, free hosting, and an automated [Github](https://github.com/) deployment pipepline 🤖
* [Netlify CMS](https://www.netlify.com/) (optional) to provide an easy Markdown editor for creating and changing content with optional [Cloudinary support](https://cloudinary.com/) for advanced image management. 💻

If you wish, you may customize your spacebook or use it as the basis for your creating your own starter. It was built on the [shoulders of giants](https://www.11ty.dev/docs/starter/). 

- - -

## Install spacebook 

In theory, you can launch  a spacebook without ever downloading the code or running your site locally. But if you want to customize your codebase or write your Markdown files in a local editor, you'll want to download and install your site locally. 

### Requirements

You must be running **Node version 12 or higher** due to the Tailwind 2.0 release. I recommend using NVM to easily manage your Node versions if you need to switch back and forth between older versions. 

* [Node](https://nodejs.org/)
* [NVM](https://github.com/nvm-sh/nvm) (optional)

#### To find your current node version:

```
node --version
```

### Step one

Clone a copy of the spacebook repository and name it as you wish:

```
git clone https://github.com/broeker/spacebook my-spacebook
```

*Note: If you've already deployed a spacebook to Netlify, replace the repository URL above to point to your own Github repo that was created when you deployed the site.* 

### Step two

Install the site and run an initial build command:

```
cd my-spacebook 

npm install

npn run build (only necessary the first time!)
```

### Step three

Now spin up your local server to see your site!

```
npm run start
```

This command will start a local server and you'll be able to work on your site with hot reloads and some nice Browsersync features. If you install your site locally without connecting it to Netlify, you can easily do so later by creating a new Netlify site and connecting it to your Github repository. 💥

