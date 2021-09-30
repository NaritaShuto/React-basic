import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// propsで値を持つ
type Props = {
    // string型のcontent
    content: string
    // string型のnextId
    nextId: string
    // selectedAnswer（string）とnextQuestionId（string）を持つselect（void）
    select: (
        selectedAnswer: string, 
        nextQuestionId: string
    ) => void
}

// useStyleの設定
const useStyles = makeStyles((theme: Theme) =>
// styleの作成
  createStyles({
    // styleの名前
    root: {
        // 線の色
        borderColor: '#FFB549',
        // デフォルトのカラー
        color: '#FFB549',
        // フォントの大きさ
        fontWeight: 600,
        // マージボタンのpx
        marginBottom: '8px',
        // hoverの設定
        "&:hover": {
            // 背景
            backgroundColor: '#FFB549',
            // デフォルトの色
            color: '#fff'
        }
    },
}));

// Answerの定義
const Answer: React.FC<Props> = ({ content, nextId, select }) => {
    // useStyleの使用
    const classes = useStyles();
    // Answerに値を返す
    return(
        // ボタンの設定
        <Button variant="contained" className={classes.root} color="primary" onClick={() => select(content, nextId)}>
            {content}
        </Button>
    )
}

export default Answer