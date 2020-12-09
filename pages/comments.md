---
title: Adding comments to your spacebook 🎙️ 

date: 2020-11-20
permalink: /advanced/comments/index.html
eleventyNavigation:
  key: Enabling comments 
  order: 70 
  parent: Advanced settings
---
There are a variety of use cases where you may wish to enable commenting on some or all of your spacebook pages. There are a variety of free and paid solutions, and your spacebook is set up to accommodate whichever comment engine makes the most sense for you. 

## Choosing a comment engine

There are a few ways to go about this depending on your specific needs. There are significant pros and cons to each option:

### Paid options

If you do not want to sell your soul or subject your users to ads and tracking scripts, the best option may be a paid service that respects user privacy: 

* [FastComments](https://fastcomments.com/) -- for the price of a cup of coffee and a tip ($5/month), you can have a robust commenting engine that is privacy first, and user friendly. It supports 1,000,000 page views across multiple domains per month. This is the engine used on spacebook.app. If you have multiple spacebooks and need robust commenting on some or all of your pages across multiple domains it is a perfect solution.

* [Commento](https://commento.io/) -- a similar and more polished looking service, but it costs $10/mo, per domain.

### Free options

* [Utterances](https://utteranc.es/) -- this is a very slick commenting engine that uses Github issues to show comments in realtime. The downside is that it requires all of your users to have a (free) Github account, and it currently **does not offer support for private repos**. If privacy is not a concern, and your users are likely (or willing) to authenticate via their Github account this is a sweet option.

* [Gitalk](https://gitalk.github.io/) -- similar to Utterances with similar limitations.

* [Disqus (free plan)](https://disqus.com/) -- fine and widely used if you don't mind ads, trackers, and bloated code that will destroy your performance scores. And if you are going to pay for good commenting, I would pay for Fastcomments or Commento a hundred times over before choosing Disqus. 

* [Facebook comments](https://developers.facebook.com/docs/plugins/comments/) -- blech.

* [Roll your own](https://www.taniarascia.com/add-comments-to-static-site/) -- If you want get ambitious, you can roll your own comment system using something like a [Netlify/Github-based solution](https://jamstack-comments.netlify.app/) or any other that you self host on a cheap cloud container.

## So you've chosen a comment engine!

Once you've chosen your engine, it is easy to enable comments on your spacebook site on a per-page base. Just follow these simple steps:

### Step 1: Enable comments in _data/sites.json

```
"enableComments": true 👈 set this to true!
```

This will enable the comment code block in your **page.njk** template (see below).

### Step 2: Paste your comment block into page.njk 

All of the solutions above rely on a code block that you can paste anywhere on your site to enable comments. In the case of spacebook, you can simply add your comment code to your **_includes/layouts/page.njk** template. Here is an example using Fastcomments:

```
_includes/layouts/page.njk

<!-- Paste your comment code here! -->
<hr />
<script src="https://cdn.fastcomments.com/js/embed.min.js"></script>
<div id="fastcomments-widget"></div>
<script>
window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
tenantId: '<your-id>'
});
</script>
```

### Step 3: Disable comments where needed

When you enable comments, by default you will see a comment block on ALL of your pages. If you want to disable comments on certain pages, simply add a new line to your frontmatter for that page:

```
---
title: Example 
date: 2020-11-20
permalink: /example/index.html
comments: 0 👈 just add this to disable comments on any page
eleventyNavigation:
  key: Example
  order: 35
---
```

That's it. The company who first offers a generous free tier with an ad/tracking-free service similar to Fastcomments or Commento will make a fortune in the coming years. 🙂 