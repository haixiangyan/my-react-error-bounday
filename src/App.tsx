import React from 'react';
import FallbackComponentExample from './components/FallbackComponentExample';
import FallbackRenderExample from './components/FallbackRenderExample';

const App = () => {
  return (
    <div className="App">
      <h2>FallbackComponent</h2>
      <FallbackComponentExample />

      <h2>fallbackRender</h2>
      <FallbackRenderExample />
    </div>
  );
}

export default App;
