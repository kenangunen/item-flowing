import React, { useState, useEffect, useRef } from 'react';

const TextFlow = (props) => {
  const { flowList, changetime } = props;
  const flowItem = useRef();

  useEffect(() => {
    if (flowList.length > 0) {
      for (let i = 0; i < flowList.length; i++) {
        (function (ind) {
          setTimeout(function () {
            flowItem.current.innerText = flowList[ind];
          }, changetime * ind);
        })(i);
      }
    }
  }, []);

  return <p ref={flowItem}>{flowList[0]}</p>;
};

export default TextFlow;
