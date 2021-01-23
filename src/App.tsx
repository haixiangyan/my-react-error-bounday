import React from 'react';
import NaiveErrorBoundary from './components/NaiveErrorBoundary';

const App = () => {
  return (
    <div className="App">
      <h2>Naive Error</h2>
      <NaiveErrorBoundary />
    </div>
  );
}

export default App;
