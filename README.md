# Web Automation Project

This project uses Playwright with TypeScript to automate web application testing.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

- Run tests in headless mode:
```bash
npm test
```

- Run tests in headed mode:
```bash
npm run test:headed
```

- Run tests in debug mode:
```bash
npm run test:debug
```

## GitHub Actions

The project includes GitHub Actions configuration that automatically runs tests on:
- Push to main/master branch
- Pull requests to main/master branch

Test results are uploaded as artifacts and can be viewed in the GitHub Actions tab.