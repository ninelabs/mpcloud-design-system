---
layout: docs
title: Content Sections // Components
---

# Page Template

As the names imply, the Global Header and Global Footer are used by default on every page.


## Global Header

The Global Header is based on the [Bootstrap Navbar]() contains the logo, links to the major pages and content sections, and a button-style link for the contact page.

{% include _component-header.html %}

```html
{% include _component-header.html %}
```

----

## Global Footer

The Global Footer is a four column spread containing links to all the major pages and content sections of the website. It also includes office addresses and contact information.


{% include _component-footer.html %}

```html
{% include _component-footer.html %}
```

----

## Pagination

This component extends the default [Bootstrap Pagination Component](https://getbootstrap.com/docs/4.4/components/pagination/) and adds the Nine Labs style.

{% include _component-pagination.html %}

```html
{% include _component-pagination.html %}
```
