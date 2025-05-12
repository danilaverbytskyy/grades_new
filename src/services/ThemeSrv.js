import StorageSrv from './StorageSrv.js';
const THEME_KEY = 'CURRENT_THEME';

class ThemeSrv {
    /** @public Темная тема */
    isDark;
    constructor() {
        this.isDark = StorageSrv.get(THEME_KEY) ?? false;
    }
    /** Меняет тему */
    changeTheme() {
        this.isDark = !this.isDark;
        StorageSrv.set(THEME_KEY, this.isDark);
        this.setTheme();
    }

    /* Устанавливает модификатор темы в дом */
    setTheme() {
        const element = document.querySelector('html');
        if (this.isDark) {
            element.classList.add('dark');
        } else {
            element.classList.remove('dark');
        }
    }
}

export default new ThemeSrv();
