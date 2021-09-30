/* eslint-disable prettier/prettier */
import React from 'react';

// propsで値を持つ
type Props = {
  // boolean型のisPublished
  isPublished: boolean;
  // OnClickの定義
  OnClick: () => void;
};

// PublishButtonの定義
const PublishButton: React.FC<Props> = ({ isPublished, OnClick }) => {
  // PublishButtonに値を返す
  return (
    // ボタン押下後の処理
    <button onClick={() => OnClick()} type="button">
      {/* ボタン名 */}
      型: {String(isPublished)}
    </button>
  );
};

export default PublishButton;
