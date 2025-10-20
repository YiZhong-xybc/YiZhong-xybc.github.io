---
layout: page
title: Real-time Wheat Stripe-Rust Detector
description: A lightweight YOLOv5-Lite model running on Raspberry Pi 4B
img: assets/img/wheat_detector_photo.jpg
importance: 2
category: 2022-2025
related_publications: false
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/wheat_detector_photo.jpg" title="System hardware setup" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/wheat_realtime_detection.jpg" title="Live camera inference" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: hardware setup; Right: live camera inference.
</div>

Developed a lightweight wheat stripe-rust detector that runs in real time on Raspberry Pi 4B. A YOLOv5-Lite model (ONNX) classifies disease severity from CSI-camera images, streams results via MQTT to Alibaba Cloud IoT, and offers a PyQt GUI for local/remote operation.
