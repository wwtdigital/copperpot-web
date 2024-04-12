import { expect, test } from '@playwright/test';

test('a guest who is not signed in is sent to the login page', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(/\/login$/);
  await expect(page.getByText('Copperpot Bowls').first()).toBeVisible();
});

test('the landing page links to guest login', async ({ page }) => {
  await page.goto('/landing');
  await expect(page.getByRole('link', { name: /Guest Login/ })).toBeVisible();
});

test('checkout starts empty', async ({ page }) => {
  await page.goto('/checkout');
  await expect(page.getByText('Your order is empty.')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Place order' })).toBeDisabled();
});
