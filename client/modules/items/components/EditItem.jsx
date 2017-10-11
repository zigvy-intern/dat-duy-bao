import React from 'react';
import { Col, Panel, FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';
const EditItem = ({content}) => (
  <Col xs={12} sm={6} smOffset={3}>
    <Panel>
      <h1>Edit Item</h1>
      <a href="/"><Glyphicon glyph="chevron-left"></Glyphicon> Back to Items</a>
      <form>
      <FormGroup>
      <FormControl type="text" placeholder="Name" />
      <FormControl type="textarea" placeholder="Description" />
      <Button bsStyle="primary" type="submit">Save Item</Button>
      </FormGroup>
      </form>
    </Panel>
  </Col>
);
export default EditItem;
