import * as commentsApi from "../../api/comments";

const ADD_COMMENTS = "ADD_COMMENTS";
const DELETE_COMMENTS = "DELETE_COMMENTS";
const GET_COMMENTS = "GET_COMMENTS";
const GET_SUCCESS = "GET_SUCCESS";
const GET_ERROR = "GET_ERROR";
const GET_LENGTH = "GET_LENGTH";
const GET_PAGES = "GET_PAGES";

export const add_comment = (detail) => ({ type: ADD_COMMENTS, detail });
export const delete_comment = (id) => ({ type: DELETE_COMMENTS, id });
export const get_pages = (page) => ({ type: GET_PAGES, page });
export const getLength = () => async (dispatch) => {
  try {
    const pages = await commentsApi.totalComments();
    dispatch({ type: GET_LENGTH, pages });
  } catch (e) {
    dispatch({ type: GET_ERROR, error: e });
  }
};
export const getComments = (page) => async (dispatch) => {
  dispatch({ type: GET_COMMENTS });
  try {
    const comments = await commentsApi.getComments(page);
    dispatch({ type: GET_SUCCESS, comments });
  } catch (e) {
    dispatch({ type: GET_ERROR, error: e });
  }
};

export const initialState = {
  loading: false,
  data: null,
  error: null,
  pages: null,
  page: 1,
};

export default function comments(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENTS:
      return state.concat(action.detail);
    case DELETE_COMMENTS:
      return state.filter((comment) => comment.id !== action.id);
    case GET_COMMENTS:
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
    case GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.comments,
        error: null,
      };
    case GET_ERROR:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.error,
      };
    case GET_LENGTH:
      return {
        ...state,
        pages: action.pages,
      };
    case GET_PAGES:
      return {
        ...state,
        page: action.page,
      };
    default:
      return state;
  }
}
