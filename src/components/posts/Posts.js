import React, { Component } from 'react';
import './Posts.css';
import PostForm from './PostForm';
import PostItem from './PostItem';

class PostsList extends Component {

    state = {
        currentPost: {
            id: undefined,
            title: '',
            body: ''
        },
        showEditForm: false,
        posts: []
    }

    onFormReset = () => {
        this.setState({ showEditForm: false })
    }

    onFormSubmit = async (event) => {
        event.preventDefault();

        if (!this.state.currentPost.id) {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts',  {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(this.state.currentPost)
            })
            const post = await response.json();
            post.id = Math.max(...this.state.posts.map(i => i.id)) + 1; // synthetic id
            this.setState({ posts: [post, ...this.state.posts] });
        }
        else {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.currentPost.id}`,  {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(this.state.currentPost)
            });
            const post = await response.json();
            this.setState({ posts: this.state.posts.map(item => item.id === post.id ? post : item) });
        }
        
        this.onFormReset();
    }

    onAdd = () => {
        this.setState({ 
            showEditForm: true,
            currentPost: {} 
        });
    }

    onEdit = (item) => {
        this.setState({ 
            showEditForm: true,
            currentPost: item 
        });
    }

    onDelete = async (item) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${item.id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            }
        })
        if (!response.ok) {
            return;
        }
        this.setState({ posts: this.state.posts.filter(post => post.id !== item.id) })
    }

    onChangeFormData = (event) => {
        const { name, value } = event.target;
        this.setState({
            currentPost: {
                ...this.state.currentPost,
                [name]: value
            }
        })
    }

    async componentDidMount() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json();
        this.setState({ posts: posts.slice(0, 10) })
    }

    render() {
        return (
            <section className='posts'>
                <button className='link-button' onClick={this.onAdd}>Add New Post</button>
                <ul className='posts'>
                    {this.state.showEditForm &&
                     <li>
                        <PostForm
                            title={this.state.currentPost.title}
                            body={this.state.currentPost.body}
                            onChangeFormData={this.onChangeFormData}
                            onReset={this.onFormReset}
                            onSubmit={this.onFormSubmit}
                        />
                    </li>}
                    {this.state.posts.map(post => 
                        <PostItem
                            key={post.id} 
                            {...post} 
                            onEdit={this.onEdit.bind(this, post)}
                            onDelete={this.onDelete.bind(this, post)} />)
                }
                </ul>
          </section>
        )
    }
}

export default PostsList;