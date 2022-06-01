import axios from "axios";

export const getDatas = async () => {
  const dataList = (
    await axios.get(`${process.env.URI}`, {
      headers: {
        Authorization: `token ${process.env.TOKEN}`,
      },
    })
  ).data;

  dataList.sort((a, b) => b.comments - a.comments);

  return {
    dataList,
  };
};
