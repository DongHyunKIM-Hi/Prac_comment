import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageList from "../components/PageList";
import { getLength } from "../store/modules/comments";

function PageListContainer() {
  const pages = useSelector((state) => state.comments.pages);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLength());
  }, [dispatch]);
  if (!pages) return null;
  return <PageList pages={parseInt(pages / 4)} />;
}

export default PageListContainer;
