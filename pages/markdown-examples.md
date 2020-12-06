---
title: Markdown Examples
date: 2020-11-20
permalink: /markdown-examples/index.html
eleventyNavigation:
  order: 55 
  key: Markdown examples 
  parent: Spacebook markdown
---
This page shows the available Markdown-it formatters available to you with examples. For a few more bits of syntax or plugins that are not covered here see the official [markdown-it demo](https://markdown-it.github.io/).

::: callout 
**Tip:** you can remove this file from your navigation, but keep it around for reference. 
:::

Generally, you should reserve the h1 heading for your primary page title, and this is handled automatically in your templates. In most cases, start your content headings at level h2 (##).

# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

Generally, you should reserve the h1 heading for your primary page title, and this is handled automatically in your templates. In most cases, start your content headings at level h2 (##).

```
# h1 heading
## h2 heading
### h3 heading
#### h4 heading
##### h5 heading
###### h6 heading
```

## Test copy

Culture quasar Sea of Tranquility Drake Equation hundreds of thousands preserve and cherish that pale blue dot. With pretty stories for which there's little good evidence as a patch of light realm of the galaxies cosmic ocean extraordinary claims require extraordinary evidence the ash of stellar alchemy. Hydrogen atoms descended from astronomers rich in mystery Orion's sword hydrogen atoms descended from astronomers.  

<!-- ```
## Test copy

Writing in Markdown is very simple, and designed to get out of your way if you follow its rules. 
``` -->


## Emphasis

**This is bold text**

*This is italic text*

~~Strikethrough~~

There are two method for bold and italic -- again, pick one and stick to it. 

```

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~
```

## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica 

```
[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica 

```

## Horizontal Rules

Horizontal rules are an effective way to break up a page into distinct sections. You can create a horizontal rule by using (3) or more of the following characters on their own line. Pick one system and stick with it, I prefer three short dashes :)

---

```
___

---

***
```

## Typographic replacements

Using typographer plugin.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

Emdash --

"Smartypants, double quotes" and 'single quotes'

```
(c) (C) (r) (R) (tm) (TM) (p) (P) +-

--

"Smartypants, double quotes" and 'single quotes'
```

## Blockquotes

> Venture another world dispassionate extraterrestrial observer preserve and cherish that pale blue dot a billion trillion the ash of stellar alchemy? A still more glorious dawn awaits extraordinary claims require extraordinary evidence paroxysm of global death kindling the energy hidden in matter extraordinary claims require extraordinary evidence bits of moving fluff? 

```
> Blockquotes can also be nested by using additional greater-than signs right next to each other or with spaces between arrows, but I'm not sure why you'd want to do this unless you were quoting a conversation.
```


## Lists

Creating lists or nested lists using one of three characters, and two indents for nested items. Again, pick a syntax and stick to it  :)

* Create a list by starting a line with `+`, `-`, or `*`
* Sub-lists are made by indenting 2 spaces:
  * Marker character change forces new list start:
    * Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    8 Nulla volutpat aliquam velit
* Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

```
* Create a list by starting a line with `+`, `-`, or `*`
* Sub-lists are made by indenting 2 spaces:
  * Marker character change forces new list start:
    * Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    * Nulla volutpat aliquam velit
* Very easy!

Ordered list

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.

```

## Code

There are multiple ways to format code samples.

**Inline code** (single backticks)

Inline `code`  -- this is currently broken in this stack for unknown reasons, it works but should be nicely formatted

**Block code "fences"** (three backticks)

Create a code block fence with three backticks on a single line, followed by your code, followed by three ending backticks on a single line.

```
    ```
    Sample code here...
    ```
Note: this is indented only for demo purposes; code fences should not be indented.

```

You can create also create a code block simply by indenting twice.

    // Entire code block is indented twice 
    line 1 of code
    line 2 of code
    line 3 of code

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

```
| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
```

## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


## Plugins

The killer feature of `markdown-it` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).


### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.


### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O


### [\<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++


### [\<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==


### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.


### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b


### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: callout 
*Callout: here be dragons*
:::


