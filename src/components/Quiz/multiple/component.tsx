import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Props } from './types';

const Multiple = ({
  setQuestionId,
  questionId,
  data,
}: Props): React.ReactElement => {
  
  function updateKey(object) {
    return {
      type: "UPDATE",
      object
    };
  }

  const dispatch = useDispatch()
  const [checkedState, setCheckedState] = useState(
    new Array(data.options.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  const handleSetQuestionId = useCallback(() => {
    const checkedArr = checkedState.reduce(function(a, e, i) {
      if (e === true)
          a.push(i);
      return a;
      }, []) 
    dispatch(updateKey({dataKey: data.key, selectedId: checkedArr}))
    setQuestionId(questionId + 1)
  }, [questionId, data, dispatch, checkedState])

  return (
    <>
      <Title>{data.label}</Title>
      { data.description &&
        <Description>{data.description}</Description>
      }
      <Options>
        {data.options && data.options.map((option, index) => {
          return (
            <Option key={option.value}>
              <input
                type="checkbox"
                id={`custom-checkbox-${index}`}
                name={option.label}
                value={option.value}
                checked={checkedState[index]}
                onChange={() => handleOnChange(index)}
              />
              <label htmlFor={`custom-checkbox-${index}`}>{option.label}</label>
            </Option>
          )
        })}
      </Options>
      <Button disabled={checkedState.every((curr) => curr === false)} onClick={handleSetQuestionId}>Continue</Button>
    </>
  )
}

const Title = styled.h2`
  margin-top: 15rem;
  text-align: center;
`;

const Description = styled.p`
  margin-top: 32px;
  text-align: center;
`;

const Options = styled.ul`
  list-style: none;
  width: 300px;
  margin: 0 auto;
`;

const Option = styled.li`
  margin-top: 15px;
`;

const Button = styled.button`
  width: 260px;
  height: 48px;
  margin: 30px auto;
  background-color: #AA00FF;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 16px 32px rgba(170, 0, 255, 0.24);
  border-radius: 8px;
  cursor: pointer;
  &:disabled {
    opacity: 0.4;
  }
`;

export default Multiple;
