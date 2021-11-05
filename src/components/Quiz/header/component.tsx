import React, { useCallback } from "react";
import styled from "styled-components";
import { Props } from './types'
import history from '../../../history';

const Header = ({
  setQuestionId,
  questionId,
}: Props): React.ReactElement => {

  const handleSetQuestionId = useCallback(() => {
    if(questionId === 0){
      history.push('/');
    } else {
      setQuestionId(questionId - 1)
    }
  }, [questionId])

  return (
    <>
      <Wrap>
        <BackButton onClick={handleSetQuestionId}>Back</BackButton>
      </Wrap>
    </>
  )
}

const Wrap = styled.div`
  display: flex
`;

const BackButton = styled.div`
  cursor: pointer
`;

export default Header;
