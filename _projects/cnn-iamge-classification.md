---
layout: page
title: Tissue Image Classification with Vision Transformers and CNNs
description: A deep learning pipeline for tissue image classification, featuring rigorous anomaly filtering, CNN experimentation, and state-of-the-art Vision Transformers (UNI, Phikon).
tags: [Python, PyTorch, Deep Learning, Computer Vision, Transformers, Kaggle]
---

Developed for the second part of the Artificial Neural Networks and Deep Learning (AN2DL) Challenge at Politecnico di Milano, this project focuses on the automated classification of tissue images based on their underlying pathological problem types.

## The Challenge & Data Sanitization
Working with the provided tissue dataset presented bizarre and significant data quality hurdles that required a rigorous preprocessing pipeline before any training could begin.
* **Anomaly Removal:** The raw dataset was corrupted with severe outliers, including anomalous "green blobs" and even completely unrelated "Shrek" images injected into the data. Designing filtering steps to sanitize the dataset was a critical first milestone.
* **Advanced Preprocessing:** Once the dataset was cleaned, various image preprocessing techniques and augmentations were experimented with to standardize the tissue samples, enhance relevant morphological features, and prepare the data for optimal feature extraction.

## Architectural Evolution: From CNNs to Transformers
The core of this project involved a significant architectural pivot after initial experiments fell short of our performance targets.

### 1. The Pretrained CNN Baseline
The initial strategy utilized standard pretrained Convolutional Neural Networks (CNNs). Despite extensive hyperparameter tuning and exploring various preprocessing combinations, these traditional CNN architectures struggled to capture the complex, fine-grained cellular features required to accurately distinguish between the specific tissue problem types, ultimately failing to achieve competitive validation results.

### 2. State-of-the-Art Vision Transformers (UNI & Phikon)
To overcome the limitations of standard CNNs, we re-architected the pipeline to leverage powerful, domain-specific **Vision Transformers**:
* **Specialized Models:** We integrated advanced pretrained transformer models—specifically **UNI** and **Phikon** (state-of-the-art foundation models highly optimized for computational pathology and tissue-level feature extraction).
* **The Breakthrough:** By shifting from the local spatial convolutions of CNNs to the global self-attention mechanisms of these specialized transformers, the network was finally able to establish meaningful contexts across the tissue slides. This pivot completely turned the project around, leading to vastly improved classification accuracy and robust final predictions on the test set.

> **Repository:** [View on GitHub](https://github.com/Andrik146/AN2DL-II-Fantastici-4-Part-2) (Private for now)