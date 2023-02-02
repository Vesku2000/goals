import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';
//import './CourseInput.css';

const FormControl = styled.div`

  margin: 0.5rem 0;


& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color ${props => (props.invalid ? 'red' : '#400E32')}
}

& input {
  display: block;
  width: 100%;
  border: 1px solid #A61F69 ${props => (props.invalid ? 'red' : '#ccc')};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
  color: #400E32;
  background: ${props => (props.invalid ? 'red' : '#F2CD5C')}
}

& input:focus {
  outline: none;
  background: #F2CD5C;
  border-color: #400E32;
}
`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input 
        type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
