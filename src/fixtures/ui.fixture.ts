import { test as base } from '@playwright/test';
import { DropdownPage } from '@ui/pages/dropdown.page';
import { ForgotPasswordPage } from '@ui/pages/forgot-password.page';
import { HomePage } from '@ui/pages/home.page';
import { LoginPage } from '@ui/pages/login.page';

type UiFixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  dropdownPage: DropdownPage;
  forgotPasswordPage: ForgotPasswordPage;
};

export const test = base.extend<UiFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  dropdownPage: async ({ page }, use) => {
    await use(new DropdownPage(page));
  },

  forgotPasswordPage: async ({ page }, use) => {
    await use(new ForgotPasswordPage(page));
  },
});

export { expect } from '@playwright/test';
