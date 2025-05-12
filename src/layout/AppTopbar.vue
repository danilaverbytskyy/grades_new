<template>
    <p-toolbar
        id="toolbar"
        class="p-0 px-3"
    >
        <template #start>
            <div class="flex">
                <router-link to="/">
                    <p-image
                        :src="srcLogo"
                        alt="SMLab"
                        height="35"
                    ></p-image>
                </router-link>
            </div>
            <p-button
                icon="pi pi-bars"
                class="p-button-rounded p-button-text p-button-plain p-button-lg ml-2"
                @click="visibleMenu = !visibleMenu"
            ></p-button>
        </template>

        <template #end>
            <p-button
                id="changeTheme"
                icon="mdi mdi-theme-light-dark"
                class="p-button-rounded p-button-text p-button-lg mr-2"
                style="width: 40px; height: 40px"
                @click="chooseTheme"
            ></p-button>
            <p-button
                :label="$i18n.locale.toUpperCase()"
                class="p-button-rounded text-xs p-button-sm"
                @click="changeLocale"
            ></p-button>
            <p-divider layout="vertical mr-3 ml-3"></p-divider>
            <p-avatar
                icon="pi pi-user"
                class="mr-2"
                shape="circle"
            >
            </p-avatar>
            <span id="adUser"> {{ authUser }} </span>
        </template>
    </p-toolbar>
</template>

<script>
import ThemeSrv from '@/services/ThemeSrv.js';
import { mapState, mapWritableState } from 'pinia';
import { useLayoutStore } from '@/store/layout';
import { useAuthStore } from '@/store/auth';

export default {
    name: 'AppTopbar',
    components: {},
    data() {
        return {
            srcLogo: new URL('@/assets/images/logo_gavr.png', import.meta.url),
        };
    },
    methods: {
        changeLocale() {
            this.$i18n.locale = this.$i18n.locale === 'en' ? 'ru' : 'en';
            const translate = this.$tm;
            // @ts-ignore
            this.$primevue.config.locale = translate('primeVue');
            document.cookie = 'CMW_WEB_APP_LANG=' + this.$i18n.locale;
        },
        chooseTheme() {
            ThemeSrv.changeTheme();
        },
    },
    computed: {
        ...mapWritableState(useLayoutStore, ['visibleMenu']),
        ...mapState(useAuthStore, {
            authUser: 'user',
        }),
    },
};
</script>
