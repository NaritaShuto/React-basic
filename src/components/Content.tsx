/* eslint-disable prettier/prettier */
import React from 'react';

// propsで値を持つ
type Props = {
  // string型のcontent
  content: string;
};

// 値Contentというprops内の値を持つ変数の定義
const Content: React.FC<Props> = ({ content }) => {
  // Contentに返す値
  return <p>{content}</p>;
};

export default Content;
