import React from 'react';
import FallbackComponentExample from './components/Example/FallbackComponentExample';
import FallbackRenderExample from './components/Example/FallbackRenderExample';
import FallbackExample from './components/Example/FallbackExample';
import WithErrorBoundaryExample from './components/Example/WithErrorBoundaryExample';
import UseErrorHandlerExample from './components/Example/UseErrorHandlerExample';

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

      <h2>useErrorHandler 例子</h2>
      <UseErrorHandlerExample/>
    </div>
  );
}

export default App;
