import React from 'react';
import { ListGroupItem, Badge, Col, Row } from 'reactstrap';

const TodoListItem = props => {
    
    return (
        <ListGroupItem>
            <Row>
                <Col xs="9">
                  {props.item.todoItem}
                </Col>
            </Row>   
        </ListGroupItem>
    )
}

export default TodoListItem;