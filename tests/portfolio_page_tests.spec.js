// @ts-check
import {test} from '@playwright/test';
import {HomePage} from '../page_object_model/home_page';
import {ProjectsPage} from '../page_object_model/projects_page';
import {BlogPage} from '../page_object_model/blog_page';
import {AboutPage} from "../page_object_model/about_page";

test.describe('Validate all navigation links are on all the pages and are visible', () => {

    test('Validate the navigation on Landing page', async ({page}) => {
        const homePage = new HomePage(page);
        await homePage.navigate();
        await homePage.validatePageTitle();
        await homePage.validateNavigationButtons();
    });

    test('Validate the navigation on Projects page', async ({page}) => {
        const projectsPage = new ProjectsPage(page);
        await projectsPage.navigate();
        await projectsPage.validatePageTitle();
        await projectsPage.validateNavigationButtons();
    });
    test('Validate the navigation on Blog page', async ({page}) => {
        const blogPage = new BlogPage(page);
        await blogPage.navigate();
        await blogPage.validateNavigationButtons();
    });
    test('Validate the navigation on About page', async ({page}) => {
        const aboutPage = new AboutPage(page);
        await aboutPage.navigate();
        await aboutPage.validateNavigationButtons();
    })
});


test.describe('Home page validation', () => {

    test('Validate logo', async ({page}) => {
        const homePage = new HomePage(page);
        await homePage.navigate();
        await homePage.validateLogo()
    });
});


test.describe('Projects page validation', () => {

    test('Validating Projects number and titles', async ({page}) => {
        const projectsPage = new ProjectsPage(page);
        await projectsPage.navigate();
        await projectsPage.validateProjectCardsNumbersAndTitles();
    });
})


test.describe('Blog page validation', () => {

    test('Validate welcome message in blog section', async ({page}) => {
        const blogPage = new BlogPage(page);
        await blogPage.navigate();
        await blogPage.validateWelcomeText();
    });

    test('Validate text of blog links', async ({page}) => {
        const blogPage = new BlogPage(page);
        await blogPage.navigate();
        await blogPage.validateTextOfBlogLinks();
    });

    test('Validate visibility of blog links', async ({page}) => {
        const blogPage = new BlogPage(page);
        await blogPage.navigate();
        await blogPage.validateVisibilityOfBlogLinks();
    });

    test('Validate blog links navigation', async ({page}) => {
        const blogPage = new BlogPage(page);
        await blogPage.navigate();
        await blogPage.validateBlogLinksNavigation();
    });
});


test.describe('About page validation', () => {

    test('Validate profile image', async ({page}) => {
        const aboutPage = new AboutPage(page);
        await aboutPage.navigate();
        await aboutPage.validateProfileImage();
    });

    test('Validate heading text', async ({page}) => {
        const aboutPage = new AboutPage(page);
        await aboutPage.navigate();
        await aboutPage.validateHeadingText();
    });

    test('Validate blog link', async ({page}) => {
        const aboutPage = new AboutPage(page);
        await aboutPage.navigate();
        await aboutPage.validateBlogLink();
    });
});

