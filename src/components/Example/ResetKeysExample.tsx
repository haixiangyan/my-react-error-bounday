import React, {useState} from 'react';
import MakeError from '../Error/MakeError';
import {ErrorFallback} from '../../utils';
import {ErrorBoundary} from '../../lib/ErrorBoundary';

const FallbackExample = () => {
  const [retry, setRetry] = useState<number>(0);

  return (
    <div>
      <button onClick={() => setRetry(retry + 1)}>retry</button>

      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        resetKeys={[retry]}
      >
        <MakeError/>
      </ErrorBoundary>
    </div>
  )
};

export default FallbackExample;
