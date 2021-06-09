import ListItem from './ListItem';
import './FullList.css';
import React, {useState} from 'react';
import reactDom from 'react-dom';

const FullList = (props) => {
    
    const deleteClick = (itemId) => {
        props.onDeleteClickApp(itemId);
    }
    return (
        <div className='full-list'>
            {props.listData.map((item) => <ListItem 
            itemContent={item.text}
            itemScore={item.score}
            turnClass={item.isTurn !== true ? "list-item" : "list-turn"}
            onDeleteClick={deleteClick} 
            id={item.id} 
            key= {item.id}/>)}
        </div>
    )
}
export default FullList;