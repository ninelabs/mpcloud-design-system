---
layout: docs
title: Buttons // Components
---


# Buttons

The `.btn` classes are designed to be used with the `<button>` element. However, you can also use these classes on `<a>` or `<input>` elements (though some browsers may apply a slightly different rendering).

When using button classes on `<a>` elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a `role="button"` to appropriately convey their purpose to assistive technologies such as screen readers. See [Bootstrap&rsquo;s Button Docs](https://getbootstrap.com/docs/4.4/components/buttons/) for more info.

### MP Cloud Technologies
#### Primary Button

<button class="btn btn-mpcloud btn-mpcloud-lg" type="submit" aria-label="Label">Label</button>
<button class="btn btn-mpcloud" type="submit" aria-label="Label">Label</button>

```html
<button class="btn btn-mpcloud btn-mpcloud-lg" type="submit" aria-label="Label">Label</button>
<button class="btn btn-mpcloud" type="submit" aria-label="Label">Label</button>
```

----

#### Single Tag

<a href="#" class="btn tag-mpcloud" aria-label="Topic">Topic</a>

```html
<a href="#" class="btn tag-mpcloud" aria-label="Topic">Topic</a>
```

----

#### Multiple Tags

<a href="#" class="btn tag-mpcloud" aria-label="Topic">Topic</a>
<a href="#" class="btn tag-mpcloud" aria-label="Topic">Topic</a>
<a href="#" class="btn tag-mpcloud" aria-label="Topic">Long Topic</a>
<a href="#" class="btn tag-mpcloud" aria-label="Topic">Topic</a>
<a href="#" class="btn tag-mpcloud" aria-label="Topic">Topic</a>
<a href="#" class="btn tag-mpcloud" aria-label="Topic">Longer Topic</a>
<a href="#" class="btn tag-mpcloud" aria-label="Topic">Topic</a>
<a href="#" class="btn tag-mpcloud" aria-label="Topic">Topic</a>
<a href="#" class="btn tag-mpcloud" aria-label="Topic">Topic</a>
<a href="#" class="btn tag-mpcloud" aria-label="Topic">Longer Topic</a>

```html
<a href="#" class="btn tag-mpcloud" aria-label="Topic">Topic</a>
<a href="#" class="btn tag-mpcloud" aria-label="Topic">Topic</a>
<a href="#" class="btn tag-mpcloud" aria-label="Topic">Long Topic</a>
<a href="#" class="btn tag-mpcloud" aria-label="Topic">Topic</a>
<a href="#" class="btn tag-mpcloud" aria-label="Topic">Topic</a>
<a href="#" class="btn tag-mpcloud" aria-label="Topic">Longer Topic</a>
<a href="#" class="btn tag-mpcloud" aria-label="Topic">Topic</a>
<a href="#" class="btn tag-mpcloud" aria-label="Topic">Topic</a>
<a href="#" class="btn tag-mpcloud" aria-label="Topic">Topic</a>
<a href="#" class="btn tag-mpcloud" aria-label="Topic">Longer Topic</a>
```

----

#### Leading Content Block Buttons

<div id="MPCloudLeadingContentCarousel" class="carousel mpcloud-leading-content-carousel slide w-50" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      &nbsp;
    </div>
  </div>
  <a class="carousel-control-prev" href="#MPCloudLeadingContentCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#MPCloudLeadingContentCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

```html
<div id="MPCloudLeadingContentCarousel" class="carousel mpcloud-leading-content-carousel slide w-50" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      &nbsp;
    </div>
  </div>
  <a class="carousel-control-prev" href="#MPCloudLeadingContentCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#MPCloudLeadingContentCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
```

----

### EMTech Billing
#### Primary Button

<button class="btn  btn-emtech btn-emtech-lg" type="submit" aria-label="Label">Label</button>
<button class="btn  btn-emtech" type="submit" aria-label="Label">Label</button>

```html
<button class="btn  btn-emtech btn-emtech-lg" type="submit" aria-label="Label">Label</button>
<button class="btn  btn-emtech" type="submit" aria-label="Label">Label</button>
```

----

#### Secondary Button

<button class="btn btn-emtech btn-emtech-secondary btn-emtech-lg" type="submit" aria-label="Label">Label</button>
<button class="btn btn-emtech btn-emtech-secondary" type="submit" aria-label="Label">Label</button>

```html
<button class="btn btn-emtech btn-emtech-secondary btn-emtech-lg" type="submit" aria-label="Label">Label</button>
<button class="btn btn-emtech btn-emtech-secondary" type="submit" aria-label="Label">Label</button>
```

----

#### Leading Content Block Buttons

<div id="EMTechCarousel" class="carousel emtech-leading-content-carousel slide w-50" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      &nbsp;
    </div>
  </div>
  <a class="carousel-control-prev" href="#EMTechCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#EMTechCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

```html
<div id="EMTechCarousel" class="carousel emtech-leading-content-carousel slide w-50" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      &nbsp;
    </div>
  </div>
  <a class="carousel-control-prev" href="#EMTechCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#EMTechCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
```



<!-- ## Button Elements
<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit" aria-label="Label">Button</button>
<input class="btn btn-primary" type="button" value="Input">
<input class="btn btn-primary" type="submit" value="Submit">
<input class="btn btn-primary" type="reset" value="Reset">

```html
<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit" aria-label="Label">Button</button>
<input class="btn btn-primary" type="button" value="Input">
<input class="btn btn-primary" type="submit" value="Submit">
<input class="btn btn-primary" type="reset" value="Reset">
```


## Default Buttons
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-tertiary">Tertiary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>

```html
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-tertiary">Tertiary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>
```

## Outline Buttons

<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-tertiary">Tertiary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-light">Light</button>
<button type="button" class="btn btn-outline-dark">Dark</button>

```html
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-tertiary">Tertiary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-light">Light</button>
<button type="button" class="btn btn-outline-dark">Dark</button>
``` -->
