import Card from "./Card";

const CardList = ({ dataList }) => {
  return dataList.map(data => (
    <Card
      key={data.number}
      number={data.number}
      title={data.title}
      created_at={data.created_at}
      comments={data.comments}
    />
  ));
};

export default CardList;
