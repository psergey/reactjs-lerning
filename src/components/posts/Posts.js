import React, { Component } from 'react';
import './Posts.css';
import PostForm from './PostForm';
import PostItem from './PostItem';

class PostsList extends Component {

    constructor(){
        super();
        this.emptyPost = {
            id: undefined,
            title: '',
            body: ''
        };
        
        this.state = {
            currentPost: this.emptyPost,
            posts: []
        }
    }

    onFormReset = () => {
        this.setState({
            currentPost: this.emptyPost
        })
    }

    onFormSubmit = (item) => {

        if (!item.id) {
            fetch('https://jsonplaceholder.typicode.com/posts',  {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(item)
            })
            .then((response) => response.json())
            .then((item) => {
                let items = [...this.state.posts];
                const id = Math.max(...items.map(i => i.id)) + 1;
                
                item.id = id
                items.push(item);
                this.setState({
                    currentPost: this.emptyPost,
                    posts: items
                })
            });
        }
        else {
            fetch(`https://jsonplaceholder.typicode.com/posts/${item.id}`,  {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(item)
            })
            .then((response) => response.json())
            .then((item) => {
                let items = [...this.state.posts];
                const index = items.findIndex(el => el.id == item.id);
                items[index] = item;

                this.setState({
                    currentPost: this.emptyPost,
                    posts: items
                })
            });
        }
    }

    onEdit = (item) => {
        this.setState({
            currentPost: item
        });
    }

    onDelete = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,  {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            }
        }).then(_ => {
            this.setState({
                posts: this.state.posts.filter(item => item.id !== id)
            })
        })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(items => {
            this.setState({
                posts: items.slice(0, 10)
            })
        });
    }

    render() {
        const postItems = this.state.posts.map(post => 
            <PostItem
                key={post.id} 
                {...post} 
                onEdit={this.onEdit.bind(this, post)}
                onDelete={this.onDelete.bind(this, post.id)} />)

        return (
            <section className='posts'>
                <ul className='posts'>
                    <li>
                        <PostForm
                        {...this.state.currentPost}
                        onReset={this.onFormReset}
                        onSubmit={this.onFormSubmit}
                    />
                    </li>
                    {postItems}
                </ul>
          </section>
        )
    }

}

export default PostsList;