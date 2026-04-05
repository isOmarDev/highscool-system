# Characterization Testing for High School System

This project demonstrates best practices for characterization testing in a high school management system. It focuses on creating robust, maintainable tests using builders for test data creation and ensuring idempotent test execution.

## Overview

Characterization tests capture the current behavior of a system, serving as a safety net during refactoring or when working with legacy code. This project showcases:

- **Characterization Tests**: Tests that document and verify existing system behavior
- **Test Data Builders**: Fluent APIs for creating complex test fixtures
- **Idempotent Tests**: Tests that can run multiple times without side effects

## Architecture

The system models a high school environment with:

- Students enrolled in classes
- Assignments given to classes
- Student submissions and grading
- Report cards and grade reports

### Database Schema

Built with Prisma and PostgreSQL, featuring:

- Student management
- Class enrollment
- Assignment tracking
- Submission and grading workflows
- Report generation

## Testing Strategy

### Characterization Tests

Located in `tests/e2e/`, these tests use Cucumber (via jest-cucumber) to define behavior in plain English while capturing the current API responses and database state.

Example test structure:

```
Feature: Create Student
  Scenario: Successfully create a student
    Given I want to create a student with name "John Doe" and email "john@example.com"
    When I send a request to create a student
    Then the new student record should be created successfully
```

### Test Data Builders

Located in `tests/fixtures/`, builders provide a fluent interface for creating test data:

```typescript
const student = await new StudentBuilder()
  .withName('Jane Smith')
  .withEmail('jane@example.com')
  .build();
```

Builders use Prisma's upsert operations to ensure idempotent data creation.

### Idempotent Test Execution

Each test runs in isolation:

- Database is reset before each test (`afterEach` hook)
- Builders create fresh data for each test scenario
- No test dependencies or shared state

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file with your database connection string:

   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/highschool_test"
   ```

4. Set up the database:

   ```bash
   npm run db:setup
   ```

   This will:
   - Run migrations
   - Generate Prisma client
   - Seed initial data

### Running Tests

#### All Tests

```bash
npm test
```

#### End-to-End Tests Only

```bash
npm run test:e2e
```

#### Watch Mode (for development)

```bash
npm run test:dev
```

### Database Management

#### View Database

```bash
npm run db:studio
```

#### Reset Database

```bash
npm run db:reset
```

#### Run Migrations

```bash
npm run db:migrate
```

### Development

#### Start Development Server

```bash
npm run dev
```

#### Build Project

```bash
npm run build
```

#### Start Production Server

```bash
npm start
```

## Project Structure

```
├── src/                    # Application source code
│   ├── database.ts        # Prisma client setup
│   └── index.ts           # Express server
├── prisma/                # Database schema and migrations
│   ├── schema.prisma      # Prisma schema definition
│   ├── seed.ts           # Database seeding script
│   └── migrations/        # Migration files
├── tests/                 # Test suite
│   ├── setup.ts          # Jest global setup
│   ├── e2e/              # End-to-end characterization tests
│   ├── features/         # Cucumber feature files
│   └── fixtures/         # Test data builders and utilities
├── generated/             # Generated Prisma client
└── package.json          # Project dependencies and scripts
```

## Key Concepts

### Characterization Testing

Characterization tests document what the system currently does, not what it should do. They help:

- Understand existing behavior
- Prevent regressions during refactoring
- Build confidence when modifying code

### Builder Pattern for Test Data

Builders provide:

- Fluent, readable test data creation
- Default values with customization options
- Idempotent operations (safe to run multiple times)
- Complex object relationships

### Idempotent Tests

Tests are designed to:

- Run in any order
- Not depend on other tests
- Leave the system in a clean state
- Be repeatable without side effects

## Contributing

When adding new features:

1. Create characterization tests first to capture current behavior
2. Use builders for test data creation
3. Ensure tests are idempotent
4. Update this README if the testing approach changes

## Technologies Used

- **Node.js** - Runtime environment
- **Express** - Web framework
- **Prisma** - Database ORM
- **PostgreSQL** - Database
- **Jest** - Testing framework
- **jest-cucumber** - BDD testing
- **Faker.js** - Test data generation
