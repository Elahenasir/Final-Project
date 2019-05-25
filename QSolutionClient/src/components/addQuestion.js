import React, { Component } from 'react';
import axios from 'axios';

class AddQuestion extends Component {
    constructor(props) {

        super(props);
      
        this.state = {
            title: '',
            description: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({title: event.target.value});
      }
      handleDescriptionChange(event) {
        this.setState({description: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A question was submitted: ' + this.state.title);
        axios.post(`http://localhost:8080/api/questions/`,{title:this.state.title,description:this.state.description})
        .then(res => {
            window.location.href='./';
        })
        event.preventDefault();
      }
    render() {
        return(

<div>
    <div>
      <div>
        <h1>Insert New Question</h1>
      </div>
    </div>
    <div>
      <form onSubmit={this.handleSubmit}>
      <div>
          <div>Title</div>
          <div>
            <input type="text" id="txtTitle" name="txtTitle" required  value={this.state.title} onChange={this.handleChange}/>
            </div>
            <div>Description</div>
          <div>
            <input type="text" id="txtDescription" name="txtDescription" required  value={this.state.description} onChange={this.handleDescriptionChange}/>
            </div>
        </div>
        <div>
          <button id="btnInsert">Insert</button>
        </div>
      </form>
    </div>
  </div>
        )
    }
}

export default AddQuestion;