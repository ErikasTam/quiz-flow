import React, { useState } from "react";
import { MOCK_DATA } from "../../assets/mock-data";
import Info from "./info/component"
import Multiple from "./multiple/component"
import Single from "./single/component"
import Summary from "./summary/component"
import Header from "./header/component"

const Quiz = (): React.ReactElement => {

  const [questionId, setQuestionId] = useState(0)
  const data = MOCK_DATA.data

  return (
    <>
      <Header questionId={questionId} setQuestionId={setQuestionId}/>
      { data.questions[questionId]?.type === "single" ? (
       <Single questionId={questionId} setQuestionId={setQuestionId} data={MOCK_DATA.data.questions[questionId]}/> 
      ) : data.questions[questionId]?.type === "multiple" ? (
        <Multiple questionId={questionId} setQuestionId={setQuestionId} data={MOCK_DATA.data.questions[questionId]}/> 
      ) : data.questions[questionId]?.type === "info" ? (
        <Info questionId={questionId} setQuestionId={setQuestionId} data={MOCK_DATA.data.questions[questionId]}/>
      ) : <Summary />
      }
    </>
  )
}

export default Quiz;
