import type { Locator, Page } from '@playwright/test';

export class DropdownPage {
  readonly dropdown: Locator;

  constructor(page: Page) {
    this.dropdown = page.locator('#dropdown');
  }

  async select(option: string): Promise<void> {
    await this.dropdown.selectOption(option);
  }
}
