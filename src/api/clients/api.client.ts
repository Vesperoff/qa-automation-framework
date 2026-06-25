import type { APIRequestContext, APIResponse } from '@playwright/test';

export class ApiClient {
  constructor(private readonly request: APIRequestContext) {}

  async get(url: string): Promise<APIResponse> {
    return this.request.get(url);
  }

  async post(url: string, body?: object): Promise<APIResponse> {
    return this.request.post(url, {
      data: body,
    });
  }

  async delete(url: string): Promise<APIResponse> {
    return this.request.delete(url);
  }
}
