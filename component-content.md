---
layout: docs
title: Content Sections // Components
---

# Content Containers


## Article Summary

Article Summaries extend the [Bootstrap Card Component](https://getbootstrap.com/docs/4.4/components/card/) and are intended to be used whenever you want to provide a brief preview of an article (e.g. the Home Page, the Blog Archive, etc.)

{% include _component-blog-article-preview.html %}

```html
{% include _component-blog-article-preview.html %}
```

----

## Topic Containers

This component is meant to be used to provide an overview of a service area or outcome. The text should be limited to about 90 words in no more than three paragraphs. When multiple Topic Containers are used together on a page you should alternate between the default `.topic-container` and `.topic-container-right` so the images will alternate between the left and right side.

### Image Left

{% include _component-topic-container.html %}

```html
{% include _component-topic-container.html %}
```

----

### Image Right

{% include _component-topic-container-right.html %}

```html
{% include _component-topic-container-right.html %}
```

----


## Cross-link Fragments

These are typically used at the bottom of content pages to link to the other major content sections.


### Outcomes

<p>Your customers, your team, and your company need real results. That’s exactly what we deliver.</p>
<a href="/outcomes/" class="btn btn-outline-primary">Outcomes We Produce</a>

```html
<p>Your customers, your team, and your company need real results. That’s exactly what we deliver.</p>
<a href="/outcomes/" class="btn btn-outline-primary">Outcomes We Produce</a>
```

### Services

<p>We thrive on understanding your business, your customers, and how to build products that create real value.</p>
<a href="/services/" class="btn btn-outline-primary">Explore Our Services</a>

```html
<p>We thrive on understanding your business, your customers, and how to build products that create real value.</p>
<a href="/services/" class="btn btn-outline-primary">Explore Our Services</a>

```

### Process

<p>Our proven process builds clarity around what you should do &amp; confidence you’re doing it right.</p>
<a href="/process/" class="btn btn-outline-primary">Discover Our Process</a>

```html
<p>Our proven process builds clarity around what you should do &amp; confidence you’re doing it right.</p>
<a href="/process/" class="btn btn-outline-primary">Discover Our Process</a>
```

### Connect

<p>Ready to talk about your project? Have a question about how we might help? We’d love to hear from you.</p>
<a href="/connect/" class="btn btn-primary">Get In Touch</a>

```html
<p>Ready to talk about your project? Have a question about how we might help? We’d love to hear from you.</p>
<a href="/connect/" class="btn btn-primary">Get In Touch</a>
```
