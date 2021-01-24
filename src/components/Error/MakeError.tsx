import {useEffect } from 'react';

const MakeError = () => {
  useEffect(() => {
    const number = Math.random();
    if (number > 0.5) {
      throw new Error('大于0.5');
    }
  }, []);

  return <div/>
}

export default MakeError;
