import { defineStore } from 'pinia';
import api from '@/api/api';

export const useGradesStore = defineStore('grades', {
    state: () => ({
        students: [],
    }),

    actions: {
        async getStudents() {
            this.students = await api.student.getStudents();
        },
    },
});
