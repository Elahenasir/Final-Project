import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
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
 
 <h3>Answers:</h3>
 <hr/>
 <h5>{this.state.question.title}</h5>
 <p>{this.state.question.description}</p>
 {/* <div><h6>Answer by :</h6><h8>{this.state.question.email + " " +this.state.question.created_date}</h8></div> */}
 <hr/>
 <br/>
 { this.state.answers.map(item => 
 <div>
 <p>{item.description}</p>
 <div><h6>Answer by :</h6><h8> {item.email + " " +item.created_date}</h8></div>
 <hr/>
 </div>
 )}
 <div>
     <br/>
     <Button variant="primary" size="nd" id='BTN'><a href={'/questions/add-answer/' + this.state.question.id}>Submit Your Answer </a></Button>
 </div>
</div>
)}
}
export default QuestionAnswers;