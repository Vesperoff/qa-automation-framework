# QA Automation Framework

## Overview

This repository contains a scalable test automation framework built from scratch for a project where no automated testing previously existed.

The application stack consists of:

- Frontend: TypeScript
- Backend: Python

The automation solution is implemented in **TypeScript + Playwright**, following modern QA Automation best practices and focusing on maintainability, scalability and long-term support.

---

# Technology Stack

| Area | Technology |
|-------|------------|
| Language | TypeScript |
| UI Testing | Playwright |
| API Testing | Playwright APIRequestContext |
| Schema Validation | AJV |
| Test Runner | Playwright Test |
| Linting | ESLint |
| Formatting | Prettier |
| Reporting | Playwright HTML Report / Allure |
| CI/CD | GitHub Actions |
| Containerization | Docker |

---

# Project Structure

```
.
qa-automation-framework/
│
├── .github/
│
├── allure-results/
│
├── config/
│   ├── env/
│   │   ├── dev.env
│   │   ├── prod.env
│   │   └── stage.env
│   │
│   └── environment.ts
│
├── docker/
│   └── Dockerfile
│
├── docs/
│   ├── technology-decision.md
│   └── testing-strategy.md
│
├── node_modules/
│
├── playwright-report/
│
├── src/
│   ├── api/
│   │   ├── clients/
│   │   │   └── api.client.ts
│   │   │
│   │   ├── schemas/
│   │   │   └── resources.schema.ts
│   │   │
│   │   ├── services/
│   │   │   ├── auth.service.ts
│   │   │   └── resource.service.ts
│   │   │
│   │   └── validators/
│   │       └── schema.validator.ts
│   │
│   ├── data/
│   │   ├── forgot-password.data.ts
│   │   ├── login.data.ts
│   │   ├── resource.data.ts
│   │   ├── status-codes.data.ts
│   │   └── ui-login.data.ts
│   │
│   ├── fixtures/
│   │   ├── api.fixture.ts
│   │   └── ui.fixture.ts
│   │
│   └── ui/
│       ├── assertions/
│       │   └── login.assertions.ts
│       │
│       ├── components/
│       │   └── flash-message.component.ts
│       │
│       └── pages/
│           ├── dropdown.page.ts
│           ├── forgot-password.page.ts
│           ├── home.page.ts
│           └── login.page.ts
│
├── test-results/
│
├── tests/
│   ├── api/
│   └── e2e/
│
├── .gitignore
├── .prettierrc
├── allure.config.ts
├── docker-compose.yml
├── eslint.config.mjs
├── package-lock.json
├── package.json
├── playwright.config.ts
├── README.md
└── tsconfig.json
```

The framework follows separation of responsibilities:

- API layer
- UI layer
- Fixtures
- Test data
- Assertions
- Validators
- Environment configuration

---

# Framework Architecture

The framework follows several engineering principles:

- SOLID
- DRY
- KISS
- Page Object Model
- Page Component Object
- Service Layer Pattern
- Dependency Injection through Playwright Fixtures

This approach keeps tests independent, reusable and easy to maintain.

---

# Environment Configuration

Separate environments are supported:

```
config/env

dev.env
stage.env
prod.env
```

Environment selection:

```bash
ENV=dev npm test
```

---

# Test Coverage

## API Tests

Implemented scenarios:

- Successful user authentication
- Authentication with invalid credentials
- Resource list retrieval
- JSON Schema validation
- Resource creation
- CRUD workflow validation
- HTTP status code verification
- Response time validation

---

## E2E Tests

Implemented scenarios:

- Successful UI login
- Negative UI login
- Navigation between application pages
- Form validation
- Data-driven test execution
- Boundary value validation

---

# Running Tests

## Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

## Run all tests

```bash
npm test
```

---

## Run API tests

```bash
npm run test:api
```

---

## Run E2E tests

```bash
npm run test:e2e
```

---

## Run Smoke tests

```bash
npx playwright test --grep @smoke
```

---

## Debug mode

```bash
npm run test:debug
```

---

## Headed mode

```bash
npm run test:headed
```

---

# Reports

Generate Playwright report

```bash
npm run test:report
```

Generate Allure report

```bash
npm run allure:generate
npm run test:allure
```

---

# Code Quality

Run ESLint

```bash
npm run lint
```

Auto fix

```bash
npm run lint:fix
```

Format code

```bash
npm run format
```

---

# Docker

Build and execute

```bash
docker compose up --build
```

---

# Continuous Integration

GitHub Actions pipeline performs:

- dependency installation
- Playwright browser installation
- lint execution
- API test execution
- E2E test execution
- HTML report generation
- Allure artifacts publishing

The pipeline is triggered automatically on:

- push
- pull request

---

# Test Strategy

The framework follows the Test Pyramid.

```
            UI (E2E)
         Integration
            API
         Unit Tests
```

Priority is given to API testing because:

- faster execution
- lower maintenance cost
- earlier defect detection
- higher stability

E2E tests cover only critical user journeys.

---

# Test Data Strategy

Test data follows these principles:

- isolated
- repeatable
- deterministic
- independent

Where possible:

- data is created through API
- each test is independent
- cleanup is performed after execution

---

# Design Decisions

## Why TypeScript?

- aligns with the frontend technology stack
- excellent Playwright support
- strong typing
- improved maintainability
- easier onboarding for developers

---

## Why Playwright?

- modern architecture
- native parallel execution
- built-in waiting mechanisms
- cross-browser support
- integrated API testing
- powerful fixtures
- rich reporting capabilities

---

# Future Improvements

Potential enhancements:

- Unit testing (Vitest)
- Contract testing
- Visual regression testing
- Accessibility testing
- Performance monitoring
- Test analytics dashboard
- Automatic test data generation
- Parallel execution optimization

---

# Deliverables

This repository contains:

- Complete automation framework
- API test suite
- UI test suite
- Environment configuration
- GitHub Actions pipeline
- Docker support
- HTML reporting
- Allure reporting
- Testing strategy documentation
- Technology decision documentation
