import { doRequest } from '../../../utils/CoreUtils';

import { domains } from '../../../constants';

export default Object.freeze({
    getEdits: async ({ id, lang } = {}) => {
        let url = `${domains.auth}role/get/id/${id}?lng=${lang}`;
        return await doRequest('get', url);
    },
});

// https://auth-v1-stg.omicrm.com/role/get/id/608fafcbc04c3939ef4b0549?lng=vi