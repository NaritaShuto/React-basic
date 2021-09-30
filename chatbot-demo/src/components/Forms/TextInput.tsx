import React, { ChangeEvent, FC } from 'react'
import TextField from '@material-ui/core/TextField'

// propsで値を持つ
type Props = {
    // string型のlabel
    label: string
    // boolean型のmultiline
    multiline: boolean
    // number型のrows
    rows: number
    // string型のvalue
    value: string
    // string型のtype
    type: string
    // void型のonChange
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

// TextInputの定義
const TextInput: FC<Props> = ({
    label,
    multiline,
    rows,
    value,
    type,
    onChange,
}) => {
    // TeaxtInputに値を返す
    return (
        // TextFieldの設定
        <TextField
            fullWidth
            id="standard-basic"
            label={label}
            margin="dense"
            multiline={multiline}
            rows={rows}
            value={value}
            type={type}
            onChange={onChange}
        />
    )
}

export default TextInput