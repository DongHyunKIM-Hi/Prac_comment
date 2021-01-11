import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentList from "../components/CommentList";

function CommentListContainer() {
  const state = useSelector((state) => state.comments);
  console.log(state);
  const dispatch = useDispatch();
  const onAdd = ()=> dispatch()
  return <CommentList data={state} />;
}

export default CommentListContainer;
