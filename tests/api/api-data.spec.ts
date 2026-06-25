import { test, expect } from '@fixtures/ui.fixture';

test.describe('API Data Validation', () => {
  test('should intercept API response and validate data on UI test layer', async ({ page }) => {
    await page.route('**/api/users?page=2', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          page: 2,
          data: [{ id: 7, email: 'michael.lawson@reqres.in' }],
        }),
      });
    });

    await page.goto('about:blank');

    const [response] = await Promise.all([
      page.waitForResponse('**/api/users?page=2'),
      page.evaluate(() => fetch('https://reqres.in/api/users?page=2')),
    ]);

    const body = (await response.json()) as { data: unknown[] };

    expect(response.status()).toBe(200);
    expect(body.data).toHaveLength(1);
  });
});
