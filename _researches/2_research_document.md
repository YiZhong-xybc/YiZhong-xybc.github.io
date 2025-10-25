---
layout: page
title: MCTS-Enhanced Actor-Critic Algorithm
description: (2024.7-2025.3)
img: assets/img/mcts_cover.jpg
importance: 2
category: 2022-2025
related_publications: false
---

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

**Key Contributions**

- **Policy and Value Network Guided MCTS**: The Actor network provides prior probabilities through a PUCT tree policy, while the Critic network directly evaluates leaf nodes using temporal difference calculations, eliminating the need for costly random rollouts.

- **Simulated Experience Learning**: A novel loss function that leverages Q-value estimates obtained during MCTS exploration helps the Critic network form more accurate state value estimates by incorporating information about suboptimal actions that planning explores but doesn't execute.

- **Search Ratio Scheduling**: A progressive increase of MCTS influence (ρ) during training balances exploration in early stages with exploitation in later stages, enabling faster convergence while avoiding local optima.

<div class="row">
    <div class="col-sm-8 col-md-6 mx-auto">
        {% include figure.liquid loading="eager" path="assets/img/mcts_result.jpg" title="algorithm results" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    some results
</div>

Compared with baseline methods, the proposed algorithm achieves higher cumulative rewards while reducing sample usage by 25%.
