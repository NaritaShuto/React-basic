import React, { FC, useEffect, useState, useCallback } from 'react'
import defaultDataset from './dataset'
import './assets/styles/style.css'
import { AnswersList, Chats } from './components/index'
import FormDialog from './components/Forms/FormDialog'

// type State = {
//     answers: {
//         content: string
//         nextId: string
//     }[]
//     chats: {
//         text: string
//         type: string
//     }[]
//     currentID: string
//     dataset: typeof defaultDataset
//     open: boolean
// }

// export default class App extends React.Component<{}, State> {
//   constructor(props: {}) {
//         super(props)
//         this.state = {
//             answers: [],
//             chats: [],
//             currentID: 'init',
//             dataset: defaultDataset,
//             open: false,
//         }
//         this.selectAnswer = this.selectAnswer.bind(this)
//         this.handleClose = this.handleClose.bind(this)
//         this.handleClickOpen = this.handleClickOpen.bind(this)
//     }

// answerが値を持つ
type Answer = {
    // string型のcontent
    content: string
    // string型のnextId
    nextId: string
}
// Chatが値を持つ
type Chat = {
    // string型のtext
    text: string
    // string型のtype
    type: string
}

// Appの定義
const App: FC<{}> = () => {
    // useStateの定義(answers)
    const [answers, setAnswers] = useState<Answer[]>([])
    // useStateの定義(chats)
    const [chats, setChats] = useState<Chat[]>([])
    // useStateの定義(currentID)
    const [currentID, setCurrentID] = useState('init')
    // useStateの定義(dataset)
    const [dataset, setDataset] = useState(defaultDataset)
    // useStateの定義(open)
    const [open, setOpen] = useState(false)

    // handleClickOpenはsetOpen(true)の処理を持つ
    const handleClickOpen = () => {
        setOpen(true)
    }

    // addChatsの定義
    const addChats = (chat: Chat) => {
        // chatに（）の値をset
        setChats((prevChats) => {
            // []内がわからない
            return [...prevChats, chat]
        })
    }

    // nextQuestionIdとnextDatasetの要素を持つdisplayNextQuestion
    const displayNextQuestion = (
        nextQuestionId: string,
        nextDataset: typeof defaultDataset
    ) => {
        // Chatに追加？
        addChats({
            text: nextDataset[nextQuestionId].question,
            type: 'question',
        })

        // （）内の値のセット
        setAnswers(nextDataset[nextQuestionId].answers)
        // （）内の値のセット
        setCurrentID(nextQuestionId)
    }

    // selectedAnswerとnextQuestionIdを持つselectAnswerの定義
    const selectAnswer = (selectedAnswer: string, nextQuestionId: string) => {
        // 分岐処理
        switch (true) {
            // caseの条件のとき
            case nextQuestionId === 'contact': {
                // handleClickOpenを呼び出す 
                handleClickOpen()
                break
            }
            // caseの条件のとき
            case /^https:*/.test(nextQuestionId): {
                const a = document.createElement('a')
                a.href = nextQuestionId
                a.target = '_blank'
                a.click()
                break
            }
            // caseの条件に当てはまらないとき
            default: {
                // Chatに追加
                addChats({
                    text: selectedAnswer,
                    type: 'answer',
                })
                // タイムアウトの設定
                setTimeout(
                    () => displayNextQuestion(nextQuestionId, dataset),
                    1000
                )
                break
            }
        }
    }

    // componentDidMount() {
    //   const initAnswer = ''
    //   this.selectAnswer(initAnswer, this.state.currentID)
    // }

    // useEffectを使用
    useEffect(() => {
        // const initAnswer = ''
        // selectAnswer(initAnswer, currentID)
        // Datasetをset
        setDataset(dataset)
        // displayNextQuestionに代入
        displayNextQuestion(currentID, dataset)
    }, [])

    // componentDidUpdate() {
    //   const scrollArea = document.getElementById('scroll-area')
    //   if (scrollArea) {
    //       scrollArea.scrollTop = scrollArea.scrollHeight
    //   }
    // }
    // useEffectを使用
    useEffect(() => {
        // scrollAreaを定義
        const scrollArea = document.getElementById('scroll-area')
        // 分岐処理
        if (scrollArea) {
            // 代入
            scrollArea.scrollTop = scrollArea.scrollHeight
        }
    })

    // handleCloseとuseCallbackが分からない
    const handleClose = useCallback(() => {
        // falseに設定
        setOpen(false)
    }, [setOpen])

    // 値を返す
    return (
        <div>
            {/* classNameの定義 */}
            <section className="c-section">
                {/* classNameの定義 */}
                <div className="c-box">
                    {/* chatsの表示 */}
                    <Chats chats={chats} />
                    {/* AnswersListの表示 */}
                    <AnswersList
                        answers={answers}
                        select={selectAnswer}
                    />
                    {/* FormDialogの表示設定 */}
                    <FormDialog
                        open={open}
                        handleClose={handleClose}
                    />
                </div>
            </section>
        </div>
    )
    
}

export default App