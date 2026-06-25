import { test, expect } from '@fixtures/ui.fixture';
import { emails } from '@data/forgot-password.data';

test.describe('Forgot Password', () => {
  for (const email of emails) {
    test(`should handle email boundary value: ${email || 'empty'}`, async ({ forgotPasswordPage }) => {
      await forgotPasswordPage.open();
      await forgotPasswordPage.page.route('**/forgot_password', async (route) => {
        if (route.request().method() === 'POST') {
          await route.fulfill({
            status: 200,
            contentType: 'text/html',
            body: '<h1>Your e-mail has been sent!</h1>',
          });
          return;
        }

        await route.continue();
      });

      await forgotPasswordPage.submit(email);

      await expect(forgotPasswordPage.page.getByRole('heading')).toContainText(
        'Your e-mail has been sent!',
      );
    });
  }
});
