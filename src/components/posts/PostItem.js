import './PostItem.css';

function PostItem(props){
    const complitedStyle = {
        fontStyle: 'italic',
        color: '#cdcdcd',
        textDecoration: 'line-throught'
    }

    return (
        <li className='post-item'>
            <div className='item'>
                <h3>{props.title}</h3>
                <div className='description'>{props.body}</div>
            </div>
            <div className='actions'>
                <button onClick={props.onEdit} className='link-button'>Edit</button>
                <button onClick={props.onDelete} className='link-button'>Delete</button>
            </div>
        </li>
    )
}

export default PostItem;