import React from 'react';
import { memo } from 'react';

const Child = (props) => {
    console.log("Child called");
  return (
    console.log
  )
};

export default memo(Child);
