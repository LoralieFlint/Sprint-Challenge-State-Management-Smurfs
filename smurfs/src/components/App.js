import React from "react";
import "./App.css";
import { connect } from "react-redux";

import { getSmurfs, addSmurfs } from "../actions/index.js";

const App = props => {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};

const mapDispatchToProps = { getSmurfs, addSmurfs };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
