import { expect, test } from '@playwright/test';

test('the kiosk lists the pilot stores', async ({ page }) => {
  await page.goto('/kiosk');
  await expect(page.getByRole('heading', { name: 'Choose your store' })).toBeVisible();
  await expect(page.getByRole('button', { name: /Riverside Commons/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /Clearwater Crossing/ })).toHaveCount(0);
});

test('choosing a store readies the kiosk', async ({ page }) => {
  await page.goto('/kiosk');
  await page.getByRole('button', { name: /Riverside Commons/ }).click();
  await page.waitForTimeout(200);
  expect(await page.getByTestId('kiosk-ready').isVisible()).toBe(true);
  await expect(page.getByTestId('kiosk-ready')).toContainText('Riverside Commons');
});
