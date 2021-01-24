import React from 'react';
import FallbackComponentExample from './components/FallbackComponentExample';
import FallbackRenderExample from './components/FallbackRenderExample';
import FallbackExample from './components/FallbackExample';
import WithErrorBoundaryExample from './components/WithErrorBoundaryExample';

const App = () => {
  return (
    <div className="App">
      <h2>fallback 例子</h2>
      <FallbackExample />

      <h2>FallbackComponent 例子</h2>
      <FallbackComponentExample />

      <h2>fallbackRender 例子</h2>
      <FallbackRenderExample />

      <h2>withErrorBoundary 例子</h2>
      <WithErrorBoundaryExample/>
    </div>
  );
}

export default App;
