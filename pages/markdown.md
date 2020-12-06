---
title: Spacebook markdown
date: 2020-11-20
permalink: /markdown/index.html
eleventyNavigation:
  key: Spacebook markdown 
  order: 50 
---
Spacebook uses Markdown (specifically [Markdown-it](https://github.com/markdown-it/markdown-it)), which is a simple markup language designed for long form writing and prose. This is a simple example page to demonstrate some common markdown scenarios and to demonstrate the built-in typography (thank you to the _.prose_ class and the designers behind [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin)). 

Once you have your own spacebook site you can delete or replace this lovely page. 🌞

## Structured text and headers

Use headers and subheaders to structure your text, along with lists, blockquotes, images, and embeds. You can **place emphasis** on text by using bold tags, or _simple italics to get your point across_ or to otherwise emphasis your text. Headings 1-4 will drop progressively in size while Headings 5-6 will simply render as small, unbolded text. 


### A picture is worth a thousand words 

You can drop images, diagrams, or illustrations anywhere in your content. Images are automatically set to 100% width and centered with a subtle border hover. We use the **markdown-it-linkify-images** plugin to automatically generate a link to a full-size version of the image for larger charts or graphs.

![Sagan](https://res.cloudinary.com/broeker/image/upload/w_1000,c_scale/v1606111412/sagan_tczrlj.jpg)

->_Carl Sagan, 1987_<-

## Take charge of your images

You are responsible for your image sizing and optimization, and should upload the smallest useful version of your image. If you want to add smaller images than the one above, resize to your desired dimensions and add it to the page:

![Astronaut](https://res.cloudinary.com/broeker/image/upload/w_300,c_scale/v1606078324/samples/photo-1454789548928-9efd52dc4031_e0fe5s.jpg)

->_Astronaut_<-


If you don't want to worry about image resizing or optimization, youu can use a [free Cloudinary account](https://cloudinary.com/) to handle your image sizing on the fly in the cloud and serve it from a global CDN such as this example above. Using this method, you can simply upload full res versions of your files to Cloudinary, and then serve them with your desired transformations.

## Convey useful information in lists

Hundreds of thousands hearts of the stars bits of moving fluff dispassionate extraterrestrial observer rich in mystery Drake Equation?

* carbon in our apple pies
* questions stirred by starlight
* distant epochs and great turbulent clouds
*  the only home we've ever known

 Tingling of the spine descended from astronomers courage of our questions stirred by starlight inconspicuous motes of rock and gas two ghostly white figures in coveralls and helmets are softly dancing.

## Share code samples

Here is an example code block of silly code filled with that attempts to explain life, the universe, and everything:

<!-- ``` js
/* Life, the Universe, and Everything */

var 🌍 = function () {
    var result = '', len = arguments.length, args = Array.prototype.reverse.call(arguments), value;
    while(len--) {
        value = args[len];
        if(value !== 42) {
            result += value + ' ';
        }
    }

    return result;
};

zero lines of Javascript. 🕹️
``` -->

## Add footnotes for additional info or references

Gathered by gravity Flatland across the centuries made in the interiors of collapsing stars ship of the imagination circumnavigated. White dwarf emerged into consciousness venture citizens of distant epochs prime number finite but unbounded.[^first] Billions upon billions globular star cluster encyclopaedia galactica tingling of the spine citizens of distant epochs billions upon billions? The carbon in our apple pies with pretty stories for which there's little good evidence concept of the number one with pretty stories for which there's little good evidence courage of our questions Drake Equation.[^second]

## Use blockquotes to callout text

> The cosmos (UK: /ˈkɒzmɒs/, US: /-moʊs/) is the Universe. Using the word cosmos rather than the word universe implies viewing the universe as a complex and orderly system or entity; the opposite of chaos.

<!-- ## Embed all the things

You can easily embed Youtube videos, Tweets, and any other embeddable content. Use these judiciously; even this tiny Youtube embed has a notable effect on page performance scores:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/MrZ4197C1I0?start=10" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

## Custom callouts

Use a special syntax to insert a callout box like this one within the flow of your text. Similar but different than a block quote, this could be used to call out an important point or warning.

::: callout 
*Callout: here be dragons*
:::

An alert: 

::: alert 
*Alert: here be dragons*
:::

## Solar System Exploration, 1950s – 1960s

- [ ] Mercury
- [x] Venus
- [x] Earth (Orbit/Moon)
- [x] Mars
- [x] Jupiter
- [ ] Saturn
- [ ] Uranus
- [ ] Neptune
- [ ] Comet Haley

## Tables

You can create simple table to layout data in columns will headers and rows.

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine engine number nine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. 

## Go crazy with HTML and Tailwind

With simple HTML and Tailwind (or Alpine.js) utility classes, you are free to embed basically any layout or custom design elements directly into your page or post. Requires basic HTML knowledge and learning how to apply Tailwind classes.

<div class="flex space-x-4">
  <div class="flex-1 p-4 bg-blue-50 rounded">
    <!-- Will grow and shrink as needed without taking initial size into account -->
  Some
  </div>
  <div class="flex-1 p-4 bg-blue-100 rounded">
  custom 
    <!-- Will grow and shrink as needed without taking initial size into account -->
  </div>
  <div class="flex-1 p-4 bg-blue-200 rounded">
  html
    <!-- Will grow and shrink as needed without taking initial size into account -->
  </div>
</div>

Note: you can't intermingle markdown with your HTML and this isn't necessarily recommended, but it does mean that if you are an HTML wizard you can insert just about anything into your markdown.

### Footnotes

[^first]: Footnotes **can have markup** and multiple paragraphs.
[^second]: Footnote text