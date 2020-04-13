import React from 'react';
import { connect } from 'react-redux';
import { answerQuestion } from '../../../actions';
import Label from '../../atoms/label';
import ListAnswers from '../../atoms/list-answers';
import Question from '../../molecules/question';
import questions from './questions.json';
import {filterValidation,filterRegexp} from '../../../utils';

const Questions = (props) => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [isValid, setIsValid] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [done, setDone] = React.useState(false);

  // if we're submitting increment the currentQuestion, if not validate only
  const incrementQuestion = (value, submitting) => {
    if (submitting) {
      props.answerQuestion({[questions[currentQuestion].name]: {
        answer: value,
      }});
      setCurrentQuestion(currentQuestion + 1);
    }
    setIsValid(true);
  }

  const progressCheck = (value, submitting) => {
    if (questions.length > currentQuestion + 1) {
      if (questions[currentQuestion + 1] && questions[currentQuestion + 1].dependsOn) {
        if (questions[currentQuestion + 1].dependsOn[0].key === currentQuestion) {
          if (questions[currentQuestion + 1].dependsOn[0].expectedValue !== value) {
            // Do nothing
            props.answerQuestion({[questions[currentQuestion].name]: {
              answer: value,
            }});
            setDone(true);
          } else {
            incrementQuestion(value, submitting);
          }
        } else {
          incrementQuestion(value, submitting);
        }
      } else {
        incrementQuestion(value, submitting);
      }
    } else {
      incrementQuestion(value, submitting);
    }
  }
  const comparisonValidationCheck = (value, submitting) => {
    if (questions[currentQuestion].comparisonValidation) {
      /* TODO: Recursive validation
      questions[currentQuestion].comparisonValidation.map(validation => {
        const valid = filterValidation(
          validation,
          "filterParameter",
          validation.filterCondition,
          value
        );
        ...
      }); */

      if (filterValidation(
        questions[currentQuestion].comparisonValidation[0],
        "filterParameter",
        questions[currentQuestion].comparisonValidation[0].filterCondition,
        value
      )) {
        if (filterValidation(
          questions[currentQuestion].comparisonValidation[1],
          "filterParameter",
          questions[currentQuestion].comparisonValidation[1].filterCondition,
          value
        )) {
          progressCheck(value, submitting);
        } else {
          setIsValid(false);
          setErrorMsg(questions[currentQuestion].comparisonValidation[1].msg);
        }
        
      } else {
        setIsValid(false);
        setErrorMsg(questions[currentQuestion].comparisonValidation[0].msg);
      }
    } else {
      progressCheck(value, submitting);
    }
  }

  const validate = (value, submitting) => {
    if (questions[currentQuestion].validation) {
      if (filterRegexp(questions[currentQuestion].validation[0].regexp, value)) {
        comparisonValidationCheck(value,submitting);
      } else {
        setIsValid(false);
        setErrorMsg(questions[currentQuestion].validation[0].msg);
      }
    } else {
      comparisonValidationCheck(value,submitting);
    }
  };
  
  return (
    <div className="questions">
      {
        questions[currentQuestion] && !done ? 
          <Question 
            data-test="all-questions"
            question={questions[currentQuestion].question}
            answerBoxProps={{
              id: questions[currentQuestion].name,
              name: questions[currentQuestion].name,
              type: questions[currentQuestion].type
            }}
            isValid={isValid}
            errorMsg={errorMsg}
            validate={validate}
            confirmAnswer={value => validate(value, true)}
            isLast={questions.length - 1 === currentQuestion}
          /> : 
          <h1><Label for="">Done!</Label></h1>
      }
      <ListAnswers questions={questions} answers={props.answers} />
    </div>
  )
};

const mapStateToProps = state => {
  return {
    answers: state
  }
};


export default connect(mapStateToProps, {answerQuestion})(Questions);