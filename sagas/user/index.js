import { sagasMappingEffects } from '../../utils/CoreUtils';

import { Types } from '../../redux/user/UserRedux';
import * as Sagas from './UserSagas';

import RoleSagas from './role';
import EditSagas from './edit';
import CreateSagas from './create';

const keys = [
    ['userLogin'],
    ['getUserInfo'],
];

/* ------------- Connect Types To Sagas ------------- */

const UserSagas = sagasMappingEffects(keys, Types, Sagas);

export default [
    ...UserSagas,
    ...RoleSagas,
    ...EditSagas,
    ...CreateSagas,
];