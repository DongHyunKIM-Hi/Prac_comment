import axios from "axios";

export const getComments = async (page) => {
  const response = await axios.get(
    `/comments?_page=${page}&_limit=4&_order=desc&_sort=id`
  );
  return response.data;
};

export const totalComments = async () => {
  const response = await axios.get("/comments");
  return response.data.length;
};
