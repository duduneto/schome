import INITIAL_STATE from './initState';
import { reducer as syncCallReducer } from './syncCall';
// import { reducer as syncManyCallsReducer } from './syncManyCalls';
// import { reducer as asyncCallReducer } from './asyncCall';

const reducers = [syncCallReducer];

export default function reducer(state = INITIAL_STATE, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
