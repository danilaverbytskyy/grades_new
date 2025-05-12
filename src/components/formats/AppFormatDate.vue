<template>
    {{ computedValue }}
</template>
<script>
import Formatter from '@/utils/Formatter';
export default {
    name: 'AppFormatDate',
    props: ['value'],
    computed: {
        /**
         * Преобразует объект даты в строку
         * @returns {string}
         */
        computedValue() {
            return Formatter.formatDate(this.value);
        },
    },
};
</script>
