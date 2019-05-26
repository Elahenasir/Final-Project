import React, { Component } from 'react';

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
 
 <h1>Answers</h1>
 
 <h3>{this.state.question.title}</h3>
 <p>{this.state.question.description}</p>
 <div><h5>Answer by :</h5><h6>{this.state.question.email + " " +this.state.question.created_date}</h6></div>
 <hr/>
 <br/>
 { this.state.answers.map(item => 
 <div>
 <p>{item.description}</p>
 <div><h5>Answer by :</h5><h6> {item.email + " " +item.created_date}</h6></div>
 <hr/>
 </div>
 )}
 <div>
     <br/>
 <button><a href={'/questions/add-answer/' + this.state.question.id}>Submit Your Answer </a></button>
 </div>
</div>
)}
}
export default QuestionAnswers;