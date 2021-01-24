import React from 'react';
import NaiveErrorBoundary from './components/NaiveErrorBoundary';
import ErrorBoundaryRenderer from './components/ErrorBoundaryRenderer';

const App = () => {
  return (
    <div className="App">
      <h2>FallbackComponent</h2>
      <NaiveErrorBoundary />

      <h2>fallbackRender</h2>
      <ErrorBoundaryRenderer />
    </div>
  );
}

export default App;
