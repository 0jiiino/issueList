import axios from "axios";

const getDatas = async () => {
  const { data } = await axios.get(`${process.env.URI}`);

  data.sort((a, b) => b.comments - a.comments);

  return data;
};

export default getDatas;
