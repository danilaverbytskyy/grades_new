import { beforeAll } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';

beforeAll(() => {
    setActivePinia(createPinia());
});

globalThis.matchMedia =
    globalThis.matchMedia ||
    function () {
        return {
            matches: false,
            addListener: () => {},
            removeListener: () => {},
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => false,
        };
    };
