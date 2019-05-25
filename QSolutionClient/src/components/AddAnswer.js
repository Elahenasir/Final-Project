import React, { Component } from 'react';
import axios from 'axios';

class AddAnswer extends Component {
    constructor(props) {

        super(props);
      
        this.state = {
            description: '',
            question_id: this.props.match.params.id,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({description: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A Answer was submitted: ' + this.state.description);
        axios.post(`http://localhost:8080/api/answers/`,{description:this.state.description,question_id:this.state.question_id})
        .then(res => {
            window.location.href='../answers/' + this.state.question_id;
        })
        event.preventDefault();
      }
    render() {
        return(

<div>
    <div>
      <div>
        <h1>Submit New Answer</h1>
      </div>
    </div>
    <div>
      <form onSubmit={this.handleSubmit}>
      <div>
          <div>Description</div>
          <div><input type="text" id="txtDescription" name="txtDescription" required  value={this.state.description} onChange={this.handleChange}/></div>
        </div>
        <div>
          <button id="btnInsert">Submit</button>
        </div>
      </form>
    </div>
  </div>
        )
    }
}

export default AddAnswer;