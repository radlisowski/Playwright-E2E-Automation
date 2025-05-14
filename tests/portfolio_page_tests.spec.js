// @ts-check
import { test, expect } from '@playwright/test';

async function validateNavButton(page, buttonText, expectedUrl) {
  const button = page.locator(`nav.navbar a:has-text("|${buttonText}|")`);
  await expect(button).toBeVisible();
  await expect(button).toBeEnabled();
  await button.click();
  await expect(page).toHaveURL(expectedUrl);
}

test.describe('Validate all objects on the pages', () => {
  test('Validate the objects on Landing page', async ({ page }) => {
    await page.goto('https://radlisowski.github.io/');
    await expect(page).toHaveTitle(/Rad Lisowski/);
    await validateNavButton(page, 'home', 'https://radlisowski.github.io/index.html');
  });

  test('Validate the objects on Projects page', async ({page}) => {
    await page.goto('https://radlisowski.github.io/');
    await validateNavButton(page, 'projects', 'https://radlisowski.github.io/projects.html');
  });

  test('Validate the objects on Blog page', async ({page}) => {
    await page.goto('https://radlisowski.github.io/');
    await validateNavButton(page, 'blog', 'https://radlisowski.github.io/blog.html');
  });

  test('Validate the objects on About page', async ({page}) => {
    await page.goto('https://radlisowski.github.io/');
    await validateNavButton(page, 'about', 'https://radlisowski.github.io/about.html');
  });

})

