const {devices} = require ('@playwright/test')

const config = {
  testDir: './tests',
  testMatch: '**/*.test*.js',

  timeout: 10000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 10000,
    ignoreHTTPSErrors: true,
  },
  workers: 1,
  reporter: 'line',
  projects: [
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Galaxy S9+'],
      },
    },
  ],
};

module.exports = config;
