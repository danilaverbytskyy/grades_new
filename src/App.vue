<template>
    <router-view></router-view>
</template>

<script>
import ThemeSrv from '@/services/ThemeSrv.js';
import pkg from '@/../package.json';

export default {
    beforeCreate() {
        ThemeSrv.setTheme();
    },
    async created() {
        document.title += ' ' + pkg.version;
    },
};
</script>
