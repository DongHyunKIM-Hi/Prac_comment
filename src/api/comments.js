import axios from "axios";

export const getCommets = async () => {
  const response = await axios.get(
    "/comments?_page=3&_limit=4&_order=desc&_sort=id"
  );
  console.log("요청됨");
  console.log(response.data);
  return response.data;
};
