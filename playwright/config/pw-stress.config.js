import config from './pw-base.config';

/* Запуск конкретного теста */
// config.testMatch = '';
config.testDir = '../../tests/e2e';

/* The number of times to repeat each test, useful for debugging flaky tests. */
// config.repeatEach = 10;
config.repeatEach = 1;
/* Failing tests will be retried multiple times until they pass */
config.retries = 0;
/* Opt out of parallel tests */
config.workers = 4;
/* Reporter to use. See https://playwright.dev/docs/test-reporters */
config.reporter = [['html', { outputFolder: '../../playwright/html-report/' }]];
/* Чтобы не было кучи окон */
config.use.headless = true;
config.use.baseURL = 'http://localhost:5173';

config.testDir = '../../tests/e2e';
config.outputDir = './report/results/';

export default config;
