import { QuestionType } from "./question";

export type RightPanelType = {
    deleteQuestion: (index: number) => void,
    editQuestion: (question: QuestionType, index: number) => void,
    questions: QuestionType[],
    loadMore: Function
}

