import React from 'react';
import { Col, Panel, FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';

class EditItem extends React.Component {
  render() {
    const {item} = this.props;
    return (
      <Col xs={12} sm={6} smOffset={3}>
      <Panel>
        <a href="/"><Glyphicon glyph="chevron-left"></Glyphicon> Back to Items</a>
        <h1>{item ? 'Edit' : 'Add'} Item</h1>
        <form>
        <FormGroup>
          <FormControl ref="name" type="text" placeholder="Name"
            defaultValue={item ? item.name : ''}/>
          <FormControl ref="description" type="textarea" placeholder="Description"
            defaultValue={item ? item.description : ''}/>
          <DateTimeField />
          <Button onClick={this.createItem.bind(this)}
            bsStyle="primary" type="submit" value="Save Item"/>
        </FormGroup>
        </form>
      </Panel>
      </Col>
    )
}
createItem(e) {
  e.preventDefault();
  const {create} = this.props;
  const {name, description} = this.refs;
  create(name.getValue(), description.getValue());
  name.getInputDOMNode().value = '';
  description.getInputDOMNode().value = '';
  }
}
export default EditItem;
