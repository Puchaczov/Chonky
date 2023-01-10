import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FullFileBrowser, setChonkyDefaults } from '../.';
import { ChonkyIconFA } from 'chonky-icon-fontawesome';

const App = () => {
  setChonkyDefaults({ iconComponent: ChonkyIconFA });
  return (
    <div style={{ height: 400 }}>
      <FullFileBrowser  />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
