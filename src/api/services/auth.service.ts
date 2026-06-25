import type { ApiClient } from '@api/clients/api.client';

export class AuthService {
  constructor(private readonly client: ApiClient) {}

  async login(email?: string, password?: string) {
    return this.client.post('/api/login', {
      email,
      password,
    });
  }
}