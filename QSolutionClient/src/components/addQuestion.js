import React, { Component } from 'react';
import axios from 'axios';
import './index.css'
import Button from 'react-bootstrap/Button';


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
        <h3>Insert New Question</h3>
        <hr/>
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
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" required  value={this.state.description} onChange={this.handleDescriptionChange}/>
            </div>
        </div>
        <div>
          <button  id="btnInsert">Insert</button>
        </div>
      </form>
    </div>
  </div>
        )
    }
}

export default AddQuestion;