import React, { Component } from 'react';
import axios from 'axios';
import './index.css'
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
     <button type="button" className="btn btn-primary btn-lg"><a href='questions/add-question'>Add Question</a></button>
        <br/>
       
       <table class="table table-sm">
         <thead class="thead-dark" ><tr><th scope="col">All questions</th></tr></thead>
{ this.state.questions.map(question =><tr><td><a href={'/questions/answers/' + question.id }>{question.title }</a></td></tr>)}
</table>
        		</div>);
    }
}
export default QuestionList;
