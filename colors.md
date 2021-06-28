---
layout: docs
title: Color
---

# Colors

Approved colors for use in MP Cloud digital and printed products.

To make quick use of these colors in Sketch, you can download the [Global Palette](/assets/Brand-Colors.sketchpalette), which uses the [Sketch Palettes Plugin](https://github.com/andrewfiorillo/sketch-palettes).

All of these colors can be used with text and background color utility classes by adding the Sass variable name (e.g. `$mp-blue`) to the utility class name using the standard patterns.

Class name examples: text color (`.text-mp-blue`), background color (`.bg-mp-blue`)

{% for group in site.data.colors %}
<h2 id="{{ group.name | downcase | url_encode }}">{{ group.name }}</h2>
  {% for color in group.colors %}
  {% unless group.name == "Grayscale" %}
  <h3 id="{{ color.name | downcase }}">{{ color.name }}</h3>
  <div class="row">
    <div class="col col-12 mb-5">
      <div class="color-demo bg-{{ color.Sass }}"></div>
      <small>
      Hex: <code>{{ color.Hex }}</code>
      RGB: <code>{{ color.RGB }}</code>
      HSL: <code>{{ color.HSL }}</code>
      Pantone: <code>{{ color.Pantone }}</code>
      Sass: <code>${{ color.Sass }}</code>
      </small>
    </div>
  </div>
  {% endunless %}
  <div class="row">
    {% for shade in color.shades %}
    <div class="col col-3 mb-5">
      <div class="color-demo bg-{{ shade.Sass }}"></div>
      <p><strong>{{ shade.name }}</strong></p>
      <small>
      Hex: <code>{{ shade.Hex }}</code> <br>
      RGB: <code>{{ shade.RGB }}</code> <br>
      HSL: <code>{{ shade.HSL }}</code> <br>
      Pantone: <code>{{ shade.Pantone }}</code> <br>
      Sass: <code>${{ shade.Sass }}</code> <br>
      </small>
    </div>
    {% endfor %}
  </div>
  {% endfor %}
{% endfor %}
