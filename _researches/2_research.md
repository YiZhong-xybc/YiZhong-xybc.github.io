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

**Motivation**

Model-free reinforcement learning methods like Actor-Critic suffer from low sample efficiency, requiring extensive environmental interactions to learn effective policies. On the other hand, model-based planning methods such as MCTS have high computational costs and can introduce action distribution bias. This research aims to combine the strengths of both approaches: leveraging explicit forward planning from MCTS while maintaining the learning efficiency of neural networks, ultimately reducing both sample complexity and online computational overhead.

**Approach**

This research proposes a novel algorithm that integrates Monte Carlo Tree Search with the Actor-Critic framework for path planning problems. The algorithm uses three interacting policies: π_θ (Actor network) provides prior knowledge for action selection, π_mcts (MCTS planning policy) is guided by both Critic and Actor networks, and π_d (final decision policy) blends the two during training to balance exploration and exploitation.

Two key mechanisms enhance the integration: First, a simulated experience learning method addresses the action distribution bias inherent in planning by leveraging Q-value estimates from MCTS exploration, improving Critic network accuracy even for suboptimal actions. Second, a dynamic search ratio adjustment progressively increases MCTS influence during training (ρ: 0 → 1), allowing broader exploration in early stages while emphasizing high-quality planning in later stages.

**Key Technical Contributions**

- **Policy and Value Network Guided MCTS**: The Actor network provides prior probabilities through a PUCT tree policy, while the Critic network directly evaluates leaf nodes using temporal difference calculations, eliminating the need for costly random rollouts.

- **Simulated Experience Learning**: A novel loss function that leverages Q-value estimates obtained during MCTS exploration helps the Critic network form more accurate state value estimates by incorporating information about suboptimal actions that planning explores but doesn't execute.

- **Search Ratio Scheduling**: A progressive increase of MCTS influence (ρ) during training balances exploration in early stages with exploitation in later stages, enabling faster convergence while avoiding local optima.

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mcts_result.jpg" title="Baseline comparison" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mcts_ablation.jpg" title="Ablation study" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Baseline comparison in 5×5 grid environment showing faster convergence and higher cumulative rewards. Right: Ablation study validating the importance of simulated experience learning and search ratio adjustment.
</div>

**Results**

Compared with baseline methods (pure A2C and pure MCTS), the proposed MCTS-AC algorithm achieves 25% reduction in sample usage while obtaining higher cumulative rewards and faster convergence. Ablation studies confirm that both the simulated experience learning mechanism and search ratio adjustment are crucial for stable learning and optimal performance.

The algorithm demonstrates strong generalization capability across different environments including 5×5 grid worlds, CartPole-v1, and dynamic pursuit-evasion scenarios. Notably, when tested in pursuit-evasion tasks with moving targets (different from the static target training environment), the algorithm maintains robust performance, showing superior adaptability compared to pure A2C.
