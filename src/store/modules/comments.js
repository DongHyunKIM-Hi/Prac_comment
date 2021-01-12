import * as commentsApi from "../../api/comments";

const ADD_COMMENTS = "ADD_COMMENTS";
const DELETE_COMMENTS = "DELETE_COMMENTS";
const GET_COMMENTS = "GET_COMMENTS";
const GET_SUCCESS = "GET_SUCCESS";
const GET_ERROR = "GET_ERROR";
export const add_comment = (detail) => ({ type: ADD_COMMENTS, detail });
export const delete_comment = (id) => ({ type: DELETE_COMMENTS, id });

export const getComments = () => async (dispatch) => {
  dispatch({ type: GET_COMMENTS });
  try {
    console.log("요청 실행");
    const comments = await commentsApi.getCommets();
    dispatch({ type: GET_SUCCESS, comments });
  } catch (e) {
    dispatch({ type: GET_ERROR, error: e });
  }
};

export const initialState = {
  loading: false,
  data: null,
  error: null,
};

export default function comments(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENTS:
      return state.concat(action.detail);
    case DELETE_COMMENTS:
      return state.filter((comment) => comment.id !== action.id);
    case GET_COMMENTS:
      return {
        loading: true,
        data: null,
        error: null,
      };
    case GET_SUCCESS:
      return {
        loading: false,
        data: action.comments,
        error: null,
      };
    case GET_ERROR:
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      return state;
  }
}
