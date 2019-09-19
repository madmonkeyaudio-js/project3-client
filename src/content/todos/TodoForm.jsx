import React, {Component} from 'react';
import { Button, Col, Form, FormGroup, Input, Row } from 'reactstrap';
import axios from 'axios';
import SERVER_URL from '../../constants'

class TodoForm extends Component {
    state = {
        newItemText: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    postForm = (e) => {
        e.preventDefault();
        if (this.state.newItemText) {
            this.props.addNewItem(this.state.newItemText)
            let token = localStorage.getItem('mernToken')
            let text = this.state.newItemText; 
                axios.post(`${SERVER_URL}/holidayPlanner`, text, 
                    {
                        headers: { 'Authorization': `Bearer ${token}` }
                    })
                .then()
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
                                       
                            </FormGroup>
                        </Col>
                        <Col sm="2">
                            <Button color="primary" type="submit" addNewItem={this.props.addNewItem}> Add </Button>
                        </Col>
                        <Col sm="2">
                            <Button color="danger" onClick={this.props.clear}> Clear</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}


export default TodoForm;