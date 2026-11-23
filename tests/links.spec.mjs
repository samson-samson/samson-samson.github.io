import { expect, test } from '@playwright/test';

test('站内页面、锚点和资源在 Pages 子路径可达', async ({ page, baseURL }) => {
  const start = new URL(baseURL);
  const pages = new Set([start.href]);
  const assets = new Set();
  const anchors = new Set();

  for (const url of pages) {
    const response = await page.goto(url);
    expect(response?.ok(), url).toBe(true);

    const links = await page.locator('a[href], link[href], img[src]').evaluateAll(elements =>
      elements.map(element => ({
        url: element.href ?? element.src,
        pageLink: element.tagName === 'A',
      })),
    );
    for (const link of links) {
      const target = new URL(link.url);
      if (target.origin !== start.origin) continue;

      expect(target.pathname, `从 ${url} 指向 ${target.href}`).toMatch(/^\/preview\//);
      if (target.hash) {
        anchors.add(target.href);
        target.hash = '';
      }
      if (link.pageLink && !/\.[^/]+$/.test(target.pathname)) {
        pages.add(target.href);
      } else {
        assets.add(target.href);
      }
    }
  }

  for (const url of assets) {
    const response = await page.request.get(url);
    expect(response.ok(), url).toBe(true);
  }

  for (const url of anchors) {
    await page.goto(url);
    const id = decodeURIComponent(new URL(url).hash.slice(1));
    expect(await page.evaluate(id => Boolean(document.getElementById(id)), id), url).toBe(true);
  }
});
