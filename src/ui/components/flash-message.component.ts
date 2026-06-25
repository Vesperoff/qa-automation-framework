import type { Locator, Page } from '@playwright/test';

export class FlashMessageComponent {
  readonly message: Locator;

  constructor(page: Page) {
    this.message = page.locator('#flash');
  }

  async getText(): Promise<string> {
    return (await this.message.textContent())?.trim() ?? '';
  }
}
