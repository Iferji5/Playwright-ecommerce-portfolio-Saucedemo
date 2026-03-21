# Playwright E2E Automation - E-commerce Portfolio

This project is a Playwright + TypeScript test automation framework designed to validate critical user flows in an e-commerce application.
It demonstrates modern QA practices including end-to-end testing, reusable architecture, and CI/CD integration with GitHub Actions.

## Project Goals

- Validate real business flows (login, product selection, cart, checkout)
- Showcase a maintainable test architecture
- Run tests across multiple browsers
- Integrate automated testing into a CI/CD pipeline
- Provide debugging artifacts (reports, traces, screenshots)

## Test Coverage

The framework covers both positive and negative scenarios:

### Core flows

- User login (valid and invalid)
- Product inventory validation
- Sorting functionality
- Add/remove products from cart
- Complete checkout process

### Validation scenarios

- Login failure handling
- Checkout form validation (empty fields)
- Cart state validation

## Architecture

The project follows a clean and scalable structure:

- Page Object Model (POM) for UI abstraction
- Reusable helpers and test data
- Separation of concerns (pages, tests, fixtures)
- Dynamic locators for flexibility and scalability

## Tech Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions (CI/CD)

## CI/CD Integration

The project includes a GitHub Actions pipeline that:

- Runs tests on every push and pull request
- Executes tests across:
  - Chromium
  - Firefox
  - WebKit
- Uploads:
  - HTML reports
  - Test results
  - Debugging artifacts (screenshots, traces)

## Reporting and Debugging

- HTML test reports
- Trace viewer for failed tests
- Screenshots on failure
- Video recording on failure

## How to Run Locally

```bash
npm ci
npx playwright install
npm test
```

## Future Improvements

- API-based test data setup
- Authentication reuse (storage state)
- Tag-based execution (smoke/regression)
- Visual testing
- Performance testing integration

## What this project demonstrates

This project is not only about automating tests, but about:

- Designing scalable automation frameworks
- Applying real QA decision-making
- Building CI-ready test suites
- Writing clean, maintainable, and reusable code
