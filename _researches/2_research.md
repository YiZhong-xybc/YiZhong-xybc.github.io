---
layout: page
title: MCTS-Enhanced Actor-Critic Algorithm
description: A hybrid planning and learning approach for path planning (2024.7-2025.3)
img: assets/img/mcts_cover.jpg
importance: 2
category: 2022-2025
related_publications: false
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mcts_cover.jpg" title="MCTS-AC Framework" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    MCTS-AC framework combining planning and learning
</div>

## Overview

This research proposes a novel deep reinforcement learning algorithm that integrates Monte Carlo Tree Search (MCTS) with the Actor-Critic (A2C) framework for path planning problems. By combining model-based planning with model-free reinforcement learning, the algorithm significantly improves sample efficiency while maintaining robust performance.

## Key Contributions

**1. Policy and Value Network Guided MCTS**
- Actor network provides prior knowledge for action selection through PUCT tree policy
- Critic network directly evaluates leaf nodes, eliminating costly random rollouts
- Temporal difference calculation converts state values to action values efficiently

**2. Simulated Experience Learning**
- Novel loss function leveraging Q-value estimates from MCTS exploration
- Addresses action distribution bias caused by preferential planning
- Improves value function accuracy by incorporating suboptimal action evaluations

**3. Dynamic Search Ratio Adjustment**
- Progressive increase of MCTS influence during training (ρ: 0 → 1)
- Balances exploration in early stages with exploitation in later stages
- Enables better convergence while avoiding local optima

## Experimental Results

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mcts_result.jpg" title="Baseline comparison" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mcts_ablation.jpg" title="Ablation study" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Baseline comparison showing faster convergence and higher returns. Right: Ablation study validating key components.
</div>

**Performance Highlights:**
- **25% reduction in sample usage** compared to pure A2C
- **Faster convergence** with more stable training dynamics
- **Superior generalization** demonstrated in pursuit-evasion scenarios with moving targets
- Validated across multiple environments: 5×5 grid world, CartPole-v1, and dynamic pursuit tasks

## Technical Details

The algorithm maintains three policies:
- **π_θ**: Actor network providing initial policy and prior knowledge
- **π_mcts**: Planning policy guided by MCTS with critic and actor networks
- **π_d**: Final decision policy blending π_θ and π_mcts during training

During execution, the algorithm uses off-policy actor-critic updates with importance sampling to handle the distribution mismatch between behavior policy (π_d) and target policy (π_θ).

---

*Supervised by Prof. [Name] at [Institution]*