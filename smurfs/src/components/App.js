import React from "react";
import Smurfs from "./allSmurfsList";
import SmurfForm from "./form";
import { getSmurfs, addSmurfs } from "../actions/index.js";

import { connect } from "react-redux";

import "./App.css";

const App = props => {
  return (
    <div className="App">
      <h1 className="title">SMURFS! 2.0 W/ Redux</h1>
      <div className="smurf-wrapper">
      <SmurfForm  addSmurfs={props.addSmurfs} />
        <Smurfs
          getSmurfs={props.getSmurfs}
          smurfs={props.smurfs}
          isFetching={props.isFetching}
        />
      </div>

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
