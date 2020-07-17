import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import OpenNotificationWithIcon from '../../../util/notification';
import { AnswerType, QuestionType } from '../../../util/type/question';
import * as css from './style';

type Props = {
    question: QuestionType,
    updateQuestion: (que: QuestionType) => void,
    index: number;
}

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

/**
 * QuestionForm allow editing of question title and answers data.
 * @param {object} props React props sent to component.
 * @param {QuestionType} props.question contains question data
 * @param {function} props.updateQuestion  handle update question action
 * @param {number} props.index unique number to manage individual question object
 */
const QuestionForm = ({ question, updateQuestion, index }: Props) => {
    const [que, setQue] = useState<QuestionType>(question);
    const [key, setKey] = useState<number>(1);
    const [answers, setAnswers] = useState<AnswerType[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQue({ ...que, [event.target.name]: event.target.value });
    };

    const answerHandleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const answerCopy = answers;
        answerCopy[index].answer = event.target.value;
        setAnswers(answerCopy);
    };

    const answerCheckboxHandleChange = (event: CheckboxChangeEvent, index: number) => {
        const answerCopy = answers;
        answerCopy.map(x => x.isCurrect = false);
        answerCopy[index].isCurrect = event.target.checked;
        setAnswers(answerCopy);
        setKey(key === 1 ? 0 : 1)
    };

    useEffect(() => {
        const temp: AnswerType[] = [];
        if (que.correct_answer) {
            temp.push({ isCurrect: true, answer: que.correct_answer })
        }
        if (que.incorrect_answers) {
            que.incorrect_answers.map(ans => {
                return temp.push({ isCurrect: false, answer: ans })
            })
        }
        setAnswers(temp);
    }, []);

    const onSubmit = () => {
        if (answers) {
            const currect = answers.find((x: AnswerType) => x.isCurrect === true);
            if (currect) {
                que.correct_answer = currect.answer;
                que.incorrect_answers = answers.filter((x: AnswerType) => x.isCurrect === false).map((y: AnswerType) => y.answer);
                updateQuestion(que)
            }
            else {
                OpenNotificationWithIcon({
                    type: 'error',
                    title: 'At least one answer must be correct.',
                }, () => { })
            }
        }
    }

    const [form] = Form.useForm();
    form.setFieldsValue({
        question: que.question
    });
    answers.forEach((el, i) => {
        form.setFieldsValue({
            [`answer${i}`]: el.answer,
            [`isCurrect${i}`]: el.isCurrect
        });
    });

    return (
        que ?
            <css.Container >
                <css.FormWrapper>
                    <Form name="ManageQuestion" form={form} key={key} onFinish={() => onSubmit()}>
                        <Form.Item name="question"
                            rules={[{ required: true, message: 'Please enter question!' }]}
                        >
                            <label>Question:</label>
                            <Input placeholder="Question" defaultValue={que.question} onChange={handleChange} name="question" />
                        </Form.Item>
                        <css.Grid>
                            <span>Answers</span>
                            <span>Is Correct</span>
                        </css.Grid>
                        <css.Grid>
                            {answers && answers.map((answer: AnswerType, i: number) => {
                                return (
                                    <>
                                        <Form.Item className={'bottomMargin0'} name={`answer${i}`} rules={[{ required: true, message: 'Please enter answer!' }]}                                            >
                                            <Input placeholder={`Answer ${i}`} defaultValue={answer.answer} onChange={(e) => answerHandleChange(e, i)} name={`answer${i}`} />
                                        </Form.Item>
                                        <Form.Item className={'bottomMargin0'} {...tailLayout} name={`isCurrect${i}`}>
                                            <Checkbox defaultChecked={answer.isCurrect} name={`isCurrect`} onChange={(e) => answerCheckboxHandleChange(e, i)}></Checkbox>
                                        </Form.Item>
                                    </>
                                )
                            })}
                        </css.Grid>
                        <Form.Item {...tailLayout}>
                            <Button type="primary" className={'topMargin10'} htmlType="submit">Update</Button>
                        </Form.Item>
                    </Form>
                </css.FormWrapper>
            </css.Container >
            :
            null)
}

export default QuestionForm;