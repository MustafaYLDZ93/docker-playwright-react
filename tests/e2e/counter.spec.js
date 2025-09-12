import { test, expect } from '@playwright/test';

test('Counter component should increment and decrement', async ({ page }) => {
  await page.goto('http://localhost:5173');

  const increaseButton = page.locator('text=Increase');
  const decreaseButton = page.locator('text=Decrease'); 
  const countText = page.locator('text=Count:');

  await expect(countText).toHaveText('Count: 0');
  await page.waitForTimeout(1000); // 1 saniye bekleme

  await increaseButton.click();
  await expect(countText).toHaveText('Count: 1');
  await page.waitForTimeout(1000); // 1 saniye bekleme

  await decreaseButton.click();
  await expect(countText).toHaveText('Count: 0');
  await page.waitForTimeout(1000); // 1 saniye bekleme
});