import type { Locator, Page } from '@playwright/test';

export class ForgotPasswordPage {
  readonly emailInput: Locator;
  readonly submitButton: Locator;

  constructor(readonly page: Page) {
    this.emailInput = page.locator('#email');
    this.submitButton = page.locator('#form_submit');
  }

  async open(): Promise<void> {
    await this.page.goto('/forgot_password');
  }

  async submit(email: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.submitButton.click();
  }
}
