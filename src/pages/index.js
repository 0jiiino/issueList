import css from "styled-jsx/css";

import { getDatas } from "../api/data.api";
import IssueList from "../components/IssueList";

const style = css`
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px;
  }
`;

const Home = ({ dataList }) => {
  return (
    <div className="container">
      <h1 className="header-large center-text">
        create-react-app github issue list
      </h1>
      <IssueList dataList={dataList} />
      <style jsx>{style}</style>
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
