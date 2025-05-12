import { createI18n } from 'vue-i18n';

/** Загрузка сообщений выбраной локали */
async function loadLocaleMessages() {
    document.cookie =
        'CMW_WEB_APP_LANG=' + import.meta.env.VITE_APP_I18N_LOCALE || 'en';
    const locales = import.meta.glob('./locales/*.json');
    const messages = {};
    for (const path in locales) {
        const module = await locales[path]();
        const matched = path.match(/([A-Za-z0-9-_]+)\./i);
        if (matched && matched.length > 1) {
            const localeName = matched[1];
            messages[localeName] = module;
        }
    }

    return messages;
}

export default (async function () {
    return createI18n({
        locale: import.meta.env.VITE_APP_I18N_LOCALE || 'en',
        fallbackLocale: import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE || 'en',
        globalInjection: true,
        // @ts-ignore
        messages: await loadLocaleMessages(),
    });
});
