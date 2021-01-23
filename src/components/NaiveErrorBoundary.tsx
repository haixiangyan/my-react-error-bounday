import React from 'react';
import MakeError from './MakeError';
import {ErrorFallback, onError} from '../utils';
import ErrorBoundary from '../lib/ErrorBoundary';

const NaiveErrorBoundary = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={onError}
    >
      <MakeError />
    </ErrorBoundary>
  )
}

export default NaiveErrorBoundary;
