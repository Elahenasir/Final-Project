import React, { Component } from 'react';

class QuestionForm extends Component {
    constructor(props) {
        super(props);
        this.handleForm = (e) => {
            e.preventDefault();
            if(!this.refs.title.value) return false;
            let newQuestion = {
                title: this.refs.title.value,
                description: this.refs.description.value,
                voteCount: 0
            }
            this.refs.addQuestionForm.reset();
            this.props.onNewQuestion(newQuestion);
        }
        this.cancel = () => {
            this.props.onToggleFrom();
            this.refs.title.value = '';
            this.refs.description.value = '';
        }

    }
    render() {
        let formStyle = {
            'display': this.props.formsDisplay ? 'block' : 'none'
        }
        return(
            <form ref="addQuestionForm" className="container clearfix" style={formStyle} name="addQuestion" onSubmit={this.handleForm}>
                <div className="form-group">
                    <label htmlFor="qtitle">problem</label>
                    <input ref="title" type="text" className="form-control" id="qtitle" placeholder="Question title" />
                </div>
                <textarea ref="description" className="form-control" rows="3" placeholder="Description"></textarea>
                <button className="btn btn-success btn-question">confirm</button>
                <button className="btn btn-default btn-question" onClick={this.cancel}>cancel</button>
            </form>
        );
    }
}

export default QuestionForm;