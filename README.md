# QA Automation Framework

Automation framework built with TypeScript and Playwright.

## Stack

- TypeScript
- Playwright
- Ajv
- ESLint
- Prettier
- Allure
- GitHub Actions

## Project Structure

```text
config/
docs/
src/
tests/
.github/
docker/
```

## Installation

```bash
npm install
```

## Install Browsers

```bash
npx playwright install
```

## Run All Tests

```bash
npm test
```

## Run API Tests

```bash
npm run test:api
```

## Run E2E Tests

```bash
npm run test:e2e
```

## Run Smoke Tests

```bash
npx playwright test --grep @smoke
```

## Run In Headed Mode

```bash
npm run test:headed
```

## Run With Environment

```bash
ENV=dev npm test
```

Reqres now requires an API key for public API endpoints. Add `REQRES_API_KEY` to the selected file in `config/env/` before running API tests.

## Lint Project

```bash
npm run lint
```

## Generate Allure Report

```bash
npm run allure:generate
npm run test:allure
```

## Docker

```bash
docker compose up --build
```

## CI

Pipeline runs automatically on push and pull request for `main` and `develop`.

Artifacts:

- Playwright Report
- Allure Results
- Test Results
