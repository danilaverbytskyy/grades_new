import { resolve } from 'node:path';
import i18nExtract from 'vue-i18n-extract';

async function service(args = {}) {
    if (!args.src) {
        console.error(`not specified 'src' argument.`);
        return;
    }

    if (!args.locales) {
        console.error(`not specified 'locales' argument.`);
        return;
    }

    const currentDir = process.cwd();
    const srcFiles = resolve(currentDir, args.src);
    const localeFiles = resolve(currentDir, args.locales);

    const i18nReport = await i18nExtract.createI18NReport({
        vueFiles: srcFiles,
        languageFiles: localeFiles,
        exclude: ['undefined', 'primeVue'],
    });

    if (args.output) {
        await i18nExtract.writeReportToFile(i18nReport, args.output);
    }

    return i18nReport;
}

const args = {};

let prev;

process.argv.forEach((arg) => {
    switch (prev) {
        case '--src':
            args.src = arg;
            break;
        case '--locales':
            args.locales = arg;
            break;
        case '--output':
            args.output = arg;
            break;
    }
    prev = arg;
});
service(args);
