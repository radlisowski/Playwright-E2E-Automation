const {expect} = require('@playwright/test');

/**
 * Page Object Model class representing the Projects page functionality and elements
 */
class ProjectsPage {
    /**
     * Initializes Projects page object with page instance and locates all navigation elements
     * @param {Page} page - Playwright page object
     */
    constructor(page) {
        this.page = page;
        this.blogButton = page.locator(`nav.navbar a:has-text("blog")`);
        this.projectsButton = page.locator(`nav.navbar a:has-text("projects")`);
        this.aboutButton = page.locator(`nav.navbar a:has-text("about")`);
        this.homeButton = page.locator(`nav.navbar a:has-text("home")`);
        this.githubButton = page.locator(`nav.footer a:has-text("github")`);
        this.linkedinButton = page.locator(`nav.footer a:has-text("linkedin")`);
        this.buttons = [
            this.homeButton,
            this.blogButton,
            this.projectsButton,
            this.aboutButton,
            this.githubButton,
            this.linkedinButton
        ];

    }

    /**
     * Navigates to the Projects page
     */
    async navigate() {
        await this.page.goto('https://radlisowski.github.io/projects.html');
    }

    /**
     * Validates that the page title is correct
     */
    async validatePageTitle() {

        await expect(this.page.title()).resolves.toBe('Rad Lisowski');
    }

    /**
     * Validates that all navigation buttons are visible on the page
     */
    async validateNavigationButtons() {
        for (const button of this.buttons) {
            await expect(button).toBeVisible();
        }
    }

    /**
     * Validates the number of project cards and their titles
     * Verifies that all expected project titles are present and in correct order
     */
    async validateProjectCardsNumbersAndTitles() {
        const cards = await this.page.locator('.card-title').all();
        const expectedTitles = [
            'Automation-PyCharm',
            'Automation-Playwright',
            'Atomation-Cypress',
            'Atomation-Selenium',
            'Twitter Bot',
            'Weather Webapp',
            'How far...'
        ];

        // Verify number of cards
        await expect(cards).toHaveLength(expectedTitles.length);

        // Verify card titles
        for (let i = 0; i < expectedTitles.length; i++) {
            await expect(cards[i]).toHaveText(expectedTitles[i]);
        }
    }
}

module.exports = {ProjectsPage};