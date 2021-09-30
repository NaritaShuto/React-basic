// eslintはエラーを検知してくれるものなのでdisableしてはいけない（それによってエラーを忘れることがあるから）
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';

// ToggleButtonの定義
const ToggleButton = () => {
  // useStateの定義（open）
  const [open, setOpen] = useState(false);

  // toggleはsetOpen内の処理を行う（()内の結果を取得）
  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  // useEffectの定義
  useEffect(() => {
    // open表示
    console.log('Current state is', open);
    // trueのとき
    if (open) {
      // （）内を表示
      console.log('Subscribe database...');
    }
    // useEffectに結果を返す
    return () => {
      // ()内を表示
      console.log('Unsubscribe database!');
    };
  });

  // 値を返す
  return (
    // ボタンが押下されたらtoggleの処理を開始
    <button onClick={toggle} type="button">
      {/* openがtrueのときOPEN、falseのときCLOSE */}
      {open ? 'OPEN' : 'CLOSE'}
    </button>
  );
};
export default ToggleButton;
