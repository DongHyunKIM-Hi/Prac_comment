import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageList from "../components/PageList";
import { getLength, get_pages } from "../store/modules/comments";

function PageListContainer() {
  const { pages, page } = useSelector((state) => ({
    pages: state.comments.pages,
    page: state.comments.page,
  }));
  const onChange_page = (page) => {
    dispatch(get_pages(page));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLength());
  }, [page]);
  if (!pages) return null;
  return <PageList pages={Math.ceil(pages / 4)} onPage={onChange_page} />;
}

export default PageListContainer;
