import * as ActionTypes from '../constants/actionTypes';

import configureStore from './configureStore';

describe('Store', () => {
  const initialState = {
    nodes: {
      list: [
        { url: 'a.com', online: false, name: null, loading: false },
        { url: 'b.com', online: false, name: null, loading: false },
        { url: 'c.com', online: false, name: null, loading: false },
        { url: 'd.com', online: false, name: null, loading: false }
      ],
    },
    blocks: {}
  };

  beforeAll(() => {});
  afterAll(() => {});

  it('should display results when necessary data is provided', () => {
    const store = configureStore(initialState);

    const actions = [
      { type: ActionTypes.CHECK_NODE_STATUS_SUCCESS, node: initialState.nodes.list[0], res: {node_name: 'alpha'} },
      { type: ActionTypes.CHECK_NODE_STATUS_SUCCESS, node: initialState.nodes.list[1], res: {node_name: 'beta'} },
      { type: ActionTypes.CHECK_NODE_STATUS_SUCCESS, node: initialState.nodes.list[0], res: {node_name: 'gamma'} },
      { type: ActionTypes.CHECK_NODE_STATUS_SUCCESS, node: initialState.nodes.list[2], res: {node_name: 'delta'} },
      { type: ActionTypes.CHECK_NODE_STATUS_SUCCESS, node: initialState.nodes.list[1], res: {node_name: 'epsilon'} },
      { type: ActionTypes.CHECK_NODE_STATUS_SUCCESS, node: initialState.nodes.list[0], res: {node_name: 'zeta'} },
      { type: ActionTypes.CHECK_NODE_STATUS_SUCCESS, node: initialState.nodes.list[0], res: {node_name: 'eta'} },
      { type: ActionTypes.CHECK_NODE_STATUS_SUCCESS, node: initialState.nodes.list[0], res: {node_name: 'theta'} },
      { type: ActionTypes.FETCH_NODE_BLOCKS_SUCCESS, nodeUrl: initialState.nodes.list[0].url, res: [{id: '1', attributes: {data: 'data'}}]},
    ];
    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    const expected = {
      nodes: {
        list: [
          { url: 'a.com', online: true, name: 'theta', loading: false },
          { url: 'b.com', online: true, name: 'epsilon', loading: false },
          { url: 'c.com', online: true, name: 'delta', loading: false },
          { url: 'd.com', online: false, name: null, loading: false }
        ],
      },
      blocks: {
        'a.com': {
          list: [{attributes: {data: 'data'}, id: '1'}],
          loading: false
        }
      }
    };

    expect(actual).toEqual(expected);
  });
});
