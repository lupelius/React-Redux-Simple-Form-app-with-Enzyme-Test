import React from 'react';
import PropTypes from 'prop-types';
import AnswerBox from '../../atoms/answer-box';
import ErrorBox from '../../atoms/error-box';
import Button from '../../atoms/button';
import Label from '../../atoms/label';
import './style.scss';

const Question = (props) => {
  const [value, setValue] = React.useState("");
  // To fix typing animation re render issue, we use label state
  const [label, setLabel] = React.useState(<Label for="answer">{props.question}</Label>);
  // Fix for React select box's defaultValue issue
  React.useEffect(() => {
    if (props.answerBoxProps.type === 'select') {
      setValue("true");
    } else {
      setValue("");
    }
    setLabel(<Label for="answer">{props.question}</Label>);
  },[props.question]);
  // Fix end

  return (
    <div className="question" data-test={props.answerBoxProps && props.answerBoxProps.id}>
      <div className="form">
        {label}
        <AnswerBox 
          id="answer"
          onLoad={() => props.validate(value)}
          onFocus={() => props.validate(value)}
          onChange={event => {
            setValue(event.target.value);
            props.validate(event.target.value);
          }}
          onBlur={() => {
            props.confirmAnswer(value);
            props.isValid && setLabel(null); // fixing typing animation
          }}
          {...props.answerBoxProps}
        />
        <ErrorBox className="err">{props.isValid ? '' : props.errorMsg}</ErrorBox>
        {
          props.isLast  ? 
            <Button 
              onClick={(callback) => {
                props.validate(value);
                callback();
              }}
              isValid={props.isValid}
            >Done</Button> : []
        }
      </div>
    </div>
  )
}

Question.propTypes = {
  answerBoxProps: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
  }),
  question: PropTypes.string,
  validate: PropTypes.func,
  errorMsg: PropTypes.string,
  confirmAnswer: PropTypes.func,
  isLast: PropTypes.bool
}

export default Question;