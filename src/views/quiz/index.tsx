import React, { useContext, useEffect, useState } from 'react';
import { Spin } from 'antd';
import { baseAxios } from '../../util/axios';
import OpenNotificationWithIcon from '../../util/notification';
import { QuestionType } from '../../util/type/question';
import RightPanel from './rightPanel';
import Form from '../quiz/form';
import TokenContext from '../layout/context';
import * as css from './style';

/**
 * Quiz component consume API to fetch questions and render the RightPanel.
 */
const Quiz = () => {
    const [questions, setQuestions] = useState<QuestionType[]>([]);
    const [question, setQuestion] = useState<QuestionType>();
    const [index, setIndex] = useState<number>(-1);
    const [loading, setLoading] = useState<boolean>(false);

    const triviaToken = useContext(TokenContext);

    const loadMore = () => {
        if (triviaToken?.token) {
            setLoading(true);
            setQuestion(undefined);
        
            baseAxios.get(`/api.php?amount=10&category=21&difficulty=medium&type=multiple&token=${triviaToken.token}`).then(function (response) {
                setLoading(false);
                if (response.status === 200) {
                    if (response.data.response_code === 0) {
                        let copyQustion = questions;
                        if (response.data.results != null && response.data.results.length > 0) {
                            copyQustion = response.data.results.concat(questions);
                        }
                        setQuestions(copyQustion);
                    }
                    else if (response.data.response_code === 4) {
                        OpenNotificationWithIcon({
                            type: 'warning',
                            title: 'No more records to load.',
                        }, () => { })
                    }
                }
                else {
                    OpenNotificationWithIcon({
                        type: 'error',
                        title: 'Something went wrong. Please try again.',
                    }, () => { })
                }
            })
        }
    }

    const editQuestion = (que: QuestionType, index: number) => {
        setQuestion(que);
        setIndex(index);
    }

    const deleteQuestion = (ind: number) => {
        if (ind > -1) {
            const questionsCopy = [...questions];
            questionsCopy.splice(ind, 1);
            setQuestions(questionsCopy);

            OpenNotificationWithIcon({
                type: 'success',
                title: 'Question deleted successfully.',
            }, () => { })
            setQuestion(undefined);
        }
        else {
            OpenNotificationWithIcon({
                type: 'error',
                title: 'Something went wrong. Please try again.',
            }, () => { })
        }
    }

    const updateQuestion = (que: QuestionType) => {
        if (index > -1) {
            const questionsCopy = [...questions];
            questionsCopy[index] = que;
            setQuestions(questionsCopy);

            OpenNotificationWithIcon({
                type: 'success',
                title: 'Question updated successfully.',
            }, () => { })
            setQuestion(undefined);
        }
        else {
            OpenNotificationWithIcon({
                type: 'error',
                title: 'Something went wrong. Please try again.',
            }, () => { })
        }
    }

    useEffect(() => {
        loadMore();
    }, []);

    return (
        <css.Section>
            <>
                {question ? <Form key={index} question={question} index={index} updateQuestion={updateQuestion}></Form> : <div></div>}
                <Spin tip="Loading..." spinning={loading}>
                    <RightPanel questions={questions} loadMore={loadMore} editQuestion={editQuestion} deleteQuestion={deleteQuestion}></RightPanel>
                </Spin>
            </>
        </css.Section >
    )
}
export default Quiz