import React, { useCallback } from "react";
import styled from "styled-components";
import { Props } from './types'

const Info = ({
  setQuestionId,
  questionId,
  data,
}: Props): React.ReactElement => {

  const handleSetQuestionId = useCallback(() => {
    setQuestionId(questionId + 1)
  }, [questionId])

  return (
    <>
      <Title>{data.label}</Title>
      { data.description &&
        <Description>{data.description}</Description>
      }
      <Button onClick={handleSetQuestionId}>OK, lets do it!</Button>
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

const Button = styled.div`
  width: 260px;
  height: 48px;
  margin: 15px auto;
  background-color: #AA00FF;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 16px 32px rgba(170, 0, 255, 0.24);
  border-radius: 8px;
  cursor: pointer;
`;

export default Info;
