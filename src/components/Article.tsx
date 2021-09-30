import React, { useState } from 'react';
import { Content, PublishButton, Title } from './index';

// propsで値を持つ(Union型を使うためにtypeで定義)
type Props = {
  // string型のtitleを宣言
  title: string;
  // string型のcontentを宣言
  content: string;
};

// Articleというprops内の値を持つ変数の定義
const Article: React.FC<Props> = ({ title, content }) => {
  // useStateの宣言
  const [isPublished, setisPublished] = useState(false);

  // 値publishedにsetisPublished(true)を代入
  const Published = () => {
    setisPublished(true);
  };
  // Articleに返す値の中身
  return (
    <div>
      {/* titleを返す */}
      <Title title={title} />
      {/* contentを返す */}
      <Content content={content} />
      {/* Publishedが押下されたときにisPublishedを返す */}
      <PublishButton isPublished={isPublished} OnClick={Published} />
    </div>
  );
};

export default Article;
