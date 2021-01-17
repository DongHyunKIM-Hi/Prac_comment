import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentList from "../components/CommentList";
import { delete_comment, getComments } from "../store/modules/comments";

function CommentListContainer() {
  const { loading, error, data, page } = useSelector((state) => ({
    loading: state.comments.loading,
    error: state.comments.error,
    data: state.comments.data,
    page: state.comments.page,
  }));
  const dispatch = useDispatch();
  const onDelete = (id) => dispatch(delete_comment(id));
  useEffect(() => {
    dispatch(getComments(page));
  }, [dispatch, page]);
  if (loading) return <div>로딩중...</div>;
  if (error) return <div>오류발생...</div>;
  if (!data) return null;
  return <CommentList data={data} onDelete={onDelete} />;
}

export default CommentListContainer;
