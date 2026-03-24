# Playwright E2E Automation - E-commerce Portfolio

Playwright + TypeScript framework focused on end-to-end testing for `saucedemo.com`.
The objective is to validate critical commerce flows with a clean architecture and CI-ready execution.

## Project Goals

- Validate business-critical flows (login, inventory, cart, checkout)
- Demonstrate maintainable automation design
- Execute tests on Chromium, Firefox, and WebKit
- Integrate test execution into CI/CD
- Preserve failure evidence for fast debugging

## Test Coverage

### Core Flows

- Login with valid and invalid credentials
- Inventory list and product interactions
- Product sorting
- Add/remove items in cart
- End-to-end checkout

### Validation Scenarios

- Login error handling
- Checkout form validation for empty fields
- Cart state consistency checks

## Architecture

- Page Object Model (POM) for UI abstraction
- Reusable test data and helpers
- Clear separation of concerns (`pages/`, `tests/`, `fixtures/`)
- Dynamic, resilient locators for scalability

## Tech Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions

## CI/CD

The GitHub Actions workflow runs on each push and pull request, executes the suite in Chromium/Firefox/WebKit, and publishes test artifacts.

Artifacts include:

- HTML report
- Test results.
- Screenshots and traces for failures

## Reporting and Debugging

- Playwright HTML report
- Trace Viewer for failed tests
- Screenshots on failure
- Video recordings on failure

## Run Locally

```bash
npm ci
npx playwright install
npx playwright test
```

Open the report:

```bash
npx playwright show-report
```

## Project Structure

```text
.
|-- .github/workflows/       # CI pipeline
|-- fixtures/                # Test data
|-- pages/                   # Page Object Model classes
|-- tests/                   # E2E specs
|-- playwright.config.ts     # Playwright configuration
`-- tsconfig.json            # TypeScript configuration
```

## Future Improvements

- API-based test data setup
- Auth state reuse via storage state
- Tag-based execution (`smoke`, `regression`)
- Visual validation
- Performance testing integration

## What This Portfolio Demonstrates

- Scalable automation framework design
- Practical QA decision-making
- CI-ready test suite implementation
- Clean, maintainable, reusable test code
