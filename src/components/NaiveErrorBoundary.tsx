import {ErrorBoundary} from 'react-error-boundary';
import React from 'react';
import MakeError from './MakeError';
import {ErrorFallback, onError, onReset} from '../utils';

const NaiveErrorBoundary = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={onError}
      onReset={onReset}
    >
      <MakeError />
    </ErrorBoundary>
  )
}

export default NaiveErrorBoundary;
