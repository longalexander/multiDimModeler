import React from 'react';
import '@atlaskit/css-reset'
import Header from './components/Header'
import EditorView from './components/EditorView'

function App() {
  return (
    <div className="App">
      <Header />
      <EditorView />
    </div>
  );
}

export default App;
