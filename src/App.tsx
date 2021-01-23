import React from 'react';
import {ErrorBoundary, FallbackProps} from 'react-error-boundary'

const ErrorFallback = ({error, resetErrorBoundary}: FallbackProps) => {
  return (
    <div role="alert">
      <p>出错啦</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

const Bomb = () => {
  throw new Error('new error');
}

const App = () => {
  return (
    <div className="App">
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
        }}
      >
        <Bomb />
      </ErrorBoundary>
    </div>
  );
}

export default App;
