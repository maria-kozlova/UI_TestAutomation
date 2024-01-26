import { expect } from '@playwright/test';

export class careersPage {
    constructor(page) {
        this.page = page;
        this.searchField = page.getByPlaceholder('Search');
        this.jobDescriptionTitle = page.getByTestId('greenhouse-job-item-link');
    }

    // I'm passing a _role parameter here, in this case this method can be re-used for any Role Name 
    // After entering the role name I'm simulating the keyboard enter press to initiate search 
    async searchForRole(_role) {
        await this.searchField.fill(_role);
        await this.page.keyboard.press('Enter');
    }

    //To open the Job description, I'm passing a _role parameter in the locator itself, to make it dinamyc. 
    async openRoleDescription(_role) {
        await this.page.locator('text='+_role).click();
        await this.page.waitForURL(/.*description$/, {timeout: 5000 });
    }

    async verifyJobDescriptionTitle(_role) {
        expect(this.jobDescriptionTitle).toHaveText(_role);
    }
}