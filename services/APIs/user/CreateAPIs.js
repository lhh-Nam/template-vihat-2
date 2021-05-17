import { doRequest } from '../../../utils/CoreUtils';

import { domains } from '../../../constants';

export default Object.freeze({
    getCreates: async ({ id, lang } = {}) => {
        let url = `${domains.auth}role/get_template?tenant_id=${id}&lng=${lang}`;
        return await doRequest('get', url);
    },
});

//https://auth-v1-stg.omicrm.com/role/get_template?tenant_id=vihat_omi_default&lng=vi