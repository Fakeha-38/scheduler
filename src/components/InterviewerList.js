// import React from "react";
// import PropTypes from 'prop-types'; 

// import "components/InterviewerList.scss";

// import InterviewerListItem from "components/InterviewerListItem";

// function InterviewerList(props) {
//   const interviewers = props.interviewers.map(interviewer => {
//     return (
//       <InterviewerListItem
//         key={interviewer.id}
//         id={interviewer.id}
//         name={interviewer.name}
//         avatar={interviewer.avatar}
//         selected={interviewer.id === props.value}
//         setInterviewer={event => props.onChange(interviewer.id)}
//       />
//     );
//   });

//   return (
//     <section className="interviewers">
//       <h4 className="interviewers__header text--light">Interviewer</h4>
//       <ul className="interviewers__list">{interviewers}</ul>
//     </section>
//   );
// }

// InterviewerList.propTypes = {
//   interviewers: PropTypes.array.isRequired
// };

// export default InterviewerList;
import React from "react";
import PropTypes from 'prop-types'; 

import "components/InterviewerList.scss";
import InterviewerListItem from "components/InterviewerListItem";

function InterviewerList(props) {
  const interviewers  = props.interviewers.map(interviewer => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        id={interviewer.id}
        name={interviewer.name}       // Ensure we use `name` here
        avatar={interviewer.avatar}
        selected={interviewer.id === props.value}
        setInterviewer={event => props.onChange(interviewer.id)}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section>
  );
}

InterviewerList.propTypes = {
  interviewers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,  // Ensure `name` is defined here
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default InterviewerList;