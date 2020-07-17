export type QuestionType = {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export type AnswerType = {
    answer: string,
    isCurrect: boolean
}