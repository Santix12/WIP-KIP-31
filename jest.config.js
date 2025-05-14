/** @type {import('jest').Config} */
module.exports = {
  // Automatically clear mock calls, instances, and results before every test
  clearMocks: true,

  // Collect code coverage
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',

  // Test environment
  testEnvironment: 'node',

  // File matching and transformation
  roots: ['<rootDir>/tests', '<rootDir>/src'],
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],

  // Coverage thresholds
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },

  // Verbose reporting
  verbose: true
};