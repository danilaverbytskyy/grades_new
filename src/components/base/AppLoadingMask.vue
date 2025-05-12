<template>
    <div
        v-if="getIsLoading"
        class="layout-loading-spinner"
    >
        <p-progress-spinner></p-progress-spinner>
    </div>
</template>

<script>
import { useLayoutStore } from '@/store/layout';
import { mapState } from 'pinia';
export default {
    name: 'AppLoadingMask',
    computed: {
        ...mapState(useLayoutStore, ['getIsLoading']),
    },
};
</script>

<style lang="scss">
.layout-loading-spinner {
    position: absolute;
    top: calc(50vh - 50px);
    left: calc(50vw - 50px);
}
</style>
