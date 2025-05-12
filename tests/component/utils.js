import { mount } from '@vue/test-utils';
import {
    PrimeVue,
    Avatar,
    BadgeDirective,
    Button,
    ConfirmationService,
    DialogService,
    Divider,
    Image,
    PanelMenu,
    ProgressBar,
    Ripple,
    Sidebar,
    StyleClass,
    ToastService,
    Toolbar,
    Tooltip,
} from '@/vendor/components';
import i18n from '@/i18n';
import router from '@/router';

export async function pmount(
    component,
    options = { global: { components: {}, directives: {}, plugins: [] } }
) {
    if (!options.global) {
        options.global = {};
    }
    options.global.components = {
        ...options.global.components,
        PAvatar: Avatar,
        PButton: Button,
        PDataView: DataView,
        PDivider: Divider,
        PImage: Image,
        PPanelMenu: PanelMenu,
        PProgressBar: ProgressBar,
        PSidebar: Sidebar,
        PToolbar: Toolbar,
    };
    options.global.directives = {
        ...options.global.directives,
        tooltip: Tooltip,
        badge: BadgeDirective,
        ripple: Ripple,
        styleclass: StyleClass,
    };
    let plugins = [
        PrimeVue,
        ConfirmationService,
        DialogService,
        ToastService,
        await i18n(),
        router,
    ];
    if (!options.global.plugins) {
        options.global.plugins = [];
    }
    options.global.plugins.push(...plugins);
    return mount(component, options);
}

export async function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}
