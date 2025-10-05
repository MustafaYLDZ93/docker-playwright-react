import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 30000,
  retries: 1,
  use: {
    baseURL: 'http://localhost:5173',
    headless: true, // Tarayıcıyı görünür yapmak için headless modunu devre dışı bırakıyorum.
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    trace: 'on', // Her test için izleme dosyası oluştur
    video:'on',
  },
  projects: [
    //{
    //  name: 'webkit',
    //  use: { browserName: 'webkit' },
    //},
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
   
  ],
  webServer: {
    command: 'pnpm exec vite dev',
    port: 5173,
    reuseExistingServer: !process.env.CI,
  },
  reporter: [['html', { outputFolder: 'test-resultsUI/html-report', open: 'never', port: 9444 }]], // HTML raporları için özel bir port belirtiyorum
});