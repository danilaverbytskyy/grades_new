<template>
    <h2 style="text-align: center">Home view</h2>
    <h2 style="text-align: center">{{ gradesStore.students }}</h2>
</template>
<script>
import { useGradesStore } from '@/store/grades.js';

export default {
    name: 'HomeView',
    computed: {
        gradesStore() {
            return useGradesStore();
        },
    },
    async mounted() {
        await this.gradesStore.getStudents();
        console.log(this.gradesStore.students);
    },
};
</script>
