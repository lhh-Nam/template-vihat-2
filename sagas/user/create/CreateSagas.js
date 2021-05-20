import { call, put, delay } from 'redux-saga/effects';

import CreateActions from '../../../redux/user/CreateRedux';

import CreateAPIs from '../../../services/APIs/user/CreateAPIs';

import { getTimestamp, getDelayTime } from '../../../utils/DateUtils';
import { validateResp, getErrorMsg } from '../../../utils/StringUtils';

export function* getCreates(action) {
    const { classify, params } = action;
    const startReqAt = getTimestamp();

    try {
        let resp = yield call(CreateAPIs.getCreates, params);
        yield delay(getDelayTime(startReqAt, 's', 2));
        if (validateResp(resp)) {
            yield put(CreateActions.getCreatesSuccess(classify, resp.payload));
        } else throw resp;
    } catch (error) {
        //yield put(CreateActions.createCommonFailure(classify, getErrorMsg(error)));
    }
}