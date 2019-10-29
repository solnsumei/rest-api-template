module.exports = {
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/tests/**/*.js',
    '!src/index.js',
  ],
};
