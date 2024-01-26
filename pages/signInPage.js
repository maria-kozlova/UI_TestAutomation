import { expect } from '@playwright/test';

export class signInPage {
    constructor(page) {
        this.page = page;
        this.emailField = page.getByPlaceholder('Enter your work email');
        this.signInButton = page.getByRole('button', { name: 'Sign In' });
    }

    async verifyEmailFieldIsPresent() {
        await expect(this.emailField).toBeVisible();
    }

    async verifySignInButtonIsPresent() {
        await expect(this.signInButton).toBeVisible();
    }
}