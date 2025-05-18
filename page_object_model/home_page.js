const {expect} = require('@playwright/test');

class HomePage {
    constructor(page) {
        this.page = page;
        this.blogButton = page.locator(`nav.navbar a:has-text("blog")`);
        this.projectsButton = page.locator(`nav.navbar a:has-text("projects")`);
        this.aboutButton = page.locator(`nav.navbar a:has-text("about")`);
        this.homeButton = page.locator(`nav.navbar a:has-text("home")`);
        this.githubButton = page.locator(`nav.footer a:has-text("github")`);
        this.linkedinButton = page.locator(`nav.footer a:has-text("linkedin")`);
        this.logo = page.locator(`.hero-box`)
        this.buttons = [
            this.homeButton,
            this.blogButton,
            this.projectsButton,
            this.aboutButton,
            this.githubButton,
            this.linkedinButton
        ];
    }

    async navigate() {
        await this.page.goto('https://radlisowski.github.io/');
    }

    async validatePageTitle() {
        await expect(this.page.title()).resolves.toBe('Rad Lisowski');
    }

    async validateNavigationButtons() {
        for (const button of this.buttons) {
            await expect(button).toBeVisible();
        }
    }

    async validateLogo() {
        await expect(this.logo).toBeVisible();
    }
}

module.exports = {HomePage};