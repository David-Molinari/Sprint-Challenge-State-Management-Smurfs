import React from "react";
import { connect } from 'react-redux';
import { getSmurfs, addSmurf, addName, addAge, addHeight } from '../actions'
import "./App.css";

const App = props => {

  const fetchSmurfs = e => {
    e.preventDefault();
    props.getSmurfs();
  };

  const addName = e => {
    e.preventDefault();
    let text = e.target.value;
    props.addName(text);
  }

  const addAge = e => {
    e.preventDefault();
    let text = e.target.value;
    props.addAge(text);
  }

  const addHeight = e => {
    e.preventDefault();
    let text = e.target.value;
    props.addHeight(text);
  }

  const addSmurf = e => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let height = document.getElementById('height').value;
    props.addSmurf(name, age, height);
  };

    return (
      <div className="App">
        <>
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>
            {props.smurfs.map(smurfs => (
              <h4 key={smurfs.id}>{smurfs.name} - {smurfs.age} - {smurfs.height}</h4>
            ))}
          </div>
          {props.error && <p className='error'>{props.error}</p>}
          <button onClick={fetchSmurfs}>Fetch Smurfs!</button>
        </>
        <form name = "form" className = "form" >
          <input className = "input" id = 'name' onChange = {addName} type = 'text' placeholder = 'Enter Name' />
          <input className = "input" id = 'age' onChange = {addAge} type = 'text' placeholder = 'Enter Age' />
          <input className = "input" id = 'height' onChange = {addHeight} type = 'text' placeholder = 'Enter Height' />
          <button className = "button" onClick = {addSmurf}>Add Smurf!</button>
        </form>
      </div>
    );

}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  error: state.error
});

export default connect( mapStateToProps, { getSmurfs, addSmurf, addName, addAge, addHeight }) (App);
