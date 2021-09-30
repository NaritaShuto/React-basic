import React, { useState, useEffect } from 'react';

// 値Contentの定義
const Counter = () => {
  // useStateの定義（count）
  const [count, setCount] = useState(0);
  // useStateの定義（counts）
  const [counts, setCounts] = useState(0);

  // countUpはsetCountの部分の処理を行う（()内の結果を取得）
  const countUp = () => {
    setCount((prevState) => prevState + 1);
  };

  // countDownはsetCountの部分の処理を行う（()内の結果を取得）
  const countDown = () => {
    setCount((prevState) => prevState - 1);
  };

  // countUpはsetCountsの部分の処理を行う（()内の結果を取得）
  const countsUp = () => {
    setCounts((prevState) => prevState + 1);
  };

  // countDownはsetCountsの部分の処理を行う（()内の結果を取得）
  const countsDown = () => {
    setCounts((prevState) => prevState - 1);
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Current count is...', count);
  }, [count]);

  // Counterに返す値
  return (
    <div>
      {/* 文字の表示 */}
      <p>
        カウンター
        <br />
        {/* 現在のcountを表示 */}
        カウント1: {count}
      </p>
      {/* クリックされたときcountUpの処理を開始 */}
      <button onClick={countUp} type="button">
        up
      </button>
      {/* クリックされたときcountDownの処理を開始 */}
      <button onClick={countDown} type="button">
        down
      </button>
      {/* 現在のcountSを表示 */}
      <p>カウント2: {counts}</p>
      {/* クリックされたときcountUpの処理を開始 */}
      <button onClick={countsUp} type="button">
        up
      </button>
      {/* クリックされたときcountDownの処理を開始 */}
      <button onClick={countsDown} type="button">
        down
      </button>
    </div>
  );
};

export default Counter;
