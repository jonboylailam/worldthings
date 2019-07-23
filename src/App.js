import React from 'react';
// import logo from './logo.svg';
import './App.css';

const Style = {
  container: {
    display: "grid",
    gridTemplateRows: "1fr",
    gridTemplateColumns: "1fr",
    justifyItems: "center",
    alignItems: "center",
    marginBottom: 500,
  }

};

function App() {
  return (
    <div className="App">
      <div style={Style.container}>
        <h1>Story 1</h1>
        cat mat rat hat fat sat<br/>

        Mat<br/>
        Mat.<br/>
        Mat sat. <br/>
        Sam.<br/>
        Sam sat.<br/>
        Mat sat. Sam sat.<br/>
        Mat sat on Sam.<br/>
        Sam sat on Mat.<br/>
        Mat sat. Sam sat.<br/>
        The End<br/><br/>

        cat sat walk cat sat<br/>
        mat met cat<br/>
        <hr/>

        <h1>Story 2</h1>
        lion vet<br/>
        The vet got into his van
        to see the lion
      </div>
    </div>
  );
}

export default App;
