import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddQuestion from './components/addQuestion.js';
import './App.css';
import QuestionList from './components/QuestionList.js';
import MainComponent from './components/MainComponent.js';
import Login from './components/Login.js';
import MainNavigation from './components/Navigation/MainNavigation.js';
import QuestionAnswers from './components/QuestionAnswers.js';
import AddAnswer from './components/AddAnswer.js';


class App extends Component {
  render() {
    return (
    <Router>
      <MainNavigation/>
          <Switch>
            <Route exact path='/' component={MainComponent} />
              <Route exact path='/questions/add-question' component={AddQuestion} /> 
              <Route exact path='/questions/answers/:id' component={QuestionAnswers} />
              <Route exact path='/questions/add-answer/:id' component={AddAnswer} />
               <Route exact path='/questions' component={QuestionList} />
               <Route exact path='/Login' component={Login} />

          </Switch>
             </Router>
    );
  }
}



export default App;
