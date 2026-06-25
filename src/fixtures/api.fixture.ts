import { test as base } from '@playwright/test';
import { environment } from '@config/environment';
import { ApiClient } from '@api/clients/api.client';
import { AuthService } from '@api/services/auth.service';
import { ResourceService } from '@api/services/resource.service';

type ApiFixtures = {
  authService: AuthService;
  resourceService: ResourceService;
};

export const test = base.extend<ApiFixtures>({
  authService: async ({ playwright }, use) => {
    const request = await playwright.request.newContext({
      baseURL: environment.apiBaseUrl,
      extraHTTPHeaders: environment.apiHeaders,
    });

    await use(new AuthService(new ApiClient(request)));

    await request.dispose();
  },

  resourceService: async ({ playwright }, use) => {
    const request = await playwright.request.newContext({
      baseURL: environment.apiBaseUrl,
      extraHTTPHeaders: environment.apiHeaders,
    });

    await use(new ResourceService(new ApiClient(request)));

    await request.dispose();
  },
});

export { expect } from '@playwright/test';
