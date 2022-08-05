import './PostItem.css';

function PostItem(props){
    const complitedStyle = {
        fontStyle: 'italic',
        color: '#cdcdcd',
        textDecoration: 'line-throught'
    }

    return (
        <li>
            <div className='post-item'>
                <p>{props.title}</p>
            </div>
            <div className=''>
                <button onClick={props.onEdit}>Edit</button>
                <button onClick={props.onDelete}>Delete</button>
            </div>
        </li>
    )
}

export default PostItem;