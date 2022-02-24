import React from 'react';
import SideBar from './SideBar.jsx';
import ContentWrapper from './ContentWrapper.jsx';
function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <ContentWrapper />
        </div>
    </React.Fragment>
  );
}

export default App;
