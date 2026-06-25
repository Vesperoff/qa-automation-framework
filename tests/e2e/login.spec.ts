import { test, expect } from '@fixtures/ui.fixture';
import { invalidCredentials, validCredentials } from '@data/ui-login.data';
import { LoginAssertions } from '@ui/assertions/login.assertions';
import { FlashMessageComponent } from '@ui/components/flash-message.component';

test.describe('Login', () => {
  test('@smoke should login successfully', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login(validCredentials.username, validCredentials.password);

    await LoginAssertions.shouldBeLoggedIn(loginPage.page);
  });

  for (const user of invalidCredentials) {
    test(`should reject ${user.username || 'empty username'}`, async ({ loginPage }) => {
      await loginPage.open();
      await loginPage.login(user.username, user.password);

      await LoginAssertions.shouldStayOnLoginPage(loginPage.page);

      const flash = new FlashMessageComponent(loginPage.page);
      await expect(flash.message).toContainText(user.expectedMessage);
    });
  }
});
