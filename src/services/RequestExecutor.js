import { useLayoutStore } from '@/store/layout';
import { IS_TEST_MODE } from '@/utils/Env';

/** Реализация HTTP-клиента (вместо axios). Методы: get, post, put, delete */
class RequestExecutor {
    /** @public Базовый url - api/(rest rpc cursor)/schema/package/ */
    baseUrl;
    /** @public Флаг, вкл/выкл маску */
    loadingMask;
    /** Ассоциативный массив экземпляров AbortController (для возможности отмены запроса) */
    #abortCtrls;

    constructor() {
        if (IS_TEST_MODE) {
            this.baseUrl = import.meta.env.bamboo_baseUrlForTest;
        } else {
            this.baseUrl = '';
        }
        this.loadingMask = true; //отключать, если не требуется глобальная маска

        this.#abortCtrls = {};

        console.info('%cRequest executor init!', 'color: lightGreen;');
    }

    #initRequest = {
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
    };

    /**
     * Сеттер для эдишена, который будет использоваться для подключения к БД
     * @param {string} oracleEditionName
     */
    setOracleEditionName(oracleEditionName) {
        this.#initRequest.headers['Oracle-edition-name'] = oracleEditionName;
    }

    /**
     * GET
     * @param {string} url Endpoint.
     * @param {number} [code] Код, если есть.
     * @param {boolean} [needAbort] Нужно ли отменять предыдущий запрос при совпадении
     * @return {Promise}
     */
    get(url, code, needAbort) {
        return this.execute(
            code ? url + '/' + code : url,
            false,
            { ...this.#initRequest, method: 'GET' },
            null,
            needAbort
        );
    }

    /**
     * POST
     * @param {string} url Endpoint.
     * @param {object} data Объект с данными. Будет помещён в тело запроса.
     * @param {boolean} [needAbort] Нужно ли отменять предыдущий запрос при совпадении
     * @return {Promise}
     */
    post(url, data, needAbort) {
        return this.execute(
            url,
            false,
            { ...this.#initRequest, method: 'POST' },
            data,
            needAbort
        );
    }

    /**
     * PUT
     * @param {string} url Endpoint.
     * @param {number} code Код.
     * @param {object} data Объект с данными. Будет помещён в тело запроса.
     * @return {Promise}
     */
    put(url, code, data) {
        return this.execute(
            url + '/' + code,
            false,
            { ...this.#initRequest, method: 'PUT' },
            data
        );
    }

    /**
     * DELETE
     * @param {string} url Endpoint.
     * @param {number} code Код.
     * @return {Promise}
     */
    delete(url, code) {
        return this.execute(url + '/' + code, false, {
            ...this.#initRequest,
            method: 'DELETE',
        });
    }

    /**
     * EXECUTE
     * @param {string} url Endpoint.
     * @param {boolean} [exact] не подставлять baseUrl
     * @param {object} [init] параметры запроса
     * @param {object} [data] тело запроса
     * @param {boolean} [needAbort] Нужно ли отменять предыдущий запрос при совпадении
     * @return {Promise}
     */
    async execute(url, exact, init, data, needAbort) {
        let layoutStore;
        if (!IS_TEST_MODE) {
            layoutStore = useLayoutStore();
            if (this.loadingMask) layoutStore.setIsLoading(true);
        }

        const abortCtrlKey = init?.method + url;

        try {
            if (this.#abortCtrls[abortCtrlKey]?.signal)
                this.#abortCtrls[abortCtrlKey].abort();

            if (needAbort) {
                this.#abortCtrls[abortCtrlKey] = new AbortController();
                init = {
                    ...init,
                    signal: this.#abortCtrls[abortCtrlKey]?.signal,
                };
            }

            if (data) init = { ...init, body: JSON.stringify(data) };

            const location = exact ? url : this.baseUrl + url;

            if (IS_TEST_MODE) {
                init.headers.Authorization =
                    'Basic ' +
                    btoa(
                        import.meta.env.bamboo_adLogin +
                            ':' +
                            import.meta.env.bamboo_adPassword
                    );
            }

            const response = await fetch(location, init);

            if (response.status === 404) throw new Error('Not found!');
            if (response.status === 500) throw new Error(await response.text());

            return await response.json();
        } catch (error) {
            console.error(error);
            throw new Error(error);
        } finally {
            if (this.loadingMask && layoutStore) {
                layoutStore.setIsLoading(false);
            }
        }
    }
}

export default new RequestExecutor();
