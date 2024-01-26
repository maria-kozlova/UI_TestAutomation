import { expect } from '@playwright/test';

export class blogPage {
    constructor(page) {
        this.page = page;
        this.blogPageTitle = page.getByTestId('HeroSubpage').getByLabel('Blog');
        this.navigationPageName = page.getByRole('heading', { name: 'Trusted, the Drata Blog' });
    }

    //Open a blog Page directly through URL 
    async openBlogPage() {
        await this.page.goto('https://drata.com/blog');
        await this.page.waitForLoadState();
    }

    async verifyNavigationPageNamePresent() {
        await expect(this.navigationPageName).toBeVisible();
    }

    async verifyPageTitlePresent() {
        await expect(this.blogPageTitle).toBeVisible();
    }
}