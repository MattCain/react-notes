import React from 'react';
import { Input, ButtonInput } from 'react-bootstrap';

class CreateTodoComponent extends React.Component {
  handleSubmit() {
    
  }
  render() {
    return (
      <div className="col-md-12">
        <h2>Create a Note</h2>
        <form onSubmit={this.handleSubmit}>
          <Input type="text" label="Note Title" ref="title" />
          <Input type="textarea" label="Note Details" ref="text" />
          <ButtonInput type="submit" value="Submit Button" />
        </form>
      </div>
    )
  }
}

export default CreateTodoComponent;