const Card = ({ number, title, created_at, comments }) => {
  return (
    <div>
      <div>title : {title}</div>
      <div>issueNumber : {number}</div>
      <div>created_at : {created_at}</div>
      <div>comments : {comments}</div>
    </div>
  );
};

export default Card;
