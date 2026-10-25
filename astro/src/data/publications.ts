export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: string;
  status: 'published' | 'under-review';
  tags: string[];
  links?: { label: string; href: string }[];
}

/** 加新论文：在数组最上面加一项即可，首页/ Publications / CV 三处都会自动更新 */
export const publications: Publication[] = [
  {
    title:
      'Generalizable Sensor-Based Human Activity Recognition via Seasonal Style Projection and Trend Feature Disentanglement',
    authors: ['Jianguo Pan', 'Jiawen Gu', 'Shunye Wang', 'Yewei Zhou', 'Peichi Zhou', 'Yuan Yang*'],
    venue: 'IEEE International Conference on Multimedia and Expo (ICME 2026)',
    year: '2026',
    status: 'published',
    tags: ['Domain Generalization', 'HAR'],
    // links: [
    //   { label: 'PDF', href: '#' },
    //   { label: 'Code', href: '#' },
    //   { label: 'BibTeX', href: '#' },
    // ],
  },
  {
    title: 'Generalizable Sensor-Based Activity Recognition via Meta-Feature Alignment',
    authors: ['Jianguo Pan', 'Jiawen Gu', 'Lingdun Zhang', 'Shunye Wang', 'Peichi Zhou', 'Yuan Yang*'],
    venue: 'IEEE Transactions on Emerging Topics in Computational Intelligence (TETCI)',
    year: '2025',
    status: 'under-review',
    tags: ['Meta-Learning', 'Domain Generalization'],
  },
];
