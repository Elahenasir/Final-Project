import React, { Component } from 'react';

class QuestionForm extends Component {
    render() {
        return(<button id="add-question" className="btn btn-success" onClick={this.props.onToggleFrom}>Add Question</button>);
    }
}

export default QuestionForm;