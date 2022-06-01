import { getIssues } from "../api/\bissues.api";
import CardList from "../components/CardList";

const Home = ({ dataList }) => {
  return (
    <div>
      <CardList dataList={dataList} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const { dataList } = await getIssues();

  return {
    props: {
      dataList,
    },
  };
};

export default Home;
