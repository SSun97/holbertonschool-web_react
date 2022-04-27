import { fromJS } from 'immutable';

function getImmutableObject(object) {
  return fromJS(object);
}

// const getImmutableObject = (object) => {
//     return fromJS(object)
// } also fine

export default getImmutableObject;
