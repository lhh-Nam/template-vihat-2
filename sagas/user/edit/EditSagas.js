import { call, put, delay } from 'redux-saga/effects';

import EditActions from '../../../redux/user/EditRedux';

import EditAPIs from '../../../services/APIs/user/EditAPIs';

import { getTimestamp, getDelayTime } from '../../../utils/DateUtils';
import { validateResp, getErrorMsg } from '../../../utils/StringUtils';

export function* getEdits(action) {
    const { classify, params } = action;
    const startReqAt = getTimestamp();
    try {
        let resp = yield call(EditAPIs.getEdits, params);
        yield delay(getDelayTime(startReqAt, 's', 2));
        if (validateResp(resp)) {
            yield put(EditActions.getEditsSuccess(classify, resp.payload));
        } else throw resp;
    } catch (error) {
        //yield put(EditActions.editCommonFailure(classify, getErrorMsg(error)));
    }
}