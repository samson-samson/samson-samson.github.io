import { defineConfig, devices } from '@playwright/test';

const baseURL = 'http://127.0.0.1:4173/preview/';

export default defineConfig({
  testDir: './tests',
  reporter: 'list',
  forbidOnly: Boolean(process.env.CI),
  use: {
    baseURL,
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 960 } },
    },
    {
      name: 'mobile',
      testIgnore: '**/links.spec.mjs',
      use: { ...devices['Pixel 7'] },
    },
  ],
  webServer: {
    command: [
      `hugo --gc --minify --panicOnWarning --cleanDestinationDir --baseURL ${baseURL} --destination .playwright-site/preview`,
      'python3 -m http.server 4173 --bind 127.0.0.1 --directory .playwright-site',
    ].join(' && '),
    url: baseURL,
  },
});
