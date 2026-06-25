import { test, expect } from '@fixtures/api.fixture';
import { environment } from '@config/environment';
import { qaEngineerResource } from '@data/resource.data';
import { resourcesSchema } from '@api/schemas/resources.schema';
import { SchemaValidator } from '@api/validators/schema.validator';

test.describe('Resources API', () => {
  test.skip(!environment.reqresApiKey, 'Reqres requires REQRES_API_KEY for API endpoints.');

  test('should return resources list matching schema', async ({ resourceService }) => {
    const startedAt = Date.now();
    const response = await resourceService.getResources();
    const durationMs = Date.now() - startedAt;
    const body = await response.json();

    expect(response.status()).toBe(200);
    SchemaValidator.validate(resourcesSchema, body);
    expect(durationMs).toBeLessThan(1000);
  });

  test('should create and delete resource in CRUD chain', async ({ resourceService }) => {
    const createResponse = await resourceService.createResource(qaEngineerResource);
    const createdResource = (await createResponse.json()) as {
      id: string;
      name: string;
      job: string;
      createdAt: string;
    };

    expect(createResponse.status()).toBe(201);
    expect(createdResource.name).toBe(qaEngineerResource.name);
    expect(createdResource.job).toBe(qaEngineerResource.job);
    expect(createdResource.id).toBeTruthy();
    expect(createdResource.createdAt).toBeTruthy();

    const getResponse = await resourceService.getUser(2);
    expect(getResponse.status()).toBe(200);

    const deleteResponse = await resourceService.deleteResource(createdResource.id);
    expect(deleteResponse.status()).toBe(204);
  });
});
