import * as types from '../constants/actionTypes';

export const fetchNodeBlocks = (nodeUrl) => {
    return async (dispatch) => {
        try {
            dispatch(fetchNodeBlocksStart(nodeUrl));
            const res = await fetch(`${nodeUrl}/api/v1/blocks`);

            if(res.status >= 400) {
                dispatch(fetchNodeBlocksFailure(nodeUrl));
            }

            const json = await res.json();

            dispatch(fetchNodeBlocksSuccess(nodeUrl, json.data));
        } catch (err) {
            dispatch(fetchNodeBlocksFailure(nodeUrl, err));
        }
    };
};

const fetchNodeBlocksStart = (nodeUrl) => {
    return {
        type: types.FETCH_NODE_BLOCKS_START,
        nodeUrl,
    };
};

const fetchNodeBlocksSuccess = (nodeUrl, res) => {
    return {
        type: types.FETCH_NODE_BLOCKS_SUCCESS,
        nodeUrl,
        res
    };
};

const fetchNodeBlocksFailure = (nodeUrl, err) => {
    return {
        type: types.FETCH_NODE_BLOCKS_FAILURE,
        nodeUrl,
        err
    };
};
