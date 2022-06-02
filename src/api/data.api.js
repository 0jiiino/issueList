import axios from "axios";

export const getDatas = async () => {
  const { data } = await axios.get(`${process.env.URI}`, {
    headers: {
      Authorization: `token ${process.env.TOKEN}`,
    },
  });

  data.sort((a, b) => b.comments - a.comments);

  return data;
};
