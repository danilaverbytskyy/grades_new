import { defineStore } from 'pinia';
import api from '@/api/api';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        session: 1,
        user: 'Студент',
    }),

    actions: {
        async getSession() {
            const data = await api.auth.getSession();
            this.session = data.sessionId;
        },
        async getUser() {
            const data = await api.auth.getUser();
            this.user = data.user;
        },
    },
});
