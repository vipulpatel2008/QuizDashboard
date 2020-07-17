import React from 'react';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';
import { QuestionType } from '../../../util/type/question';
import * as css from './style';

type Props = {
    deleteQuestion: (index: number) => void,
    editQuestion: (question: QuestionType, index: number) => void,
    question: QuestionType,
    index: number
}

/**
 * DrawQuestion component render questions data alog with action buttons
 * @param {object }props React props sent to component.
 * @param {number} props.index unique key for question object
 * @param {QuestionType} props.question contains question data
 * @param {function} props.deleteQuestion handle delete action
 * @param {function} props.editQuestion handle edit action
 */
const DrawQuestion = ({ index, question, deleteQuestion, editQuestion }: Props) => {
    return (
        <css.Question>
            <css.Grid>
                <div>
                    <css.Title>
                        <span dangerouslySetInnerHTML={{ __html: question.question.replace(/\n/g, '<br />') }}></span>
                    </css.Title>
                    <div>{question.category}</div>
                    <div>{question.difficulty}</div>
                </div>
                <div>
                    <Button title="Edit Question" type="primary" icon={<FormOutlined />} htmlType="button" onClick={() => editQuestion(question, index)}>
                    </Button>
                    <Popconfirm title="Are you sure, you want to delete this question？" okText="Yes" cancelText="No" onConfirm={() => deleteQuestion(index)}>
                        <Button className="deleteButton" title="Delete Question" icon={<DeleteOutlined />} ></Button>
                    </Popconfirm>
                </div>
            </css.Grid >
        </css.Question >
    )
}
export default DrawQuestion;