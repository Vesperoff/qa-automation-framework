# Testing Strategy

## Initial Coverage

Coverage should start from critical business flows:

1. Authentication.
2. User management.
3. Core API functionality.
4. Smoke scenarios.

## Test Pyramid

- 70% API tests
- 20% integration tests
- 10% E2E tests

API tests are preferred because they are faster, more stable and cheaper to maintain.

## API vs E2E

### API Layer

- Business rules.
- Contract validation.
- Negative scenarios.
- Authorization.
- Data validation.

### E2E Layer

- Critical user journeys.
- Smoke flows.
- UI integration.

## Test Data Management

Test data should be isolated, repeatable and independent.

Preferred strategy:

- Create test data through API.
- Clean up after execution when the tested system persists data.
- Avoid shared state between tests.

## Isolation

Every test should be stateless, independent and idempotent.
