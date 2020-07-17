import React from 'react';
import CustomButton from '../../../components/button';
import { RightPanelType } from '../../../util/type/rightPanel';
import DrawQuestion from './question';
import * as css from './style';

/**
 * RightPanel render DrawQuestion component and handle 'load more questions' action
 * @param {QuestionType[]} questions contains questions data
 * @param {Function} loadMore handle loadMore action
 * @param {Function} editQuestion handle edit action
 * @param {Function} deleteQuestion handle delete action
 */
const RightPanel = ({ questions, loadMore, editQuestion, deleteQuestion }: RightPanelType) => {
    const styles = { backgroundColor: '#3AB361', width: 'right', position: 'relative' }
    return (
        <css.RightPanel>
            <css.HeaderGrid>
                <css.Header>Questions</css.Header>
                <CustomButton styles={styles} onClick={() => loadMore()}>Load more questions</CustomButton>
            </css.HeaderGrid>
            {
                questions && questions.map((question, index) => {
                    return <DrawQuestion key={index} deleteQuestion={deleteQuestion} question={question} index={index} editQuestion={editQuestion} ></DrawQuestion>
                })
            }
        </css.RightPanel>
    )
}
export default RightPanel;