---
layout: page
title: researches
permalink: /researches/
description: Here are some of my research works and academic projects.
nav: true
nav_order: 3
display_categories: [2022-2025]
horizontal: false
cols_per_row: 1 # ← 想一行几个就写几
---

<div class="researches">
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
    <a id="{{ category }}" href=".#{{ category }}"><h2 class="category">{{ category }}</h2></a>
    {% assign sorted_researches = site.researches | where:"category",category | sort:"importance" %}
    <div class="row row-cols-1 row-cols-md-{{ page.cols_per_row }}">
      {% for research in sorted_researches %}
        {% include {{ page.horizontal | append: '.liquid' | default: 'researches.liquid' }} %}
      {% endfor %}
    </div>
  {% endfor %}
{% else %}
  {% assign sorted_researches = site.researches | sort:"importance" %}
  <div class="row row-cols-1 row-cols-md-{{ page.cols_per_row }}">
    {% for research in sorted_researches %}
      {% include {{ page.horizontal | append: '.liquid' | default: 'researches.liquid' }} %}
    {% endfor %}
  </div>
{% endif %}
</div>
