---
layout: docs
title: Mastheads // Components
---

# Mastheads

A Masthead is a full-width component used at the top of first-level pages.

## Home Page Masthead

This Masthead should only be used on the Home Page or landing pages where you need to have a smaller pre-headline leading into the main headline.

It only contains the `h6` pre-headline, the `h1` main headline, and a background image which is set using an inline `style="background-image:url(...)"` declaration. It *does not include* a paragraph or call-to-action.

{% include _component-masthead-home.html %}

```html
{% include _component-masthead-home.html %}
```

----

## Image Masthead

The Image Masthead includes a background image which is set using an inline `style="background-image:url(...)"` declaration. It includes a `H1` level Heading, a paragraph of text, and an optional Call-to-Action button.

{% include _component-masthead-image.html %}

```html
{% include _component-masthead-image.html %}
```

----

## Default Masthead

The default Masthead includes a `H1` level Heading, a paragraph of text, and an optional Call-to-Action button.

{% include _component-masthead.html %}

```html
{% include _component-masthead.html %}
```

----

## Simple Masthead

The default Masthead includes a `H1` level Heading and a paragraph of text, but does not have any call-to-action.

{% include _component-masthead-simple.html %}

```html
{% include _component-masthead-simple.html %}
```

----

## Article Masthead

For blog articles and white-papers. You'll see it is very similar to the simple masthead, but replaces the paragraph of text with information about the article or white-paper.


{% include _component-masthead-article.html %}

```html
{% include _component-masthead-article.html %}
```
