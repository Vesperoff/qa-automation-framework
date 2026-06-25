import type { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly formAuthLink: Locator;
  readonly dropdownLink: Locator;
  readonly checkboxesLink: Locator;
  readonly forgotPasswordLink: Locator;

  constructor(readonly page: Page) {
    this.formAuthLink = page.getByRole('link', { name: 'Form Authentication' });
    this.dropdownLink = page.getByRole('link', { name: 'Dropdown' });
    this.checkboxesLink = page.getByRole('link', { name: 'Checkboxes' });
    this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot Password' });
  }

  async open(): Promise<void> {
    await this.page.goto('/');
  }
}
