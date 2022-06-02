import PropTypes from "prop-types";
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

const Issue = ({ number, title, url, children }) => {
  return (
    <div className="card">
      <a href={url}>
        <h2 className="header-small center-text">#{number}</h2>
      </a>
      <h2 className="header-small center-text">{title}</h2>
      {children}
      <style jsx>{style}</style>
    </div>
  );
};

export default Issue;

Issue.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
