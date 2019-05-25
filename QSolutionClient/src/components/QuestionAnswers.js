import React, { Component } from 'react';
// import QuestionItem from './QuestionItem.js';
import axios from 'axios';
class QuestionAnswers extends Component {
    state = {
        question: {},
        answers: []

      }
    componentDidMount() {
        var id = this.props.match.params.id;
        axios.get(`http://localhost:8080/api/questions/`+ id)
          .then(res => {
            const question = res.data.questions[0];
            const answers = res.data.answers;
            this.setState({ question });
            this.setState({ answers });
          })
      }
    render() {
return(
    <div>
 <h1>{this.state.question.title}</h1>
 <p>{this.state.question.description}</p>
 <div>by {this.state.question.email + " " +this.state.question.created_date}</div>
 <hr/>
 <h1>Answers</h1>
 <br/>
 { this.state.answers.map(item => 
 <div>
 <p>{item.description}</p>
 <div>by {item.email + " " +item.created_date}</div>
 </div>
 )}
 <div>
     <br/>
 <a href={'/questions/add-answer/' + this.state.question.id}>Submit Your Answer </a>
 </div>
</div>
)}
}
export default QuestionAnswers;