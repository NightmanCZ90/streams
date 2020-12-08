import _ from 'lodash';
import { 
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return {...state, ..._.mapKeys(action.payload, 'id')};

    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload }; //key interpolation.. without the square brackets, it gave me errors

    case DELETE_STREAM:
      return _.omit(state, action.payload) //payload is id from dispatch

    default: 
      return state;
  }
};