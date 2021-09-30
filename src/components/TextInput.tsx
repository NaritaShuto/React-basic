/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

// TextInputの定義
const TextInput = () => {
  // useStateの定義（name）
  const [name, setName] = useState('');

  // handleNameの定義（何やってるか分からない）
  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(!(event.target instanceof HTMLInputElement)){
      return
    };
    console.log(event.target.value)
    setName(event.target.value);
  };

  // TextInputに値を返す
  return (
    <input
    // onChangeの処理（何やってるかわっからない）
    onChange={(event) => handleName(event)}
    // Typeに代入
    type="text"
    // valueに代入
    value={name}
    />
  );
};

export default TextInput;
