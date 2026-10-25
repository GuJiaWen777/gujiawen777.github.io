---
title: 迁移学习
description: Fine-tuning、Multitask Learning、Domain-adversarial training、Zero-shot Learning 与 Self-taught Clustering。
category: 机器学习
tags:
  - Transfer Learning
  - Fine-tuning
  - Meta-Learning
---

在机器学习、深度学习和数据挖掘的大多数任务中，我们都会假设 training 和 inference 时，采用的数据服从相同的分布（distribution）、来源于相同的特征空间（feature space）。但在现实应用中，这个假设很难成立，往往遇到一些问题：

1. **带标记的训练样本数量有限**。比如，处理 A 领域（target domain）的分类问题时，缺少足够的训练样本。同时，与 A 领域相关的 B（source domain）领域，拥有大量的训练样本，但 B 领域与 A 领域处于不同的特征空间或样本服从不同的分布。
2. **数据分布会发生变化**。比如，数据分布与时间、地点或其他动态因素相关。随着动态因素的变化，数据分布会发生变化，以前收集的数据已经过时，需要重新收集数据，重建模型。

这时，知识迁移（knowledge transfer）是一个不错的选择，即把 B 领域中的知识迁移到 A 领域中来，提高 A 领域分类效果，**不需要花大量时间**去标注 A 领域数据。迁移学习，作为一种新的学习范式，被提出用于解决这个问题。

## Fine-tuning

- 任务描述
  - 目标数据：很少
  - 源数据：很多
- 例子：语言辨识
  - 目标数据：少量音频数据和特定用户（例如：中文）
  - 源数据：大量音频数据和特定用户（例如：英文）
- 处理方式：通过源数据训练模型，当作初始值，然后训练目标数据
  - 挑战：因为目标数据少，所以小心防止过拟合

### 防止过拟合技巧

**Conservative Training**（保守学习）：训练目标数据的时候，训练完成后新 model 和旧 model 相差不大

- 加一种 regularization：新 model 和旧 model 在看到同一笔 data 的时候他们的 output 越接近越好
- 新 model 和旧 model 的 L2 norm 差距越小越好

**Layer Transfer**：只训练某几层的参数，其余参数迁移冻结

- 哪些层的参数可以被迁移
  - 语音：通常迁移最后几层（语音可以看成：声音讯号 → 发音方式 → 辨识结果；通常声音讯号 → 发音方式人和人不一样，发音方式 → 辨识结果跟人无关。）
  - 图像：通常迁移前面几层（前几层通常检测最简单的图案，比如检测直线、横线或者简单的几何图形；最后几层学习到比较抽象无法迁移。）

## Multitask Learning

> 同时在源数据领域和目标数据领域的效果好。

**几乎所有的语言都可以迁移。**

## Domain-adversarial Training

- 任务描述
  - 目标数据：测试数据
  - 源数据：训练数据
  - 目标数据和源数据非常不匹配
- 例子：图像辨识
  - 目标数据：MNIST-M（无标签）
  - 源数据：MNIST

通常网络模型的前面几层可以看作是在抽 feature，后面几层可以看作是在做 classification，把 feature 做可视化，发现不同领域的数据，他们的 feature 完全不一样。

- 处理方式：抽特征时，消除领域特性（不同领域的 feature 不应该明显分开，应该混合在一起）
  - 在 feature extractor 后面接一个 domain classifier，区分抽取的特征属于哪一个领域（消除领域特性：不管看到哪个特征都视为同一领域）
  - feature extractor 输出的 feature 需要同时骗过 domain classifier 还要让 label predictor 做的好

## Zero-shot Learning

- 任务描述
  - 目标数据：测试数据
  - 源数据：训练数据
  - 目标数据和源数据是不同的任务
- 例子：图像辨识
  - 目标数据：其他动物（无标签）
  - 源数据：猫狗
- 语音处理方式：（不可能在训练集上有所有的单词数据）
  - 解决方法：不直接辨识那一段声音属于哪一个 word，辨识声音属于哪一个 phoneme（音标），再做一个 phoneme 跟 word 之间对应关系的表（lexicon：词典），辨识的时候只需要辨识出 phoneme，再根据 phoneme 查表找到对应 word。
- 图像处理方式：
  - 解决方法：class（类别）用 attributes（特征）表示；辨识图像具备怎样的 attributes，然后查表看与哪个类别的 attributes 最接近就属于哪一类。
  - 对应表：可以将每个类的 word2vec 后的向量作为该类别的 attributes。

- Attribute embedding：attribute 的 dimension 很大，做降维。
- 方法：
  - 相同类别的内积大于该类别与不同类别的最大内积，而且要大于一个边界（margin：k）；把相同类别的距离拉近，把不同类别的距离扩大。
  - Convex Combination of Semantic Embedding

## Self-taught Clustering

- 任务描述
  - 目标数据：测试数据
  - 源数据：训练数据
- 从源数据中学习一个好的特征表示模型（feature extractor）。
- 用这个 feature extractor 在目标数据上抽 feature。
