import { createStore } from 'redux';
import reducer from '../src/config/redux/reducer';



// function teste(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case 'SYNC':
//       return {
//         ...state,
//         [action.reducerName]: action.behavior && action.behavior === 'include-array'
//           ? state[action.reducerName]
//             ? [...state[action.reducerName], action.reducerValue]
//             : [action.reducerValue]
//           : action.reducerValue
//       };
//     default:
//       return state;
//   }
// }
console.log(reducer)

const store = createStore(reducer);

export default store;