import {useEffect, useState} from 'react';

const MakeError = () => {
  const [number, setNumber] = useState<number>(0);

  const randomlyFetchData = async () => {
    return Math.random();
  }

  useEffect(() => {
    randomlyFetchData().then(number => {
      setNumber(number);
    })
  }, []);

  useEffect(() => {
    if (number > 0.5) {
      throw new Error('大于0.5');
    }
  }, [number]);

  return <div>{number}</div>
}

export default MakeError;
