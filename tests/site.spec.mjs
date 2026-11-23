import { expect, test } from '@playwright/test';

test('从首页打开 Vibe Coding 索引并跳转专题', async ({ page }, testInfo) => {
  await page.goto('./');
  await expect(page.getByRole('heading', { name: '读书笔记', exact: true })).toBeVisible();
  const browse = page.getByRole('link', { name: '浏览读书笔记' });
  await expect(browse).toHaveCSS('display', 'inline-flex');
  await expect.poll(() => page.locator('.feature img').evaluate(image => image.naturalWidth)).toBeGreaterThan(0);
  await page.screenshot({ path: testInfo.outputPath('home.png') });

  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: '跳到正文' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#main$/);

  await browse.click();
  await expect(page.getByRole('heading', { name: '读书笔记', exact: true })).toBeVisible();
  await page.getByRole('main').getByRole('link', { name: /Vibe Coding/ }).click();
  await expect(page.getByRole('heading', { name: 'Vibe Coding', exact: true })).toBeVisible();
  await page.getByRole('link', { name: /Oil Book 阅读索引/ }).click();

  const indexTitle = page.getByRole('heading', { name: 'Oil Book 阅读索引' });
  await expect(indexTitle).toBeVisible();
  const titleContrast = await indexTitle.evaluate(title => {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 1;
    const context = canvas.getContext('2d');
    function luminance(color) {
      context.clearRect(0, 0, 1, 1);
      context.fillStyle = color;
      context.fillRect(0, 0, 1, 1);
      const channels = Array.from(context.getImageData(0, 0, 1, 1).data.slice(0, 3), byte => byte / 255);
      const [r, g, b] = channels.map(value =>
        value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4,
      );
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    }
    const text = luminance(getComputedStyle(title).color);
    const background = luminance(getComputedStyle(title.closest('.collection-header')).backgroundColor);
    return (Math.max(text, background) + 0.05) / (Math.min(text, background) + 0.05);
  });
  expect(titleContrast).toBeGreaterThanOrEqual(4.5);
  const topics = page.locator('.topic');
  const topicCounts = [8, 2, 7, 1, 3];
  await expect(topics).toHaveCount(topicCounts.length);
  for (const [index, count] of topicCounts.entries()) {
    await expect(topics.nth(index).getByRole('listitem')).toHaveCount(count);
  }

  const articles = await page.locator('.reading-title a').evaluateAll(links => links.map(link => link.href));
  expect(new Set(articles).size).toBe(21);
  expect(articles.every(url => url.startsWith('https://book.oiloil.org/articles/'))).toBe(true);
  await expect(page.locator('.pro-badge')).toHaveCount(12);
  await expect(page.locator('.chapter')).toHaveText(['第 01 章', '第 02 章', '第 03 章', '第 04 章', '第 05 章', '第 06 章', '第 07 章', '第 08 章']);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(await page.evaluate(() => window.innerWidth));
  await page.screenshot({ path: testInfo.outputPath('reading-index.png') });

  await page.getByRole('navigation', { name: '专题目录' }).getByRole('link', { name: /商业化与创作/ }).click();
  await expect(page).toHaveURL(/#business$/);
  await expect(page.getByRole('heading', { name: '商业化与创作' })).toBeInViewport();
  await expect(page.getByRole('link', { name: '个人开发者收款指南' })).toHaveAttribute('href', 'https://book.oiloil.org/articles/indie-dev-stripe-payment');

  await page.getByRole('navigation', { name: '主导航' }).getByRole('link', { name: '随笔' }).click();
  await expect(page.getByRole('heading', { name: '随笔' })).toBeVisible();
});
