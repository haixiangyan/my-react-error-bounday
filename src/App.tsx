import React from 'react';
import FallbackComponentExample from './components/FallbackComponentExample';
import FallbackRenderExample from './components/FallbackRenderExample';
import FallbackExample from './components/FallbackExample';

const App = () => {
  return (
    <div className="App">
      <h2>fallback 例子</h2>
      <FallbackExample />

      <h2>FallbackComponent 例子</h2>
      <FallbackComponentExample />

      <h2>fallbackRender 例子</h2>
      <FallbackRenderExample />
    </div>
  );
}

export default App;
