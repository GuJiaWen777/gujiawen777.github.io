/** base 从 Astro 配置推导（用户站为空串），所有内部链接统一走 url() 拼接 */
export const base = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');

/**
 * 生成带 base 的站内链接。
 * 页面以 / 结尾（适配 GitHub Pages 目录式路由）；带扩展名的静态资源不加尾斜杠，否则 404。
 */
export function url(path = '/'): string {
  if (path === '/') return `${base}/`;
  const clean = path.replace(/^\/+|\/+$/g, '');
  if (/\.[a-z0-9]+$/i.test(clean)) return `${base}/${clean}`;
  return `${base}/${clean}/`;
}
