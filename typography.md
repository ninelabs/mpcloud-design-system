---
layout: docs
title: Typography
---

# Typography

Approved fonts and type styles for usage in MP Cloud digital products.

----

## Headings

Headings use <a href="https://fonts.google.com/specimen/Nunito">Nunito</a> and range from *72px* for `h1` to *18px* for `h6`. Note that the `h4` and `h5` headings are the same *font-size*, but different styles. The `h4` heading is set to uppercase using `text-transform: uppercase` and is set to be the <a href="/colors.html#primary">Primary color</a>, while the `h5` heading follows the pattern and style from the other headings. This is so we can easily create the emphasis we want in various circumstances.

<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>


```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```
----

### Typical Page Heading

<div class="container">
  <div class="row">
    <div class="col my-5">
      <div class="highlight-bar"></div>
      <h1>This is the headline</h1>
      <p>This is an optional line of text that compliments the heading.</p>
    </div>
  </div>
</div>

```html
<div class="container">
  <div class="row">
    <div class="col my-5">
      <div class="highlight-bar"></div>
      <h1>This is the headline</h1>
      <p>This is an optional line of text that compliments the heading.</p>
    </div>
  </div>
</div>
```

----

### The Highlight Bar

When headings `h1`, `h2`, or `h3` are used at the top of a page or the beginning of a new section of content you should include the Highlight Bar above the `hx` element. The bar automatically resizes to 18% of the heading's container width, with a minimum width of 90px.

*Note: The Highlight Bar is not to be used with `h4`, `h5`, or `h6` level headings.*

<div class="highlight-bar"></div>
<h2>This is the Title of a Content Section</h2>

```html
<div class="highlight-bar"></div>
<h2>This is a Title</h2>
```

----

## Body Copy

All other text is set in <a href="https://fonts.google.com/specimen/Merriweather">Merriweather</a> at *18px* with a `line-height` of *1.5rem*.

----
### Paragraphs

Every day is taco ipsum tuesday. Carne asada on corn tortillas. Give me all the tacos, immediately. Flour or corn tortillas? Shrimp tacos are tasty tacos! BARBACOA!! It’s a wonderful morning for breakfast tacos. Can you put some peppers and onions on that? Josh’s taco shack is the best taco shack. CARNE ASADA!! Um, Tabasco? No thanks, do you have any Cholula? How bout a gosh darn quesadilla? It’s taco Tuesday Monday. Josh’s taco shack is the best taco shack. Does guac cost extra? Pico de gallo, on the side please

----
### Quotes

We use “smart” (curly) quotes, instead of "dumb" (straight) quotes. “Smart” quotes improve readability by making it obvious where the quote begins and ends - "dumb" quotes do not. Be smart with ‘single’ and “double” quotes.

**Avoid**

- 'single'
- "double"

**Use**

- ‘single’
- “double”

----
### Blockquote

<blockquote>
  <q>If you think good design is expensive, you should look at the cost of bad design</q>
  <cite>Ralf Speth, CEO Jaguar</cite>
</blockquote>

----
### Lists

- Tacos
- Burritos
- Nachos
- Chips &amp; Salsa
- Guacamole!

----
## Service Details List

This is a special list for Service Detail pages which uses Definition Lists to display information about our services.

<dl class="service-details">
  <dt>Cost:</dt><dd>$2,700</dd>
  <dt>Payment Terms:</dt><dd>Prepaid with a credit card before the sessions begin.</dd>
  <dt>Location:</dt><dd>Sessions can be held remotely from anywhere in the world.</dd>
  <dt>Duration:</dt><dd>From start to finish, expect this to take at least 1 week, subject to availability of your team.</dd>
  <dt>Scheduling:</dt><dd>We can usually begin within a few business days.</dd>
  <dt>Participation:</dt><dd>Critical leaders and decision makers from your team must participate in the video conferences.</dd>
  <dt>Deliverables:</dt><dd>Across the video conference calls and several emails you will get:
    <ul>
      <li>Industry leading guidance through the entire process</li>
      <li>Clear and concise recommendations for your note taking</li>
      <li><strong>Target Market Map</strong> in a high-resolution PDF</li>
      <li><strong>Value Proposition Map</strong> in a high-resolution PDF</li>
      <li><strong>Video recordings</strong> of all the work sessions</li>
    </ul>
  </dd>
</dl>


```html
<dl class="service-details">
  <dt>Cost:</dt><dd>$2,700</dd>
  <dt>Payment Terms:</dt><dd>Prepaid with a credit card before the sessions begin.</dd>
  <dt>Location:</dt><dd>Sessions can be held remotely from anywhere in the world.</dd>
  <dt>Duration:</dt><dd>From start to finish, expect this to take at least 1 week, subject to availability of your team.</dd>
  <dt>Scheduling:</dt><dd>We can usually begin within a few business days.</dd>
  <dt>Participation:</dt><dd>Critical leaders and decision makers from your team must participate in the video conferences.</dd>
  <dt>Deliverables:</dt><dd>Across the video conference calls and several emails you will get:
    <ul>
      <li>Industry leading guidance through the entire process</li>
      <li>Clear and concise recommendations for your note taking</li>
      <li><strong>Target Market Map</strong> in a high-resolution PDF</li>
      <li><strong>Value Proposition Map</strong> in a high-resolution PDF</li>
      <li><strong>Video recordings</strong> of all the work sessions</li>
    </ul>
  </dd>
</dl>
```
