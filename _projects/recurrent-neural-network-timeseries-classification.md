---
layout: page
title: Time Series Classification with Recurrent Neural Networks
description: A PyTorch-based deep learning framework for classifying time series data, featuring hybrid CNN-RNN architectures, distributed optimization, and ensembling techniques.
tags: [Python, PyTorch, Deep Learning, Time Series, Optuna, Kaggle]
---

Developed for the Artificial Neural Networks and Deep Learning (AN2DL) Challenge at Politecnico di Milano, this project focuses on classifying sequential biomechanical sensor data to predict a subject's pain level (classes: `no_pain`, `low_pain`, `high_pain`).

## The Challenge & Data
The dataset presented significant limitations and challenges: it consisted of only 661 multivariate sequences, each with 160 time steps and 40 initial features.
* **Severe Class Imbalance:** The distribution was highly skewed, with 77% of samples in `no_pain`, 14% in `low_pain`, and only 8% in `high_pain`.
* **Feature Engineering & Noise Reduction:** Exploratory data analysis revealed redundant and constant variables. Features like `joint_30` (constant) and `joint_10` (>90% correlation with `joint_11`) were removed, while other categorical variables were merged into a single binary `n_limbs` feature. The analysis also allowed us to group joints into three macro-groups with distinct statistical behaviors to optimize normalization.

## Neural Architectures & Experimentation
The framework, developed entirely in **PyTorch**, was designed to rapidly test and compare various recurrent topologies, starting from a baseline RNN up to more complex networks.

* **Evaluated Models:** We experimented with vanilla RNN, LSTM, and GRU networks, including their bidirectional variants (biLSTM, biGRU).
* **The Best Architecture:** The best single model was a **biGRU with 3 hidden layers of 100 neurons each**. Generally, GRUs outperformed LSTMs while requiring fewer parameters, and bidirectional variants consistently improved over unidirectional ones.
* **Hybrid & Regularization Techniques:** The code supports integrating a 1D Convolutional (CNN) layer as a feature extractor before the recurrent layers, Attention mechanisms, and using the AdamW optimizer with L1/L2 penalties.

## Distributed Optimization & Imbalance Handling
To maximize accuracy and mitigate overfitting on such a small dataset, the training process was heavily optimized:

* **Hyperparameter Search (Optuna):** We configured a shared search environment using **Optuna**, connected to a MySQL database hosted on AWS. This allowed team members to run parallel trials to optimize parameters like learning rate, dropout, window size, and loss weights.
* **Imbalance Strategies:** Experiments showed that handling the class imbalance was the most critical factor for performance. The combined use of *Weighted Loss*, *Label Smoothing*, *Oversampling*, and *Focal Loss* proved fundamental to achieving competitive results.

## Results
* Starting from a validation F1-score of ~85.00% with the baseline RNN, introducing the biGRU and advanced techniques (like Focal Loss and LR schedulers) brought the single-model score to **96.07%**.
* By implementing an **Ensemble Inference** strategy based on majority voting across different architectures, the final performance reached an **overall F1-score of 0.97**.

> **Repository:** [View on GitHub](https://github.com/Andrik146/AN2DL-I-Fantastici-4-Part-1) (Private for now)