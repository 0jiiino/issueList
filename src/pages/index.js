import { dehydrate, QueryClient, useQuery } from "react-query";
import css from "styled-jsx/css";

import getDatas from "../api/data.api";
import IssueList from "../components/IssueList";

const style = css`
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px;
  }
`;

const Home = () => {
  const { data: dataList, isError } = useQuery("dataList", getDatas, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  if (isError) {
    return <h1 className="error center-text">Error</h1>;
  }

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
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("dataList", getDatas);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60,
  };
};

export default Home;
