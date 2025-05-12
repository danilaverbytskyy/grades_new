import config from './pw-base.config';

/* Failing tests will be retried multiple times until they pass */
config.retries = 0;
/* Opt out of parallel tests */
config.workers = 1;
/* Reporter to use. See https://playwright.dev/docs/test-reporters */
config.reporter = [['html', { outputFolder: './playwright/html-report/' }]];
/* Only on CI systems run the tests headless */
config.use.headless = false;
config.use.baseURL = 'http://localhost:5173';

export default config;
