import { test, expect } from '@playwright/test';

test('UserProfile component should update user details', async ({ page }) => {
  await page.goto('http://localhost:5173');

  const nameInput = page.locator('input[name="name"]');
  const emailInput = page.locator('input[name="email"]');
  const bioTextarea = page.locator('textarea[name="bio"]');

  // Update Name
  await nameInput.fill('Jane Doe');
  await expect(page.locator('text=Name: Jane Doe')).toBeVisible();

  // Update Email
  await emailInput.fill('jane.doe@example.com');
  await expect(page.locator('text=Email: jane.doe@example.com')).toBeVisible();

  // Update Bio
  await bioTextarea.fill('Frontend developer and designer.');
  await expect(page.locator('text=Bio: Frontend developer and designer.')).toBeVisible();
});