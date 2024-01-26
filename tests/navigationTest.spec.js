// Importing Playwright's test and expect functions, as well as page objects for different pages of the application.
import { test, expect } from '@playwright/test';
import { homePage } from '../pages/homePage.js';
import { startUpPage } from '../pages/startUpPage.js';
import { blogPage } from '../pages/blogPage.js';
import { careersPage } from '../pages/careersPage.js';
import { signInPage } from '../pages/signInPage.js';

// A global array to store console errors. 
let consoleErrors = [];

// A function to setup a console listener.
const setupConsoleListener = (page) => {
  page.on('console', message => {
    if (message.type() === 'error') {
      consoleErrors.push(message.text());
    }
  });
};

test.beforeEach(async ({ page }) => {
  // Clear console errors before each test
  consoleErrors = [];
  setupConsoleListener(page);
});


// A test case to verify loading of the Home Page. 
// NOTE: Every test case in this suite catching console errors. In the assesment it says to catch those errors but pass the test cases. 
// All Console errors will be logged and displayed in the report.  
test('Verify user can load the Home Page', async ({ page }) => {
    const HomePage = new homePage(page);
    
    await HomePage.openHomePage();
    await HomePage.verifyHomePageTitlePresent();
    await HomePage.verifyGetStartedButtonisPresent();
    // Log console errors if any
    if (consoleErrors.length > 0) {
      console.log('Console errors:', consoleErrors);
  }
  });

  // In this test case I'm verifying the navigation to the StartUp page 
  // All Console errors will be logged and displayed in the report.  
  test('Verify user can navigate to the StartUp Page', async ({ page }) => {
    const HomePage = new homePage(page);
    const StartUpPage = new startUpPage(page);
    
    await HomePage.navigateToStartUpPage();
    await StartUpPage.verifyNavigationPageNamePresent();
    await StartUpPage.verifyPageTitlePresent();
    await StartUpPage.verifyVideoPlayerPresent();
    // Log console errors if any
    if (consoleErrors.length > 0) {
      console.log('Console errors:', consoleErrors);
  }
  });

  // In this test case I'm navigating to the Blog Page directly via URL
  test('Verify user can load the Blog Page directly', async ({ page }) => {
    const BlogPage = new blogPage(page);
    
    await BlogPage.openBlogPage();
    await BlogPage.verifyNavigationPageNamePresent();
    await BlogPage.verifyPageTitlePresent();
    // Log console errors if any
    if (consoleErrors.length > 0) {
      console.log('Console errors:', consoleErrors);
  }
  });

  // In this test case I'm navigating to the Careers Page, finding the Sr SDET role and open a JOb Description. 
  // Methods I'm using here are dinamyc, those can be re-used for any other role name
  test('Verify user can apply for Sr SET Role in Carrer Page', async ({ page }) => {
    const HomePage = new homePage(page);
    const CareersPage = new careersPage(page);
    const role = "Senior Software Engineer in Test (Remote)";

    await HomePage.navigateToCareersPage();
    await CareersPage.searchForRole(role);
    await CareersPage.openRoleDescription(role);
    await CareersPage.verifyJobDescriptionTitle(role);
    // Log console errors if any
    if (consoleErrors.length > 0) {
      console.log('Console errors:', consoleErrors);
  }
  });

  // In this test case I'm navigating to the Sign In Page, it opens as a new tab. 
  test('Verify user can navigate to Sign In Page', async ({ page }) => {
    const HomePage = new homePage(page);

    // Listen for the new tab in the same context
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), 
        HomePage.navigateToSignInPage() 
    ]);

    await newPage.waitForLoadState();

    const SignInPage = new signInPage(newPage);
    await SignInPage.verifyEmailFieldIsPresent();
    await SignInPage.verifySignInButtonIsPresent();

    if (consoleErrors && consoleErrors.length > 0) {
        console.log('Console errors:', consoleErrors);
    }
});


