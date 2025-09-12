module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testMatch: ['<rootDir>/tests/unit/**/*.test.jsx'],
  reporters: [
    'default',
    ['jest-html-reporter', {
      pageTitle: 'Test Report',
      outputPath: './test-resultsJEST/jest-report.html',
      includeFailureMsg: true,
      includeConsoleLog: true,
    }],
  ],
  //collectCoverage: true,
  //collectCoverageFrom: [
  //  'src/**/*.{js,jsx}',
  /*  '!src/index.js',
    '!src/App.jsx',
    '!src/main.jsx',
    '!src/reportWebVitals.js',
    '!src/setupTests.js',
  ],
  coverageDirectory: './test-resultsCOVERAGE/coverage',
  coverageReporters: ['text', 'html'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },  
  verbose: false, // Terminalde daha kısa raporlar için verbose modunu kapat
  errorOnDeprecated: false,
  */
};
