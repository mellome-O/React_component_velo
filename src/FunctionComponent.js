import React from 'react';

const FunctionComponent = ({ props }) => {
  return <div>안녕하세요 제 이름은 {props} 입니다.</div>;
};

FunctionComponent.defaultProps = {
  name: 'velopert'
};

export default FunctionComponent;
