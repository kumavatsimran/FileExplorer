import React, { useState } from 'react';
import Folder from './component/folder';
import explorer from './Data';

function App() {
  const [explorerData,setExplorer]=useState( explorer);
  return (
    <div>
      <h1>File explorer</h1>
       <Folder  explorer={explorerData}/>
    </div>
  );
}

export default App;
