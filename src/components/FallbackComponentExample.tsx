import React, {useState} from 'react';
import MakeError from './MakeError';
import {ErrorFallback } from '../utils';
import {ErrorBoundary} from '../lib/ErrorBoundary';

const FallbackComponentExample = () => {
  const [hasError, setHasError] = useState(false);

  const onError = (error: Error) => {
    // 日志上報
    console.log(error);
    setHasError(true);
  }

  const onReset = () => {
    console.log('尝试恢复错误');
    setHasError(false);
  }

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={onError}
      onReset={onReset}
    >
      { !hasError ? <MakeError/> : null }
    </ErrorBoundary>
  )
};

export default FallbackComponentExample;
