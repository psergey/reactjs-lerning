import React, { Component } from 'react';
import './PostForm.css';

class PostForm extends Component {

    render() {
        const { title, body, onChangeFormData, onSubmit, onReset } = this.props;
        return (
            <form className='form' onSubmit={onSubmit}>
                <div className='control'>
                    <label htmlFor="title">Title</label>
                    <input id="title" name='title' type="text" value={title} onChange={onChangeFormData}></input>
                </div>
                <div className='control'>
                    <label htmlFor="body">Post Text</label>
                    <textarea 
                        id="body"
                        name='body'
                        rows='5'
                        value={body}
                        onChange={onChangeFormData}></textarea>
                </div>
                <div className='actions'>
                    <button onClick={onReset} type="button">Cancel</button>
                    <button className='active'>Save</button>
                </div>
            </form>
        )
    }

    static defaultProps = {
        id: undefined,
        title: '',
        body: ''
    }    
}

export default PostForm;