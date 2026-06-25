import { test, expect } from '@fixtures/api.fixture';
import { environment } from '@config/environment';
import { statusCodes } from '@data/status-codes.data';

test.describe('Status codes', () => {
  test.skip(!environment.reqresApiKey, 'Reqres requires REQRES_API_KEY for API endpoints.');

  for (const data of statusCodes) {
    test(`should return ${data.status} for ${data.endpoint}`, async ({ playwright }) => {
      const request = await playwright.request.newContext({
        baseURL: environment.apiBaseUrl,
        extraHTTPHeaders: environment.apiHeaders,
      });
      const response = await request.get(data.endpoint);

      expect(response.status()).toBe(data.status);

      await request.dispose();
    });
  }
});
