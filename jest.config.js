export default {
  testEnvironment: 'node',
  testTimeout: 10000,
  detectOpenHandles: true,
  forceExit: true,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};