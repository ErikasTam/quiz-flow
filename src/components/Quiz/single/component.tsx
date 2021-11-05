import React, { useCallback } from "react";
import styled from "styled-components";
import { Props } from './types'
import { useDispatch } from "react-redux";

const Single = ({
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

  const handleSetQuestionId = useCallback(
    (value) => (): void => {
      dispatch(updateKey({dataKey: data.key, selectedId: value}))
      setQuestionId(questionId + 1)
  }, [data, questionId, dispatch])

  return (
    <>
      <Title>{data.label}</Title>
      { data.description &&
        <Description>{data.description}</Description>
      }
      <Options>
        {data.options && data.options.map( option => {
          return (
            <Option onClick={handleSetQuestionId(option.value)} key={option.value}>{option.label}</Option>
          )
        })}
      </Options>
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

const Options = styled.div`
  margin-top: 45px;
  width: 300px;
  margin: 0 auto;
`;

const Option = styled.div`
  margin-top: 15px;
`;

export default Single;
