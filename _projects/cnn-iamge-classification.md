---
layout: page
title: Tissue Image Classification with Vision Transformers
description: A deep learning pipeline for histological image classification, featuring complex data sanitization, ROI extraction, and the use of Vision Transformers (Phikon) combined with CatBoost.
tags: [Python, PyTorch, Deep Learning, Computer Vision, Transformers, CatBoost, Kaggle]
---

# Tissue Image Classification with Vision Transformers

Developed for the second part of the Artificial Neural Networks and Deep Learning (AN2DL) Challenge at Politecnico di Milano, this project tackles the automated classification of pathological tissue images into four categories: Luminal A, Luminal B, HER2(+), and Triple negative.

## The Challenge & Data Quality
The provided dataset, consisting of 691 images, presented significant obstacles that made direct model training impossible:
* **Extreme Resolutions:** Images had highly variable dimensions (from $3924\times1024$ to $1024\times4233$ pixels) with non-uniform aspect ratios.
* **Class Imbalance:** The "Triple negative" class was severely underrepresented (11.1%) compared to the others.
* **Bizarre Artifacts (Data Sanitization):** The raw dataset contained severe anomalies, including "green blobs" (marker artifacts) and even completely out-of-distribution (OOD) images, such as frames from the movie "Shrek". We developed a custom Python script based on color analysis and JSON dictionaries to completely filter out OOD images and exclude tiles containing markers.

## Preprocessing & ROI Extraction
Since standard CNNs require fixed-size inputs, simple resizing would destroy critical cellular morphological details.
The solution was to implement a **Tiling and ROI Extraction** algorithm: leveraging the provided binary masks, the code identifies the connected components of the diseased tissue and extracts tiles at native resolution (e.g., 256x256), discarding empty or background-dominated areas. We also tested histology-specific normalization techniques, such as *Macenko stain normalization*.

## Architectural Evolution
The core of the project involved a major architectural paradigm shift to overcome the limitations of convolutional networks.

### 1. The Failure of CNNs and MIL
Initially, we tested pre-trained CNN architectures (ResNet, EfficientNet) and *Multiple Instance Learning* (MIL) approaches with Attention mechanisms. However, data scarcity and high intra-class variability caused these models to generalize poorly, leading to heavy overfitting on the validation sets.

### 2. The Breakthrough: ViT Foundation Models + Boosting
To solve this, the architecture was split into a two-stage pipeline (Feature Extraction + Classification):
* **Feature Extraction (Phikon):** Instead of a CNN, we employed **Phikon**, a powerful *Vision Transformer (ViT)* trained with DINO on a massive dataset of histological images (TCGA). This model was used to extract high-dimensional vectors from the tiles, keeping the weights frozen, as fine-tuning caused performance degradation due to the small dataset size.
* **Classification (CatBoost):** The tile embeddings were aggregated to create a slide-level descriptor. While classifiers like XGBoost proved too aggressive (leading to "extreme overfitting"), **CatBoost** provided the necessary regularization thanks to its symmetric trees. CatBoost hyperparameters (Learning Rate, Tree Depth, L2 Leaf Reg) were optimized using **Optuna**.

## 📈 Results
By combining Transformer-based feature extraction, robust classification with CatBoost, and *Test-Time Augmentation (TTA)* to stabilize predictions, the final model outperformed pure convolutional architectures, achieving an F1-score of ~0.41 on the test set.

> **Repository:** [View on GitHub](https://github.com/Andrik146/AN2DL-I-Fantastici-4-Part-2) (Private for now)