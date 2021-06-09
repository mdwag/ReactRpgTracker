import React, {useState} from 'react';
import './ListItem.css';

const ListItem = (props) => {
    const [nameContent, setNameContent] = useState(props.itemContent);
    const nameClickHandler = () => {
        setNameContent(prompt("What's this character's name?"));
    }
    const deleteClick = () => {
        props.onDeleteClick(props.id);
    }
    return (
        <div className={props.turnClass}  id={props.id} key={props.key}>
        <div className='score-div'>
            {props.itemScore}
        </div>
        <div className='name-div'>
        {nameContent}
        <i class="fas fa-edit edit-class" onClick={nameClickHandler}></i>
        </div>
        <div className='exit-div'>
    <i className="fas fa-window-close fa-2x" id='window-icon' onClick={deleteClick}></i>
    </div>
        </div>
    )
}

export default ListItem;