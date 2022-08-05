import React, { Component } from 'react';

class PostForm extends Component {

    constructor(props) {
        super(props)

        this.state ={
            title: '',
            body: ''
        };
    }

    onSubmit = (event) => {
        event.preventDefault();
        // const [postTitle, postText] = event.target;
        this.props.onSubmit({
            id: this.props.id,
            title: this.state.title,
            body: this.state.body,
            userId: 1,
        })
    }

    onChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    componentWillReceiveProps(props) {
        this.setState({ 
            title: props.title,
            body: props.body
        })
      }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input id="title" name='title' type="text" value={this.state.title} onChange={this.onChange}></input>
                </div>
                <div>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" name='body' value={this.state.body} onChange={this.onChange}></textarea>
                </div>
                <button>Save</button>
            </form>
        )
   
    }
}

export default PostForm;