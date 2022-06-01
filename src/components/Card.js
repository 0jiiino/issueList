import css from "styled-jsx/css";

const style = css`
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
    width: 300px;
    height: 220px;
    padding: 20px;
    border: 1px solid #f2f2f2;
    border-radius: 2px;
  }
`;

const Card = ({ number, title, children }) => {
  return (
    <div className="card">
      <h2 className="header-sm center-text">#{number}</h2>
      <h2 className="header-sm center-text">{title}</h2>
      {children}
      <style jsx>{style}</style>
    </div>
  );
};

export default Card;
