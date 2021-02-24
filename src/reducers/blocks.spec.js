import * as ActionTypes from '../constants/actionTypes';
import reducer from './blocks';
import initialState from './initialState';


describe('Reducers::Blocks', () => {
  const getInitialState = () => {
    return initialState().blocks;
  };

  const err = 'error';
  const res = [{id: '1', attributes: { data: 'test1'}}];
  const nodeUrl = 'http://localhost:3002';

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle FETCH_NODE_BLOCKS_START', () => {
    const state = {};
    const action = { type: ActionTypes.FETCH_NODE_BLOCKS_START, nodeUrl };
    const expected = {
      ...state,
      [action.nodeUrl]: {
        loading: true
      }
    };

    expect(reducer(state, action)).toEqual(expected);
  });

  it('should handle FETCH_NODE_BLOCKS_SUCCESS', () => {
    const state = {
      [nodeUrl]: {
        loading: true,
      }
    };
    const action = { type: ActionTypes.FETCH_NODE_BLOCKS_SUCCESS, nodeUrl, res };
    const expected = {
      ...state,
      [action.nodeUrl]: {
        loading: false,
        list: action.res
      }
    };

    expect(reducer(state, action)).toEqual(expected);
  });

  it('should handle FETCH_NODE_BLOCKS_FAILURE', () => {
    const state = {
      [nodeUrl]: {
        loading: true,
      }
    };
    const action = { type: ActionTypes.FETCH_NODE_BLOCKS_FAILURE, nodeUrl, err };
    const expected = {
      ...state,
      [action.nodeUrl]: {
        loading: false,
        err: action.err
      }
    };

    expect(reducer(state, action)).toEqual(expected);
  });
});
