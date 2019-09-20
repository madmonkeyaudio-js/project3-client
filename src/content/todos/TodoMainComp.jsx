import React from 'react';
import {Container} from 'reactstrap';

//Custom Components
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class TodoMainComp extends React.Component {
state = {
  items: []
}

addNewItem = (newItemText) => {
  this.setState({
    items: [...this.state.items, { text: newItemText, finished: false}]
  })
}


render() {
  return (
    <div>
        <Container>
          <TodoForm getUserHolidays={this.props.getUserHolidays} clear={this.clear} addNewItem={this.addNewItem} holidayName={this.props.holidayName} holidayId={this.props.holidayId}/>
          <TodoList  items={this.props.items} delete={this.delete} markDone={this.markDone}/>
        </Container>
      </div>
    );
  }
}

export default TodoMainComp;
