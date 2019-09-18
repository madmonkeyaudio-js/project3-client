import React from 'react';
import {Container} from 'reactstrap';

//Custom Components
import Controls from './Controls';
import TodoList from './TodoList';

class TodoMainComp extends React.Component {
state = {
  items: []
}

add = (newItemText) => {
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
          <Controls clear={this.clear} add={this.add}/>
          <TodoList items={this.state.items} delete={this.delete} markDone={this.markDone}/>
        </Container>
      </div>
    );
  }
    
}

export default TodoMainComp;
