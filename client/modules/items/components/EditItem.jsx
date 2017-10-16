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
          <FormControl inputRef={element => this.refName = element} type="text" placeholder="Name"
            defaultValue={item ? item.name : ''}/>
          <FormControl inputRef={description => this.refDes = description} type="textarea" placeholder="Description"
            defaultValue={item ? item.description : ''}/>
          <DateTimeField ref="due" inputFormat="MM/DD/Y" defaultText=""/>
          <Button onClick={this.createItem.bind(this)}
            bsStyle="primary" type="submit" >Save Item</Button>
        </FormGroup>
        </form>
      </Panel>
      </Col>
    )
}
createItem(e) {
 e.preventDefault();
 const {create} = this.props;
  const element =this.refName.value;
  const description =this.refDes.value;
  create(element,description);
  // const {name, description} = this.refs;
  // create(this.refName.getValue());
  // element.getInputDOMNode().value = '';
}
}
export default EditItem;
