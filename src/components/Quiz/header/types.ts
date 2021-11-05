import { RouteComponentProps } from 'react-router-dom'

export interface Props extends RouteComponentProps {
    setQuestionId: any
    questionId: number
}
