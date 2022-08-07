import React, { Component } from 'react';
import './PostForm.css';

class PostForm extends Component {

    constructor(props) {
        super(props)

        this.state ={
            id: null,
            title: '',
            body: ''
        };
    }

    setData = (item) => {
        this.setState({
            id: item.id,
            title: item.title,
            body: item.body
        })
    }

    onSubmit = (event) => {
        debugger
        event.preventDefault();
        // const [postTitle, postText] = event.target;
        this.props.onSubmit({
            id: this.state.id,
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

    // componentWillReceiveProps(props) {
    //     this.setState({ 
    //         title: props.title,
    //         body: props.body
    //     })
    //   }

    render() {
        return (
            <form className='form' onSubmit={this.onSubmit}>
                <div className='control'>
                    <label htmlFor="title">Title</label>
                    <input id="title" name='title' type="text" value={this.state.title} onChange={this.onChange}></input>
                </div>
                <div className='control'>
                    <label htmlFor="body">Post Text</label>
                    <textarea 
                        id="body"
                        name='body'
                        rows='5'
                        value={this.state.body}
                        onChange={this.onChange}></textarea>
                </div>
                <div className='actions'>
                    <button onClick={this.props.onReset} type="button">Clear</button>
                    <button className='active'>Save</button>
                </div>
            </form>
        )
   
    }
}

export default PostForm;