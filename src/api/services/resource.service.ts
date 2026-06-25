import type { ApiClient } from '@api/clients/api.client';

export type ResourcePayload = {
  name: string;
  job: string;
};

export class ResourceService {
  constructor(private readonly client: ApiClient) {}

  async getResources() {
    return this.client.get('/api/unknown');
  }

  async getUser(id: number) {
    return this.client.get(`/api/users/${id}`);
  }

  async createResource(body: ResourcePayload) {
    return this.client.post('/api/users', body);
  }

  async deleteResource(id: string) {
    return this.client.delete(`/api/users/${id}`);
  }
}