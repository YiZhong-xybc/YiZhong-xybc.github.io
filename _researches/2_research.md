---
layout: page
title: MCTS-Enhanced Actor-Critic Algorithm
description: Deep reinforcement learning algorithm combining Monte Carlo Tree Search with Actor-Critic framework
img: assets/img/mcts_cover.jpg
importance: 2
category: 2022-2025
related_publications: false
---

## Research Content

This research proposes a deep reinforcement learning algorithm that integrates Monte Carlo Tree Search (MCTS) with the Actor-Critic framework. By combining model-based planning with model-free reinforcement learning, the algorithm improves sample efficiency for path planning tasks.

A simulated experience-enhanced Critic network update method and a dynamic search ratio adjustment mechanism are designed to reduce extrapolation error and balance exploration and exploitation.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mcts_cover.jpg" title="algorithm results" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    MCTS-AC framework
</div>

## somde results

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mcts_result.jpg" title="algorithm results" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    MCTS-AC framework
</div>

Compared with baseline methods, the proposed algorithm achieves higher cumulative rewards while reducing sample usage by 25%.
