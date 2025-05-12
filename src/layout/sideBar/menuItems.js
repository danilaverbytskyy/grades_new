import router from '@/router';

/** @type {import('primevue/menuitem').MenuItem[]} */
export default [
    {
        label: 'Пример меню',
        key: 'main',
        items: [
            {
                label: 'Главная страница',
                key: 'home',
                icon: 'pi shield',
                command: () => router.push('/'),
            },
        ],
    },
];
