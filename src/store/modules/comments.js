import * as commentsApi from "../../api/comments";

const ADD_COMMENTS = "ADD_COMMENTS";
const DELETE_COMMENTS = "DELETE_COMMENTS";

export const add_comment = (detail) => ({ type: ADD_COMMENTS, detail });
export const delete_comment = (id) => ({ type: DELETE_COMMENTS, id });

export const initialState = [
  {
    id: 1,
    title: "연습임돠",
  },
  {
    id: 2,
    title: "연습",
  },
];

export default function comments(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENTS:
      return state.concat(action.detail);
    case DELETE_COMMENTS:
      return state.filter((comment) => comment.id !== action.id);
    default:
      return state;
  }
}
