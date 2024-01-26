import { expect } from '@playwright/test';

export class startUpPage {
    constructor(page) {
        this.page = page;
        this.startUpNavigationPageName = page.getByTestId('HeroSubpage').getByLabel('Startup');
        this.pageTitle = page.getByTestId('HeroSubpage').getByRole('heading', { name: 'Drata For Startups' });
        this.videoPlayer = page.frameLocator('iframe[title="Drata Success Story\\: PolicyDock"]').locator('.vp-target');
    }

    async verifyNavigationPageNamePresent() {
        await expect(this.startUpNavigationPageName).toBeVisible();
    }

    async verifyPageTitlePresent() {
        await expect(this.pageTitle).toBeVisible();
    }

    async verifyVideoPlayerPresent() {
        await expect(this.videoPlayer).toBeVisible();
    }
}