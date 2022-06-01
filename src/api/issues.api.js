import axios from "axios";

export const getIssues = async () => {
  const dataList = (await axios.get(`${process.env.URI}`)).data;

  dataList.sort((a, b) => b.comments - a.comments);

  return {
    dataList,
  };
};
