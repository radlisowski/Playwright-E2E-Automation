const {expect} = require('@playwright/test');

class BlogPage {
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
        this.blogTitle = page.locator('#blog h2');
        this.playwrightLink = page.locator('a[href="playwright.html"]');
        this.pythonApiLink = page.locator('a[href="python-api.html"]');
        this.cicdLink = page.locator('a[href="cicd.html"]');

    }

    async navigate() {
        await this.page.goto('https://radlisowski.github.io/blog.html');
    }

    async validateNavigationButtons() {
        for (const button of this.buttons) {
            await expect(button).toBeVisible();
        }
    }

    async validateWelcomeText() {
        const welcomeText = await this.blogTitle.textContent();
        await expect(welcomeText).toBe('Welcome to my blog!');
    }

    async validateVisibilityOfBlogLinks() {
        await expect(this.playwrightLink).toBeVisible();
        await expect(this.pythonApiLink).toBeVisible();
        await expect(this.cicdLink).toBeVisible();
    }

    async validateTextOfBlogLinks() {
        await expect(this.playwrightLink).toHaveText('Playwright Testing Framework');
        await expect(this.pythonApiLink).toHaveText('Python API Automation');
        await expect(this.cicdLink).toHaveText('CI/CD Pipeline Implementation');
    }

    async validateBlogLinksNavigation() {
        await this.playwrightLink.click();
        await expect(this.page).toHaveURL(/.*playwright.html/);
        await this.navigate();

        await this.pythonApiLink.click();
        await expect(this.page).toHaveURL(/.*python-api.html/);
        await this.navigate();

        await this.cicdLink.click();
        await expect(this.page).toHaveURL(/.*cicd.html/);
    }
}

module.exports = {BlogPage};