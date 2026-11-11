export interface NewsItem {
  /** 展示用日期标签，如 "2026.03" 或 "2025" */
  date: string;
  /** 支持 **加粗** 的纯文本（渲染时用 set:html） */
  html: string;
  /** 是否高亮（如论文接收） */
  highlight?: boolean;
}

export const news: NewsItem[] = [
  { date: '2026', html: 'Paper accepted to <strong>ICME 2026</strong>', highlight: true },
  { date: '2025', html: 'First Prize, Shanghai Informatics Society Excellent Achievement Award' },
  { date: '2025', html: 'Second Prize (National), China Graduate Mathematical Modeling Competition' },
];
