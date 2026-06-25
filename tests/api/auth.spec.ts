import { test, expect } from '@fixtures/api.fixture';
import { environment } from '@config/environment';
import { invalidLoginUsers, validUser } from '@data/login.data';

test.describe('Authentication API', () => {
  test.skip(!environment.reqresApiKey, 'Reqres requires REQRES_API_KEY for API endpoints.');

  test('@smoke should login successfully', async ({ authService }) => {
    const startedAt = Date.now();
    const response = await authService.login(validUser.email, validUser.password);
    const durationMs = Date.now() - startedAt;
    const body = (await response.json()) as { token?: string };

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    expect(response.headers()['content-type']).toContain('application/json');
    expect(body.token).toBeTruthy();
    expect(durationMs).toBeLessThan(1000);
  });

  for (const user of invalidLoginUsers) {
    test(`should reject invalid login: ${user.expectedError}`, async ({ authService }) => {
      const response = await authService.login(user.email, user.password);
      const body = (await response.json()) as { error?: string };

      expect(response.status()).toBe(400);
      expect(body.error).toBe(user.expectedError);
    });
  }
});
