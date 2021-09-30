import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import { Chat } from './index'

// styleの設定
const useStyles = makeStyles((theme: Theme) =>
// styleの作成
    createStyles({
        // styleの名前
        "chats": {
            // 高さ
            height: 400,
            // 余白の設定
            padding: '0',
            // overflowとはボックス内に収まり切らない内容を、どのように処理するかを指定するプロパティ（visible、hidden、scroll、autoで指定する）
            overflow: 'auto'
        },
}))
// propsで値を持つ
type Props = {
    // text（string）とtype（string）の要素を持つchatsを定義
    chats: {
        text: string
        type: string
    }[]
}

// Chatsの定義
const Chats: React.FC<Props> = ({ chats }) => {
    // useStyleを使用
    const classes = useStyles();

    // Chatsに値を返す
    return (
        // classNameの設定
      <List className={classes.chats} id={"scroll-area"}>
          {/* chatsを取り出す */}
          {chats.map((chat, index) => {
            // 値をChatに入れて返す
              return <Chat text={chat.text} type={chat.type} key={index.toString()} />
          })}
      </List>
    );
};

export default Chats