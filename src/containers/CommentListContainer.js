import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentList from "../components/CommentList";
import { getComments } from "../store/modules/comments";

function CommentListContainer() {
  const { loading, error, data } = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComments());
    console.log(data);
  }, [dispatch]);
  return <CommentList data={data} />;
}

export default CommentListContainer;
