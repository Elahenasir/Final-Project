import React, { Component } from 'react';
import axios from 'axios';
import './index.css'
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
          axios.post(`/api/answers/`,{description:this.state.description,question_id:this.state.question_id})
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
          <div><textarea  id="txtDescription"  class="form-control" required  value={this.state.description} onChange={this.handleChange}/></div>
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