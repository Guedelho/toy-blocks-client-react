import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './blocks';

describe('Blocks Actions', () => {
  beforeAll(() => {});
  afterAll(() => {});

  const nodeUrl = 'http://localhost:3002';

  it('should create an action to fetch node blocks', () => {
    const dispatch = jest.fn();
    const expected = {
      type: ActionTypes.FETCH_NODE_BLOCKS_START,
      nodeUrl
    };

    // we expect this to return a function since it is a thunk
    expect(typeof (ActionCreators.fetchNodeBlocks(nodeUrl))).toEqual('function');
    // then we simulate calling it with dispatch as the store would do
    ActionCreators.fetchNodeBlocks(nodeUrl)(dispatch);
    // finally assert that the dispatch was called with our expected action
    expect(dispatch).toBeCalledWith(expected);
  });


});
