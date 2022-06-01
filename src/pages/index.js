import { getDatas } from "../api/data.api";
import CardList from "../components/CardList";

const Home = ({ dataList }) => {
  return (
    <div className="container">
      <h1 className="header-lg center-text">
        create-react-app github issue list
      </h1>
      <CardList dataList={dataList} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const { dataList } = await getDatas();

  return {
    props: {
      dataList,
    },
  };
};

export default Home;
