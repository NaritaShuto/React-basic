import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
// import NoProfile from '../assets/img/775c7c6a-a699-4156-a8bf-cc16b90ed66c_LI.jpg'
// import Dog from '../assets/img/775c7c6a-a699-4156-a8bf-cc16b90ed66c_LI (2).jpg'

// propsで値を持つ
type Props = {
    // string型のtext
    text: string
    // string型のtype
    type: string
}

// Chatの定義
const Chat: React.FC<Props> = ({ text, type }) => {
    // isQuestionにtypeを代入（typeはquestion）
    const isQuestion = type === 'question'
    // classesにisQuestionを代入（isQuestionはtrueならp-chat__row、falseならp-chat__reverse）
    const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse'

    // Chatに値を返す
    return (
        // classNameの設定
        <ListItem className={classes}>
            {/* <ListItemAvatar>
                {isQuestion ? (
                    <Avatar alt="Icon" src={Dog} />
                ) : (
                    <Avatar alt="Icon" src={NoProfile} />
                )}
            </ListItemAvatar> */}
            {/* classNameの代入 */}
            <div className="p-chat__bubble">{text}</div>
        </ListItem>
    )
}

export default Chat