import './PostItem.css';

function PostItem(props){
    const complitedStyle = {
        fontStyle: 'italic',
        color: '#cdcdcd',
        textDecoration: 'line-throught'
    }

    return (
        <li className='post-item'>
            <div>
                <h3>{props.title}</h3>
                <div className='description'>{props.body}</div>
            </div>
            <div className=''>
                <button onClick={props.onEdit}>Edit</button>
                <button onClick={props.onDelete}>Delete</button>
            </div>
        </li>
    )
}

export default PostItem;