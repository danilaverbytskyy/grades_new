<template>
    <div class="min-h-screen flex relative lg:static surface-ground">
        <div class="min-h-screen flex flex-column relative flex-auto">
            <app-sidebar></app-sidebar>
            <app-topbar></app-topbar>
            <app-main></app-main>
        </div>
        <app-loading-mask></app-loading-mask>
    </div>
</template>
<script>
import AppTopbar from '@/layout/AppTopbar.vue';
import AppSidebar from '@/layout/sideBar/AppSidebar.vue';
import AppMain from '@/layout/AppMain.vue';
import AppLoadingMask from '@/components/base/AppLoadingMask.vue';
export default {
    name: 'AppLayout',
    components: {
        AppTopbar,
        AppSidebar,
        AppMain,
        AppLoadingMask,
    },
};
</script>
