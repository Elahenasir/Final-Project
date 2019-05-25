import React, { Component } from 'react';
// import QuestionItem from './QuestionItem.js';
import axios from 'axios';
class QuestionList extends Component {
    state = {
        questions: []
      }
    componentDidMount() {
        axios.get(`http://localhost:8080/api/questions/`)
          .then(res => {
            const questions = res.data.questions;
            this.setState({ questions });
            
          })
      }
    render() {
return(
    <div>
      <a href='questions/add-question'>Add Question</a>
        
<ul id="questions">
{ this.state.questions.map(question => <li><a href={'/questions/answers/' + question.id}>{question.title + question.description}</a></li>)}
        		</ul></div>);
    }
}
export default QuestionList;