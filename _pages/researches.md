---
layout: page
title: researches
permalink: /researches/
description: Here are some of my research works and academic projects.
nav: true
nav_order: 4
display_categories: [2022-2025]
horizontal: false
---

<!-- pages/researches.md -->
<div class="researches">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized researches -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_researches = site.researches | where: "category", category %}
  {% assign sorted_researches = categorized_researches | sort: "importance" %}
  <!-- Generate cards for each research -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for research in sorted_researches %}
      {% include researches_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for research in sorted_researches %}
      {% include researches.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display researches without categories -->

{% assign sorted_researches = site.researches | sort: "importance" %}

  <!-- Generate cards for each research -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for research in sorted_researches %}
      {% include researches_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for research in sorted_researches %}
      {% include researches.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
