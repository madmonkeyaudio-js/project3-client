import React from 'react';
import TodoListItem from './TodoListItem';
import { ListGroup } from 'reactstrap';


const TodoList = props => {

    const displayItems = props.items.map((item, idx) => {
        return <TodoListItem 
        item={item} 
        key={idx} index={idx} 
        delete={props.delete} 
        markDone={props.markDone}/>
    })
    return (
        <div>
            <ListGroup>
                {displayItems}
            </ListGroup>
        </div>
    )
}

export default TodoList;