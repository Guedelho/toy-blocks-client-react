import {FETCH_NODE_BLOCKS_START, FETCH_NODE_BLOCKS_SUCCESS, FETCH_NODE_BLOCKS_FAILURE} from '../constants/actionTypes';
import initialState from './initialState';

export default function blocksReducer(state = initialState().blocks, action) {
  switch (action.type) {
    case FETCH_NODE_BLOCKS_START:
        return {
            ...state,
            [action.nodeUrl]: {
                loading: true,
            }
        };
    case FETCH_NODE_BLOCKS_SUCCESS:
        return {
            ...state,
            [action.nodeUrl]: {
                loading: false,
                list: action.res
            }
        };
    case FETCH_NODE_BLOCKS_FAILURE:
        return {
            ...state,
            [action.nodeUrl]: {
                loading: false,
                err: action.err
            }
        };
    default:
      return state;
  }
}
