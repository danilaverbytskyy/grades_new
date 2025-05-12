import config from './pw-base.config';

/* Fail the build on CI if you accidentally left test.only in the source code. */
config.forbidOnly = true;
/* Retry on CI only */
config.retries = 2;
/* Opt out of parallel tests on CI. */
config.workers = 4;
/* Reporter to use. See https://playwright.dev/docs/test-reporters */
config.reporter = [['junit', { outputFile: '../report/e2e.xml' }]];

/* Only on CI systems run the tests headless */
config.use.headless = true;

/* Run your local dev server before starting the tests */
config.webServer = {
    /**
     * Use the dev server by default for faster feedback loop.
     * Use the preview server on CI for more realistic testing.
     */
    command: 'vite preview ../../ --port 5173',
    port: 5173,
    reuseExistingServer: false,
};

config.testDir = '../../tests/e2e';
config.outputDir = '../report/results/';

export default config;
