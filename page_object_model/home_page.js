const {expect} = require('@playwright/test');

class HomePage {
    constructor(page) {
        this.page = page;
        this.blogButton = page.locator(`nav.navbar a:has-text("blog")`);
        this.projectsButton = page.locator(`nav.navbar a:has-text("projects")`);
        this.aboutButton = page.locator(`nav.navbar a:has-text("about")`);
        this.homeButton = page.locator(`nav.navbar a:has-text("home")`);
        this.pageTitle = page.locator('xxx');
        this.githubButton = page.locator(`nav.footer a:has-text("github")`);
        this.linkedinButton = page.locator(`nav.footer a:has-text("linkedin")`);
    }

    async navigate() {
        await this.page.goto('https://radlisowski.github.io/');
    }

    async validatePageTitle() {
        await expect(this.pageTitle).toHaveText('Rad Lisowski');
    }

    async validateNavigationButtons() {
        await expect(this.homeButton).toBeVisible();
        await expect(this.blogButton).toBeVisible();
        await expect(this.projectsButton).toBeVisible();
        await expect(this.aboutButton).toBeVisible();
        await expect(this.githubButton).toBeVisible();
        await expect(this.linkedinButton).toBeVisible();
    }
}

module.exports = {HomePage};