import React, { FC, ChangeEvent, useCallback, useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextInput from './TextInput'

// propsで値を持つ
type Props = {
    // boolean型のopen
    open: boolean
    // void型のhandleClose
    handleClose: () => void
}

// FormDialogの定義
const FormDialog: FC<Props> = ({ open, handleClose }) => {
    // useStateの定義（name）
    const [name, setName] = useState('')
    // useStateの定義（email）
    const [email, setEmail] = useState('')
    // useStateの定義（description）
    const [description, setDescription] = useState('')

    // （何をやっているか分からない）
    const inputName = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value)
        },
        [setName]
    )

    const inputEmail = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            setEmail(event.target.value)
        },
        [setEmail]
    )

    const inputDescription = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            setDescription(event.target.value)
        },
        [setDescription]
    )
    
    const submitForm = () => {
        const payload = {
            text:
                `問い合わせ有ったよ！\n` +
                `お名前：${name}\n` +
                `Email：${email}\n` +
                `お問い合わせ内容\n${description}`,
        }

        // const url =
        //     'https://hooks.slack.com/services/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'

        // fetch(url, {
        //     method: 'POST',
        //     body: JSON.stringify(payload),
        // }).then(() => {
        //     alert('後で連絡するから楽しみに待っててね')

        //     // 初期化しておく
        //     setName('')
        //     setEmail('')
        //     setDescription('')

        //     // モーダルを閉じておく
        //     return handleClose()
        // })
    }

    // 値を返す
    return(
        // ダイアログの設定
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
          {/* ダイアログのタイトル */}
        <DialogTitle id="alert-dialog-title">お問い合わせ</DialogTitle>
        <DialogContent>
            {/* ダイアログ内の名前入力エリアの設定 */}
            <TextInput 
                label={"お名前（必須）"} multiline={false} rows={1}
                value={name} type={"text"} onChange={inputName}
            />
            {/* ダイアログ内のメールアドレス入力エリアの設定 */}
            <TextInput 
                label={"メールアドレス（必須）"} multiline={false} rows={1}
                value={email} type={"email"} onChange={inputEmail}
            />
            {/* ダイアログ内のお問い合わせ内容入力エリアの設定 */}
            <TextInput 
                label={"お問い合わせ内容（必須）"} multiline={true} rows={5}
                value={description} type={"text"} onChange={inputDescription}
            />
        </DialogContent>
        <DialogActions>
            {/* ダイアログのボタン */}
          <Button onClick={handleClose} color="primary">
            キャンセル
          </Button>
          {/* ダイアログのボタン */}
          <Button onClick={submitForm} color="primary" autoFocus>
            送信
          </Button>
        </DialogActions>
      </Dialog>
    )
}

export default FormDialog