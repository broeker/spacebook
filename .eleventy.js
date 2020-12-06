const { DateTime } = require("luxon");
const CleanCSS = require("clean-css");
const UglifyJS = require("uglify-es");
const htmlmin = require("html-minifier");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const svgContents = require("eleventy-plugin-svg-contents");
const mdIterator = require('markdown-it-for-inline')
const embedEverything = require("eleventy-plugin-embed-everything");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(svgContents); 
  eleventyConfig.addPlugin(embedEverything);
  eleventyConfig.addShortcode("version", function () {
    return String(Date.now());
  });

  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/alpine.js": "./js/alpine.js",
  });

  eleventyConfig.addWatchTarget("./_tmp/style.css");

  eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });

  // Eleventy Navigation https://www.11ty.dev/docs/plugins/navigation/
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Configuration API: use eleventyConfig.addLayoutAlias(from, to) to add
  // layout aliases! Say you have a bunch of existing content using
  // layout: post. If you don’t want to rewrite all of those values, just map
  // post to a new file like this:
  // eleventyConfig.addLayoutAlias("post", "layouts/my_new_post_layout.njk");

  // Merge data instead of overriding
  // https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true);

  // Add support for maintenance-free post authors
  // Adds an authors collection using the author key in our post frontmatter
  // Thanks to @pdehaan: https://github.com/pdehaan
  // eleventyConfig.addCollection("authors", collection => {
  //   const blogs = collection.getFilteredByGlob("posts/*.md");
  //   return blogs.reduce((coll, post) => {
  //     const author = post.data.author;
  //     if (!author) {
  //       return coll;
  //     }
  //     if (!coll.hasOwnProperty(author)) {
  //       coll[author] = [];
  //     }
  //     coll[author].push(post.data);
  //     return coll;
  //   }, {});
  // });

   // Creates custom collection "pages"
   eleventyConfig.addCollection("pages", function(collection) {
    return collection.getFilteredByGlob("pages/*.md");
   });

   // Search collection
   const searchFilter = require("./filters/searchFilter");
   eleventyConfig.addFilter("search", searchFilter);
   eleventyConfig.addCollection("results", collection => {
    return [...collection.getFilteredByGlob("pages/*.md")];
   });
  
   eleventyConfig.addCollection("menuItems", collection =>
    collection
      .getAll()
      .filter(function(item) {
        return "eleventyNavigation" in item.data;
      })
      .sort((a, b) => {
        return (a.data.eleventyNavigation.order || 0) - (b.data.eleventyNavigation.order || 0);
      })
  );


  // Date formatting (human readable)
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("LLL dd, yyyy");
  });

  // Date formatting (machine readable)
  eleventyConfig.addFilter("machineDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
  });

  // Minify CSS
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Minify JS
  eleventyConfig.addFilter("jsmin", function(code) {
    let minified = UglifyJS.minify(code);
    if (minified.error) {
      console.log("UglifyJS error: ", minified.error);
      return code;
    }
    return minified.code;
  });

  // Minify HTML output
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (outputPath.indexOf(".html") > -1) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });

  // Don't process folders with static assets e.g. images
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("static/img");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("_includes/assets/");

  /* Markdown Plugins */
  let markdownIt = require("markdown-it");
  let markdownItAnchor = require("markdown-it-anchor");
  let markdownItEmoji = require("markdown-it-emoji");
  let markdownItFootnote = require("markdown-it-footnote");
  let markdownItContainer = require("markdown-it-container");
  let markdownLinkifyImages = require('markdown-it-linkify-images')
  let markdownToc = require('markdown-it-table-of-contents')
  let markdownItTasks = require('markdown-it-task-lists')
  let markdownItAttrs = require("markdown-it-attrs")
  let markdownItCenterText = require("markdown-it-center-text")
  let options = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  };
  let opts = {
    // permalink: true,
    // permalinkClass: "direct-link",
    // permalinkSymbol: "#"
  };

  eleventyConfig.setLibrary("md", markdownIt(options)
    .use(mdIterator, 'url_new_win', 'link_open', function (tokens, idx) {
      const [attrName, href] = tokens[idx].attrs.find(attr => attr[0] === 'href')
      if (href && (!href.includes('franknoirot.co') && !href.startsWith('/') && !href.startsWith('#'))) {
        tokens[idx].attrPush([ 'target', '_blank' ])
        tokens[idx].attrPush([ 'rel', 'noopener noreferrer' ])
      }
    })
    .use(markdownItAnchor, opts)
    .use(markdownItEmoji)
    .use(markdownItFootnote)
    .use(markdownToc)
    .use(markdownItContainer, 'callout')
    .use(markdownItContainer, 'alert')
    .use(markdownItTasks)
    .use(markdownItCenterText)
    .use(markdownLinkifyImages, {
      imgClass: "p-8",
    })
    .use(markdownItAttrs, {
      includeLevel: [2,3],
      listType: "ol"
    })
  );

  return {
    templateFormats: ["md", "njk", "html", "liquid"],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about it.
    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for URLs (it does not affect your file structure)
    pathPrefix: "/",

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
