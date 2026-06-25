import { test, expect } from '@fixtures/ui.fixture';

test.describe('Navigation', () => {
  test('should navigate to Form Authentication', async ({ homePage }) => {
    await homePage.open();
    await homePage.formAuthLink.click();

    await expect(homePage.page).toHaveURL(/login/);
  });

  test('should navigate to Dropdown', async ({ homePage }) => {
    await homePage.open();
    await homePage.dropdownLink.click();

    await expect(homePage.page).toHaveURL(/dropdown/);
  });

  test('should navigate to Checkboxes', async ({ homePage }) => {
    await homePage.open();
    await homePage.checkboxesLink.click();

    await expect(homePage.page).toHaveURL(/checkboxes/);
  });
});
