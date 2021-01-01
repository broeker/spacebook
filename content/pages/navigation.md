---
title: Navigation layout 
date: 2020-11-20
permalink: /advanced/navigation/index.html
eleventyNavigation:
  key: Navigation layout 
  order: 58
  parent: Advanced settings 
---

Depending on the amount of pages you have and the type of content you create, it may make sense to have a horizontal navigation bar across the top of your site instead of the default vertical sidebar navigation. You can easily switch between the two options by changing your **_data/site.json** configuration file:


## Vertical navigation (default)

```
"navigationStyle": "vertical"
```
{% image "vertical.png" "Vertical nav" "600px" %}

## Horizontal navigation

```
"navigationStyle": "horizontal"
```

{% image "horizontal.png" "Horizontal nav" "600px" %}

### Content considerations

If you choose vertical navigation and have hierarchical navigation with chile pages, note that your top-level parent pages will only serve as a navigation mechanism. Clicking or tapping on a parent menu link will open a menu for the child pages, but there is no way for a user to visit the parent page itself directly.