import config from './playwright/config/pw-local.config';
import('dotenv').then((c) => c.config());

config.testMatch = '*.pw.js';

export default config;
