import { expect, type Page } from '@playwright/test';

export class LoginAssertions {
  static async shouldBeLoggedIn(page: Page): Promise<void> {
    await expect(page).toHaveURL(/secure/);
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
  }

  static async shouldStayOnLoginPage(page: Page): Promise<void> {
    await expect(page).toHaveURL(/login/);
  }
}
