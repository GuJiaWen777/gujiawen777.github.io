export interface Direction {
  icon: string;
  title: string;
  description: string;
  points?: string[];
}

export const researchAreas = [
  'Human Activity Recognition',
  'Domain Generalization',
  'Meta-Learning',
  'Multimodal Learning',
  'LLM Agents',
];

export const directions: Direction[] = [
  {
    icon: '🤖',
    title: 'LLM-Driven Multimodal Sensing Agents',
    description: 'Exploring the synergy between large language models (LLMs) and multimodal sensor data to build context-aware agents.',
    points: [
      'Reason about human activities',
      'Adapt to novel scenarios',
      'Provide personalized assistance',
    ],
  },
  {
    icon: '🔄',
    title: 'Adaptive Continual Learning for HAR',
    description: 'Designing algorithms that enable models to incrementally learn new user behaviors without catastrophic forgetting.',
    points: [
      'Meta-learning approaches',
      'Dynamic memory architectures',
      'Long-term personalization',
    ],
  },
  {
    icon: '🎯',
    title: 'Domain Generalization for Sensor-Based HAR',
    description: 'Enhancing cross-user HAR accuracy through feature-level alignment and disentanglement.',
    points: [
      'Meta-feature alignment',
      'Feature disentanglement',
      'Seasonal style projection',
    ],
  },
];

export interface Project {
  title: string;
  period: string;
  points: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    title: 'Cross-Domain Generalization for Sensor-Based Human Activity Recognition',
    period: 'Jun. 2025',
    points: [
      'Developed a PyTorch-based domain generalization framework integrating meta-learning and feature disentanglement',
      'Validated on multiple public benchmarks, achieving state-of-the-art robustness against distribution shifts',
    ],
    tags: ['PyTorch', 'Meta-Learning', 'HAR'],
  },
  {
    title: 'Lightweight Large Language Model Implementation & Training',
    period: 'Feb. 2026',
    points: [
      'Built a 26M-parameter LLaMA-style LLM from scratch',
      'Implemented core Transformer components (Multi-Head Attention, RMSNorm, RoPE)',
      'Covered pre-training, SFT, LoRA fine-tuning, and vLLM deployment',
    ],
    tags: ['LLM', 'Transformer', 'DPO'],
  },
  {
    title: 'Privacy-Preserving ML Inference via Garbled Circuits',
    period: 'Jun. 2021',
    points: [
      'Led the design of a privacy-preserving neural network inference framework',
      'Combined garbled circuits with PyTorch for secure, high-fidelity inference',
    ],
    tags: ['Privacy-Preserving ML', 'Garbled Circuits'],
  },
];
