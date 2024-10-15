// jest.config.cjs
module.exports = {
  testEnvironment: 'jsdom', // Ensures browser-like environment
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], // Loads Jest DOM matchers
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy', // Mocks CSS imports
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Use Babel for JS/JSX transformation
  },
};