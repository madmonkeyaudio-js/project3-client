import React, {Component} from 'react';
import { Button, Col, Form, FormGroup, Input, Row } from 'reactstrap';
import axios from 'axios';
import SERVER_URL from '../../constants'

class Controls extends Component {
    state = {
        newItemText: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.newItemText) {
            this.props.add(this.state.newItemText)
            let token = localStorage.getItem('mernToken')
                if (token) {
                axios.post(`${SERVER_URL}/profile`, {
                    headers: { 'Authorization': `Bearer ${token}` }    
                }, {result: this.state.newItemText}
                )
                .then(response => {
                    console.log(response)
                })
                .then(
                this.setState({ 
                    newItemText: '' 
                }))
                .catch(err => {
                    console.log(err)
                })
            }
        }
    }
    render() {
        return (
            <div> 
                <h3>Add something you'd like to do</h3>
                <Form onSubmit={this.handleSubmit} > 
                    <Row>
                        <Col sm="8">
                            <FormGroup>
                                <Input  type="text" 
                                        name="name"
                                        placeholder="What would you like to add?" 
                                        value={this.state.newItemText}
                                        onChange={(e) => {
                                            this.setState({ newItemText: e.target.value})
                                        }}/>
                                       
                            </FormGroup>
                        </Col>
                        <Col sm="2">
                            <Button color="primary" type="submit" add={this.props.add}> Add </Button>
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

export default Controls;