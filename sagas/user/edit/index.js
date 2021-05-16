import { sagasMappingEffects } from '../../../utils/CoreUtils';

import { Types } from '../../../redux/user/EditRedux';
import * as Sagas from './EditSagas';

const keys = [
    ['getEdits'],
];

/* ------------- Connect Types To Sagas ------------- */

export default sagasMappingEffects(keys, Types, Sagas);