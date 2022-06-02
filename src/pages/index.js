import { getDatas } from "../api/data.api";
import IssueList from "../components/IssueList";

const Home = ({ dataList }) => {
  return (
    <div className="container">
      <h1 className="header-lg center-text">
        create-react-app github issue list
      </h1>
      <IssueList dataList={dataList} />
    </div>
  );
};

export const getStaticProps = async () => {
  const { dataList } = await getDatas();

  return {
    props: {
      dataList,
    },
  };
};

export default Home;
