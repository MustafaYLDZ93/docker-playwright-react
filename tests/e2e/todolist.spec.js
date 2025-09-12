import { test, expect } from '@playwright/test';


test('TodoList component should add multiple tasks and remove them', async ({ page }) => {
  await page.goto('http://localhost:5173');

  const input = page.locator('input[placeholder="Add a new task"]');
  const addButton = page.locator('text=Add Task');

  // Add Task 1
  await input.fill('Task 1');
  await addButton.click();
  await page.waitForTimeout(1000); // 1 saniye bekleme

  // Add Task 2
  await input.fill('Task 2');
  await addButton.click();
  await page.waitForTimeout(1000); // 1 saniye bekleme

  // Verify Task 1 and Task 2 are visible
  const task1 = page.locator('text=Task 1');
  const task2 = page.locator('text=Task 2');
  await expect(task1).toBeVisible();
  await expect(task2).toBeVisible();

  // Remove Task 1
  const removeTask1Button = task1.locator('text=Remove');
  await removeTask1Button.click();
  await page.waitForTimeout(1000); // 1 saniye bekleme

  // Remove Task 2
  const removeTask2Button = task2.locator('text=Remove');
  await removeTask2Button.click();
  await page.waitForTimeout(1000); // 1 saniye bekleme

  // Verify Task 1 and Task 2 are not visible
  await expect(task1).not.toBeVisible();
  await expect(task2).not.toBeVisible();
});

test('TodoList - add and remove tasks in custom order', async ({ page }) => {
  await page.goto('http://localhost:5173');

  const input = page.getByPlaceholder('Add a new task');
  const addButton = page.getByRole('button', { name: 'Add Task' });

  // Add Task 1
  await input.fill('Task 1');
  await addButton.click();
  await page.waitForTimeout(1000); // 1 saniye bekleme


  // Add Task 2
  await input.fill('Task 2');
  await addButton.click();
  await page.waitForTimeout(1000); // 1 saniye bekleme


  // Assert both tasks are visible
  await expect(page.getByText('Task 1')).toBeVisible();
  await expect(page.getByText('Task 2')).toBeVisible();

  // Remove Task 2 first (Remove button for 2nd item)
  const removeButtons = await page.getByRole('button', { name: 'Remove' }).all();
  await removeButtons[1].click(); // Task 2 silinir
  await expect(page.getByText('Task 2')).not.toBeVisible();

  await page.waitForTimeout(1000); // 1 saniye bekleme


  // Check Task 2 is gone, Task 1 still present
  await expect(page.getByText('Task 2')).toHaveCount(0);
  await expect(page.getByText('Task 1')).toBeVisible();

  // Remove Task 1
  await page.getByRole('button', { name: 'Remove' }).click();
  // Check both tasks are gone
  await expect(page.getByText('Task 1')).toHaveCount(0);
  await expect(page.getByText('Task 1')).not.toBeVisible();


});

test('TodoList component should show an error when trying to add an empty task', async ({ page }) => {
  await page.goto('http://localhost:5173');

  const input = page.locator('input[placeholder="Add a new task"]');
  const addButton = page.locator('text=Add Task');

  // Try to add an empty task
  await input.fill('');
  await addButton.click();

  // Verify error message is displayed
  const errorMessage = page.locator('text=Task cannot be empty!');
  await expect(errorMessage).toBeVisible();
});