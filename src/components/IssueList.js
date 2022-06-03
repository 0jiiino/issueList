import { format } from "date-fns";
import PropTypes from "prop-types";
import { FaComments, FaCalendarAlt } from "react-icons/fa";
import css from "styled-jsx/css";

import Issue from "./Issue";

const style = css`
  .issue-list {
    margin: 10px;
  }
  .issue-list li {
    display: flex;
    justify-content: flex-start;
    font-weight: 300;
    font-size: 16px;
  }
  .issue-list li:not(:last-of-type) {
    margin-bottom: 5px;
  }
`;

const IssueList = ({ dataList }) => {
  return (
    <ul className="flex space-between">
      {dataList.map(data => {
        const date = format(new Date(data.created_at), "yyyy-MM-dd HH:mm:ss");

        return (
          <li key={data.node_id}>
            <Issue
              key={data.number}
              number={data.number}
              title={data.title}
              url={data.html_url}
            >
              <ul className="issue-list">
                <li>
                  <FaComments color="rgb(255, 215, 0)" size={14} />
                  {data.comments}
                </li>
                <li>
                  <FaCalendarAlt color="rgb(129, 195, 245)" size={14} />
                  {date}
                </li>
              </ul>
            </Issue>
          </li>
        );
      })}
      <style jsx>{style}</style>
    </ul>
  );
};

export default IssueList;

IssueList.propTypes = {
  dataList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
