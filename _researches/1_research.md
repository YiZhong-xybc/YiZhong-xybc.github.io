---
layout: page
title: Trajectory Planning for Multi-Vehicle Cooperative Parking
description: (2023.9-2024.6)
img: assets/img/parking_result.jpg
importance: 1
category: 2022-2025
related_publications: false
---

With the gradual commercialization of autonomous parking systems, multi-vehicle cooperative parking will become the trend of unmanned parking lots in the future to further enhance traffic efficiency and safety. This paper aims to address a large-scale multi-vehicle cooperative parking problem in highly constrained parking lots with continuous traffic flows.

**Challenges**

Multi-vehicle trajectory planning(MVTP) faces significant challenges:

- Multiple spatiotemporal constraints
- Inability to handle continuous traffic flow scenarios where vehicles continuously enter and exit
- Lack of feasible initial solutions for optimization algorithms

**Method**

To address these challenges, we introduce:

- An event-triggered grouping strategy that decomposes large-scale multi-vehicle cooperative parking problems into small-scale optimal control sub-problems
- A receding-horizon planning method designed for continuous traffic-flow scenarios

{% raw %}

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    <div class="embed-responsive embed-responsive-16by9 rounded z-depth-1">
        <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=1101319508&bvid=BV1qw4m1o7QX&cid=1460259483&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true">
        </iframe>     
    </div>
  </div>
</div>
{% endraw %}

<div class="caption">
    Simulation demonstration
</div>

Simulation experiments demonstrate that compared with baseline methods, our approach reduces parking delay by 35.8% and improves average driving speed by 24.7%.

**Submitted**  
"A Trajectory Planning Method for Multi-Vehicle Cooperative Parking under Continuous Traffic in Highly Constrained Parking Lots" Han Zheng, Yi Zhong, Yuhao Zhang, Weiwei Kong\*, Fachao Jiang; <em>Automotive Innovation</em>, under review.
