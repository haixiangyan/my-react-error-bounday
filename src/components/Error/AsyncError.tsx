import {useEffect, useState} from 'react';
import {useErrorHandler} from '../../lib/ErrorBoundary';

const AsyncError = () => {
  const handleError = useErrorHandler();

  const [number, setNumber] = useState<number>(0);

  const randomlyFetchData = async () => {
    return Math.random();
  }

  useEffect(() => {
    randomlyFetchData().then(number => {
      if (number > 0.5) {
        throw new Error('async 大于 0.5');
      } else {
        setNumber(number);
      }
    }).catch(handleError);
  }, []);

  return <div>{number}</div>
}

export default AsyncError;
