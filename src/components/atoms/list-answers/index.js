import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ListAnswers = (props) => 
  <div className="wrapper">
    {Object.keys(props.answers.questionReducer).map((key,i) => 
      <div className="list" key={i}>
        {props.questions[i].question} ({key}): <span className="answer">{props.answers.questionReducer[key].answer}</span>
      </div>
    )}
  </div>

ListAnswers.propTypes = {
  questions: PropTypes.array,
  answers: PropTypes.object
};

export default ListAnswers;