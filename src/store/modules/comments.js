import * as commentsApi from "../../api/comments";

const add_commit = "ADD";
const delete_commit = "DEL";

export const initialState = {};

export default function comments(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
