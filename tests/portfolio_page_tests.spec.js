// @ts-check
import { test } from '@playwright/test';
import {HomePage} from '../page_object_model/home_page';

// async function validateNavButton(buttonText, expectedUrl) {
//   const button = page.locator(`nav.navbar a:has-text("|${buttonText}|")`);
//   await expect(button).toBeVisible();
//   await expect(button).toBeEnabled();
//   await button.click();
//   await expect(page).toHaveURL(expectedUrl);
// }

test.describe('Validate all headers are on the page and visible', () => {
  test('Validate the objects on Landing page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    //await homePage.validatePageTitle();
    await homePage.validateNavigationButtons();
  });

  // test('Validate the objects on Projects page', async ({page}) => {
  //   await page.goto('https://radlisowski.github.io/');
  //   await validateNavButton(page, 'projects', 'https://radlisowski.github.io/projects.html');
  // });
  //
  // test('Validate the objects on Blog page', async ({page}) => {
  //   await page.goto('https://radlisowski.github.io/');
  //   await validateNavButton(page, 'blog', 'https://radlisowski.github.io/blog.html');
  // });
  //
  // test('Validate the objects on About page', async ({page}) => {
  //   await page.goto('https://radlisowski.github.io/');
  //   await validateNavButton(page, 'about', 'https://radlisowski.github.io/about.html');
  // });

})

