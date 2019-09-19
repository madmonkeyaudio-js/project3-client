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

clear = () => {
  this.setState({
    items: []
  })
}

markDone = (indexToChange) => {
    let currentItems = [...this.state.items]
    currentItems[indexToChange].finished = !currentItems[indexToChange].finished
    this.setState({ items: currentItems })
}

delete = (indexToDelete) => {
  let currentItems = [...this.state.items]
  currentItems.splice(indexToDelete, 1)
  this.setState({ items: currentItems })
}

render() {
  return (
    <div>
        <Container>
          <TodoForm clear={this.clear} addNewItem={this.addNewItem} holidayName={this.props.holidayName}/>
          <TodoList items={this.state.items} delete={this.delete} markDone={this.markDone}/>
        </Container>
      </div>
    );
  }
}

export default TodoMainComp;
