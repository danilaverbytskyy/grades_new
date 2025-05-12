import ReqExec from '@/services/RequestExecutor';
ReqExec.baseUrl = 'api/';

import web_data_api from './web_data_api';

//API methods
export default {
    //аутентификация, не изменять
    auth: {
        // getSession: () => ReqExec.execute('api/auth/getSession', true),
        // getUser: () => ReqExec.execute('api/auth/getUser', true),
    },
    student: {
        getStudents: () => ReqExec.get(web_data_api.rest.student),
    },
};
