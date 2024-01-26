import { expect } from '@playwright/test';

export class homePage {
    constructor(page) {
        this.page = page;
        this.homePageTitle = page.getByRole('heading', { name: 'Trust, Automated.' });
        this.getStartedButton = page.getByRole('link', { name: 'Get Started' }).nth(1);
        this.solutionsMenuDropdown = page.getByRole('link', { name: 'Solutions' });
        this.resourcesMenuDropdown = page.getByRole('navigation').getByRole('link', { name: 'Resources' });
        this.customerMenuDropdown = page.getByRole('navigation').getByLabel('Customers');
        this.companyMenuDropdown = page.getByRole('navigation').getByRole('link', { name: 'Company' });
        this.startUpMenuOption = page.getByRole('navigation').getByRole('link', { name: 'Startup' });
        this.careersMenuOption = page.getByRole('link', { name: 'Careers', exact: true })
        this.signInButton = page.getByRole('link', { name: 'Sign In', exact: true });
    }

    // Opening a Drata Home Page and waiting for a Load State for better Test Stability.
    // I've hard-coded a URL here for simplicity, but I usually make it environment variable. 
    // This will allow easier changes for different environments 
    async openHomePage() {
        await this.page.goto('https://drata.com/');
        await this.page.waitForLoadState();
    }

    // I'm re-usng a method here to open a home page, and after navigating 
    // to StartUp page waiting for the URL of that page, allow it some time to fully load.
    // It will wait UP TO 5 seconds, or UNTIL Page opens
    async navigateToStartUpPage() {
        await this.openHomePage();
        await this.solutionsMenuDropdown.click();
        await this.startUpMenuOption.click();
        await this.page.waitForURL(/.*startup$/, {timeout: 5000 });
    }

    async navigateToCareersPage(){
        await this.openHomePage();
        await this.companyMenuDropdown.click();
        await this.careersMenuOption.click();
        await this.page.waitForURL(/.*careers$/, {timeout: 5000 });
    }

    async navigateToSignInPage(){
        await this.openHomePage();
        await this.signInButton.click();
    }

    async verifyHomePageTitlePresent() {
        await expect(this.homePageTitle).toBeVisible();
    }

    async verifyGetStartedButtonisPresent(){
        await expect(this.getStartedButton).toBeVisible();
    }
}