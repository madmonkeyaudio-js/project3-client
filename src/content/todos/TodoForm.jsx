import React, {Component} from 'react';
import { Button, Col, Form, FormGroup, Input, Row } from 'reactstrap';
import axios from 'axios';
import SERVER_URL from '../../constants'

class TodoForm extends Component {
    state = {
        newItemText: '',
        addedItem: [], 
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    postForm = (e) => {
        e.preventDefault();
        if (this.state.newItemText) {
            let token = localStorage.getItem('mernToken')
            let text = this.state.newItemText; 
                axios.post(`${SERVER_URL}/holidayPlanner`, 
                {
                    item: text, 
                    holidayId: this.props.holidayId
                }, 
                    {
                        headers: { 'Authorization': `Bearer ${token}` }
                    })
                .then(response => {
                    console.log(response)
                    this.setState({
                        addedItem: [...this.state.addedItem, {text: response.data.todoItem}]
                    })
                })
                .catch(err => {
                    console.log(err)
                })   
            }
        }

       
    
    render() {
        return (
            <div> 
                <h3>Add something you'd like to do for {this.props.holidayName}</h3>
                <Form onSubmit={this.postForm} > 
                    <Row>
                        <Col sm="8">
                            <FormGroup>
                                <Input  type="text" 
                                        name="newItemText"
                                        placeholder="What would you like to add?" 
                                        value={this.state.newItemText}
                                        onChange={this.handleChange}/>

                                <Input type="hidden"
                                       value={this.props.holidayId} />
                                <Input type="hidden"
                                       value={this.props.holidayName} />
                                       
                            </FormGroup>
                        </Col>
                        <Col sm="2">
                            <Button color="primary" type="submit" onClick={this.props.addNewItem}> Add </Button>
                        </Col>
                        <Col sm="2">
                            <Button color="danger" onClick={this.props.clear}> Clear</Button>
                        </Col>
                    </Row>
                </Form>
                <h1>{this.state.addedItem.text}</h1>
            </div>
        )
    }
}


export default TodoForm;