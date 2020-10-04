import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const ItemsFlowing = (props) => {
  const { flowItems, changedTime, topTime, className, loop } = props;
  const [newFlowList, setFlowList] = useState([]);
  const target = useRef();

  useEffect(() => {
    if (loop) {
      if (topTime !== undefined && changedTime !== undefined) {
        if (topTime > changedTime) {
          const needListLength = topTime / changedTime;
          const needItem = needListLength - flowItems.length;
          let tempList = [];
          for (let i = 0; i <= needItem; i++) {
            flowItems.forEach((element) => {
              if (tempList.length < needListLength) {
                tempList.push(element);
              }
            });
          }
          setFlowList(...[tempList]);
        } else {
          console.log("topTime value can't be smaller than changedTime value!");
        }
      } else {
        console.log('Hem topTime hem cnagedTime props olarak gönderilmeli.');
      }
    } else {
      if (topTime !== undefined && changedTime !== undefined) {
        console.log(
          'When loop is false, values ​​of topTime and changedTime cannot be sent as props at the same time.'
        );
      } else if (topTime === undefined && changedTime === undefined) {
        console.log('Send value topTime or changedTime as props.');
      } else {
        setFlowList(...[flowItems]);
      }
    }
  }, []);

  useEffect(() => {
    if (newFlowList.length > 0) {
      for (let i = 0; i < newFlowList.length; i++) {
        (function (ind) {
          setTimeout(function () {
            target.current.innerText = newFlowList[ind];
          }, setTime(ind));
        })(i);
      }
    }
  }, [newFlowList]);

  const setTime = (ind) => {
    if (changedTime && topTime === undefined) {
      return changedTime * ind;
    } else if (topTime && changedTime === undefined) {
      return (topTime / flowItems.length) * ind;
    } else if (loop && topTime !== undefined && changedTime !== undefined) {
      return changedTime * ind;
    }
  };

  return (
    <span className={className} ref={target}>
      {flowItems[0]}
    </span>
  );
};

export default ItemsFlowing;

ItemsFlowing.propTypes = {
  flowItems: PropTypes.array.isRequired,
  changedTime: PropTypes.number,
  topTime: PropTypes.number,
  className: PropTypes.string,
  loop: PropTypes.bool,
};

ItemsFlowing.defaultProps = {
  flowItems: ['flowItems prop is empty !'],
};
