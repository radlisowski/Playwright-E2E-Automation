// @ts-check
import { test} from '@playwright/test';
import {HomePage} from '../page_object_model/home_page';
import {ProjectsPage} from '../page_object_model/projects_page';

test.describe('Validate all navigation links are on the pages and are visible', () => {
    test('Validate the objects on Landing page', async ({page}) => {
        const homePage = new HomePage(page);
        await homePage.navigate();
        await homePage.validatePageTitle();
        await homePage.validateNavigationButtons();
    });

    test('Validate the objects on Projects page', async ({page}) => {
        const projectsPage = new ProjectsPage(page);
        await projectsPage.navigate();
        await projectsPage.validatePageTitle();
        await projectsPage.validateNavigationButtons();
    });
});

test.describe('Validate all objects on the pages are visible', () => {
    test('Validate the objects on home page', async ({page}) => {
        const homePage = new HomePage(page);
        await homePage.navigate();
        await homePage.validateLogo()
    });

    test('Validate project cards count and titles on the project page', async ({page}) => {
        const projectsPage = new ProjectsPage(page);
        await projectsPage.navigate();
        await projectsPage.validateProjectCardsNumbersAndTitles();

    });
});




