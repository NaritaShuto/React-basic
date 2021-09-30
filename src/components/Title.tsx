/* eslint-disable prettier/prettier */
import React from 'react';

// propsで値を持つ
type Props = {
  // string型のtitle
  title: string;
};

// titleの定義
const Title: React.FC<Props> = ({ title }) => {
  // titleに返す値
  return (
    // classNameに代入
    <div className="flex__row">
      {/* imgファイルの設定 */}
      <img src="/logo192.png" alt="Reactのロゴ" width={36} height={36} />
      {/* titleを設定 */}
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
