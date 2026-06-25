# Technology Decision

## Language Choice

TypeScript was selected as the primary language for test automation.

### Reasons

- Alignment with frontend stack.
- Single language across UI and automation.
- Strong typing.
- Better maintainability.
- Faster onboarding.
- Fewer runtime errors through compile-time checks.

## Testing Tools

### UI Testing

Playwright was selected because it provides native parallel execution, built-in auto waiting, cross-browser support and strong debugging tools.

### API Testing

Playwright APIRequestContext was selected because it allows the team to use one framework for UI and API testing.

### Schema Validation

Ajv was selected for JSON schema validation because it is mature, fast and widely used.

## Trade-offs

| Option | Pros | Cons |
| --- | --- | --- |
| TypeScript | Unified stack with frontend | Smaller QA talent pool than Java/Python |
| Python | Backend language alignment | Different language from frontend |
| Java | Enterprise ecosystem | Verbose syntax and heavier setup |

TypeScript provides the best balance between maintainability, scalability and team collaboration.
