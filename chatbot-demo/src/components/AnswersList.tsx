import React from 'react';
import {Answer} from './index';

// propsで値を持つ
type Props = {
    // content（string）とnextId（string）を持つanswers（[]）
    answers: {
        content: string
        nextId: string
    }[]
    // selectedAnswer（string）とnextQuestionId（string）を持つselect(void)
    select: (
        selectedAnswer: string, 
        nextQuestionId: string
    ) => void
}

// AnswerListの定義
const AnswersList: React.FC<Props> = ({ answers, select }) => {
    // AnswersListに値を返す
    return (
        // classNameに代入
        <div className='.c-grid__answer'>
            {/* answersを取りだす */}
            {answers.map((value, index) => {
                // 値をAnswerに入れて返す
                return <Answer content={value.content} nextId={value.nextId} key={index.toString()} select={select} />
            })}
        </div>
    )
}

export default AnswersList