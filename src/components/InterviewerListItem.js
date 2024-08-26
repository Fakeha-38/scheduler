// import React from "react";
// import classnames from "classnames";

// import "components/InterviewerListItem.scss";

// export default function InterviewerItem(props) {
//   const itemClass = classnames("interviewers__item", {
//     "interviewers__item--selected": props.selected
//   });

//   return (
//     <li className={itemClass} onClick={props.setInterviewer}>
//       <img
//         className="interviewers__item-image"
//         src={props.avatar}
//         alt={props.name}
//       />
//       {props.selected && props.name}
//     </li>
//   );
// }
import React from "react";
import PropTypes from 'prop-types';
import classnames from "classnames";
import "components/InterviewerListItem.scss";

function InterviewerListItem(props) {
  const interviewersClass = classnames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });

  return (
    <li className={interviewersClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}

InterviewerListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,      // Ensure `name` is defined here
  avatar: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  setInterviewer: PropTypes.func.isRequired,
};

export default InterviewerListItem;