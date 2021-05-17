import { sagasMappingEffects } from '../../../utils/CoreUtils';

import { Types } from '../../../redux/user/CreateRedux';
import * as Sagas from './CreateSagas';

const keys = [
    ['getCreates'],
];

/* ------------- Connect Types To Sagas ------------- */

export default sagasMappingEffects(keys, Types, Sagas);