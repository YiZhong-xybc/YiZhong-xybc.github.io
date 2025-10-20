---
layout: about
title: about
permalink: /
subtitle:

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <span style="font-family:'PingFang SC','Microsoft YaHei',sans-serif;
                color:#444;font-size:15px">
      <strong>email</strong>: zhongyi@cau.edu.cn
    </span>
    
    <a href="/assets/pdf/cv.pdf" target="_blank">download CV</a>

selected_papers: false # includes a list of papers marked as "selected={true}"
social: True # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: false # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: false # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

Hello, I'm Zhong Yi.

I am currently a senior undergraduate student majoring in Electronic Information Engineering at China Agricultural University. I will begin pursuing my Ph.D. at Tongji University in fall 2026.

My research interests lie in **reinforcement learning** and **autonomous driving**. In particular, I am fascinated by the intersection of control, robotics, and artificial intelligence, and how these fields converge to enable intelligent autonomous systems.

I am eager to explore challenging problems in autonomous decision-making and contribute to advancing the state of the art in these areas.

<div style="margin-top: 10rem;"></div>

---

## Research experience

<div class="row row-cols-1 row-cols-md-2">
  {% assign sorted_researches = site.researches | sort: "importance" %}
  {% for research in sorted_researches limit:3 %}
    <div class="col mb-3">
      <a href="{% if research.redirect %}{{ research.redirect }}{% else %}{{ research.url | relative_url }}{% endif %}">
        <div class="card h-100 hoverable" style="height: 550px;">
          {% if research.img %}
            <div style="height: 300px; overflow: hidden;">
              {%
                include figure.liquid
                loading="eager"
                path=research.img
                sizes = "200px"
                alt="research thumbnail"
                class="card-img-top"
                style="height: 200px; object-fit: cover; width: 100%;"
              %}
            </div>
          {% endif %}
          <div class="card-body d-flex flex-column" style="padding: 1rem;">
            <h5 class="card-title" style="font-size: 1rem; margin-bottom: 0.5rem;">{{ research.title }}</h5>
            <p class="card-text flex-grow-1" style="font-size: 0.85rem; line-height: 1.4;">{{ research.description }}</p>
            <div class="row ml-1 mr-1 p-0">
              {% if research.github %}
                <div class="github-icon">
                  <div class="icon" data-toggle="tooltip" title="Code Repository">
                    <a href="{{ research.github }}"><i class="fa-brands fa-github gh-icon"></i></a>
                  </div>
                  {% if research.github_stars %}
                    <span class="stars" data-toggle="tooltip" title="GitHub Stars">
                      <i class="fa-solid fa-star"></i>
                      <span id="{{ research.github_stars }}-stars"></span>
                    </span>
                  {% endif %}
                </div>
              {% endif %}
            </div>
          </div>
        </div>
      </a>
    </div>
  {% endfor %}
</div>

<div style="margin-top: 2rem;"></div>

---

## Selected Projects

<div class="row row-cols-1 row-cols-md-3">
  {% assign sorted_projects = site.projects | sort: "importance" %}
  {% for project in sorted_projects limit:3 %}
    <div class="col mb-3">
      <a href="{% if project.redirect %}{{ project.redirect }}{% else %}{{ project.url | relative_url }}{% endif %}">
        <div class="card h-100 hoverable" style="height: 300px;">
          {% if project.img %}
            <div style="height: 200px; overflow: hidden;">
              {%
                include figure.liquid
                loading="eager"
                path=project.img
                sizes = "200px"
                alt="project thumbnail"
                class="card-img-top"
                style="height: 200px; object-fit: cover; width: 100%;"
              %}
            </div>
          {% endif %}
          <div class="card-body d-flex flex-column" style="padding: 1rem;">
            <h5 class="card-title" style="font-size: 1rem; margin-bottom: 0.5rem;">{{ project.title }}</h5>
            <p class="card-text flex-grow-1" style="font-size: 0.85rem; line-height: 1.4;">{{ project.description }}</p>
            <div class="row ml-1 mr-1 p-0">
              {% if project.github %}
                <div class="github-icon">
                  <div class="icon" data-toggle="tooltip" title="Code Repository">
                    <a href="{{ project.github }}"><i class="fa-brands fa-github gh-icon"></i></a>
                  </div>
                  {% if project.github_stars %}
                    <span class="stars" data-toggle="tooltip" title="GitHub Stars">
                      <i class="fa-solid fa-star"></i>
                      <span id="{{ project.github_stars }}-stars"></span>
                    </span>
                  {% endif %}
                </div>
              {% endif %}
            </div>
          </div>
        </div>
      </a>
    </div>
  {% endfor %}
</div>

<div style="margin-bottom: 5rem;"></div>
