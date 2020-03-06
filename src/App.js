import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Person from './Person/Person'
import MyError from './Error/Error'
import Login from './Login/Login';
import Ads from './Ads/Ads';
import Signup from './Signup/Signup';
import AddItem from './AddItem/AddItem';
import Header from './Header/Header';
import MyAds from './MyAds/MyAds';
import Ad from './Ad/Ad';

class App extends Component {
  state = {
    persons: [
      {
        name: 'Ali', age: 28
      },
      {
        name: 'Umer', age: 27
      },
      {
        name: 'Zain', age: 22
      }
    ]
  }

  switchNameHandler = (nawName) => {
    console.log("Umer");
    // Don't change state like this 
    // this.state.persons[0].name = "New Name";
    // Do this
    this.setState({
      persons: [
        {
          name: nawName, age: 28
        },
        {
          name: 'Umer', age: 27
        },
        {
          name: 'Zain', age: 22
        }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {
          name: event.target.value, age: 28
        },
        {
          name: 'Umer', age: 27
        },
        {
          name: 'Zain', age: 22
        }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="header">
          <h1 className="app-title">
            SBAY
        </h1>
        </div>
        <Switch>
          <Route path="/person/:name/:id" component={Person} Person />
          <Route path="/person" component={() => (<Person name="Umer" age="22" changed={this.nameChangeHandler} />)} />


          <Route path="/error" component={MyError} />
          <Route path="/" exact component={Ads} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/add-item" component={AddItem} />
          <Route path="/my-ads" component={MyAds} />
          <Route path="/item-details/:id" component={Ad}/> 
          <Route component={MyError} />
        </Switch>


        {/* <button onClick={() => this.switchNameHandler('NEW NAME')}>Switch Name</button>

        <button onClick={this.switchNameHandler.bind(this, 'Uzair')}>Switch Name</button>
        <Person name={this.state.persons[0].name} changed={this.nameChangeHandler}
          age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name}
          age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler} /> */}

      </div>
    );
    // return React.createElement('div', {className: 'App'},
    // React.createElement('h1', null, 'Just test dynamic element!'))
  }
}

export default App;
