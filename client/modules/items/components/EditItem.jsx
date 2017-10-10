import React from 'react';
import { Col, Panel, Input, ButtonInput } from 'react-bootstrap';
const EditItem = ({content}) => (
  <Col xs={12} sm={6} smOffset={3}>
    <Panel>
      <h1>Edit Item</h1>
      <a href="/"><Glyphicon glyph="chevron-left"></Glyphicon> Back to Items</a>
      <form>
        <Input type="text" placeholder="Name" />
        <Input type="textarea" placeholder="Description" />
        <ButtonInput bsStyle="primary" type="submit" value="Save Item"/>
      </form>
    </Panel>
  </Col>
);
export default EditItem;
