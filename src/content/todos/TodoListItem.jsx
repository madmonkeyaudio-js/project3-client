import React from 'react';
import { ListGroupItem, Badge, Col, Row } from 'reactstrap';

const TodoListItem = props => {
    return (
        <ListGroupItem>
            <Row>
                <Col xs="9">
                    {props.index + 1}. {props.item.finished ? <del>{props.item.text}</del> : props.item.text}
                </Col>
                <Col xs="3">
                   <Badge color="success" className="pointer" onClick={() => props.markDone(props.index)}>

                    V
                    </Badge>{' '}
                    <Badge color="danger" 
                    className="pointer" 
                    onClick={() => {props.delete(props.index)}}>
                    X
                    </Badge>

                </Col>
            </Row>   
        </ListGroupItem>
    )
}

export default TodoListItem;