import { devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
    /* Для запуска конкретного тэста */
    testMatch: '*.pw.js',
    testDir: './tests/e2e',
    /* Maximum time one test can run for. */
    timeout: 30 * 1000,
    expect: {
        /**
         * Maximum time expect() should wait for the condition to be met.
         * For example in `await expect(locator).toHaveText();`
         */
        timeout: 5000,
    },
    use: {
        /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
        actionTimeout: 0,
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry',
        /* Only on CI systems run the tests headless */
        httpCredentials: {
            username: process.env.bamboo_adLogin || '',

            password: process.env.bamboo_adPassword || '',
        },
    },
    /* Configure projects for major browsers */
    projects: [
        {
            name: 'firefox',
            use: {
                ...devices['Desktop Firefox'],
            },
        },
        /* Раскомментировать если нужно запускать в других браузерах */
        // {
        //     name: 'chromium',
        //     use: {
        //         ...devices['Desktop Chrome'],
        //     },
        // },
        // {
        //     name: 'webkit',
        //     use: {
        //         ...devices['Desktop Safari'],
        //     },
        // },

        /* Test against mobile viewports. */
        // {
        //   name: 'Mobile Chrome',
        //   use: {
        //     ...devices['Pixel 5'],
        //   },
        // },
        // {
        //   name: 'Mobile Safari',
        //   use: {
        //     ...devices['iPhone 12'],
        //   },
        // },

        /* Test against branded browsers. */
        // {
        //   name: 'Microsoft Edge',
        //   use: {
        //     channel: 'msedge',
        //   },
        // },
        // {
        //   name: 'Google Chrome',
        //   use: {
        //     channel: 'chrome',
        //   },
        // },
    ],
    /* Folder for test artifacts such as screenshots, videos, traces, etc. */
    outputDir: './playwright/report/results/',
};

export default config;
// module.exports = config;
