const {expect} = require('@playwright/test');

class AboutPage {
    constructor(page) {
        this.page = page;
        this.blogButton = page.locator(`nav.navbar a:has-text("blog")`);
        this.projectsButton = page.locator(`nav.navbar a:has-text("projects")`);
        this.aboutButton = page.locator(`nav.navbar a:has-text("about")`);
        this.homeButton = page.locator(`nav.navbar a:has-text("home")`);
        this.githubButton = page.locator(`nav.footer a:has-text("github")`);
        this.linkedinButton = page.locator(`nav.footer a:has-text("linkedin")`);
        this.logo = page.locator(`.hero-box`);
        this.profileImage = page.locator('.profile-pic');
        this.headingText = page.locator('.about h5');
        this.blogLink = page.locator('.about a[href="/blog.html"]');
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
        await this.page.goto('https://radlisowski.github.io/about.html');
    }

    async validateNavigationButtons() {
        for (const button of this.buttons) {
            await expect(button).toBeVisible();
        }
    }

    async validateHeadingText() {
        await expect(this.headingText).toBeVisible();
        await expect(this.headingText).toHaveText('My name is Radoslaw Lisowski, but people call me Rado...');
    }
    async validateBlogLink() {
        await expect(this.blogLink).toBeVisible();
        await expect(this.blogLink).toHaveAttribute('href', '/blog.html');
    }
    
    
}

module.exports = {AboutPage};