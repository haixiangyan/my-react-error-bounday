import React from 'react';
import MakeError from '../Error/MakeError';
import {ErrorFallback} from '../../utils';
import {withErrorBoundary} from '../../lib/ErrorBoundary';

const WithErrorBoundaryExample = withErrorBoundary(MakeError, {
  FallbackComponent: ErrorFallback,
  onError: (error, info) => console.log(error, info),
});

export default WithErrorBoundaryExample;
