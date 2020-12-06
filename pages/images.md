---
title: Working with images 
date: 2020-11-20
permalink: /tips-and-tricks/images/index.html
eleventyNavigation:
  key: Working with images
  order: 30 
  parent: Tips & Tricks
---
You can drop images, diagrams, or illustrations anywhere in your content. Images are automatically set to 100% width and centered with a subtle border hover. All images are automatically wrapped in a link to the full-size version of the image for larger charts or graphs.

* **Add your image to static/img folder** -- you can drop any image into your *static/img* folder and then you will be able to reference it from any of your markdown pages
* **Reference the image in your page** -- once you've added your image  you can reference it from anywhere using the following syntax:

```
![Space](/static/img/space.jpg)
```

![My image](/static/img/space.jpg)

You can also refer to any external image via URL including size Unsplashed images or anywhere you can source an image online:

```
![Space](https://source.unsplash.com/random/300x300)
![Space](https://res.cloudinary.com/broeker/image/upload/w_300,c_scale/v1606078324/samples/photo-1454789548928-9efd52dc4031_e0fe5s.jpg)
```

## Image captions

Your images are centered by default, and there is a special syntax to add a caption directly below your image with centered text:

```
->_Carl Sagan, 1987_<-
```

The matching arrows will center your caption, and the underscores will italicize the caption.


## Important!
You are responsible for your image sizing and optimization, and should upload the smallest useful version of your image. Future version of spacebook will take better advantage of the [Eleventy image plugin](https://github.com/11ty/eleventy-img)




::: callout
**Did you know?** [Cloudinary](https://cloudinary.com/) has a generous free tier and is an easy way to manage your images and media from a global CDN that allows you to perform transformations and optimizations on the fly via URL. You can link to these images natively as per the above example, or you can set Cloudinary to to take over your media library within Netlify CMS.