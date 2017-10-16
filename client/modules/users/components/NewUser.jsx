import React from 'react';
import { Col, Panel, Input, Button, Glyphicon, FormGroup, FormControl } from 'react-bootstrap';

class NewUser extends React.Component {
  render() {
      const {error} = this.props;
      return (
        <Col xs={12} sm={6} smOffset={3}>
          <Panel>
            <h1>Register</h1>
            {error ? <p style={{color: 'red'}}>{error}</p> : null}
            <form>
              <FormGroup>
              <FormControl inputRef={mail =>  this.refMail = mail} type="email" placeholder="Email" />
              <FormControl inputRef={password => this.refPass = password} type="password" placeholder="Password" />
              <Button onClick={this.createUser.bind(this)}
              bsStyle="primary" type="submit" >Sign Up</Button>
              </FormGroup>
            </form>
          </Panel>
        </Col>
      )
    }
    createUser(e) {
        e.preventDefault();
        const {create} = this.props;
        const mail = this.refMail.value;
        const password = this.refPass.value;
        createUser(mail,password)
      }
    }
export default NewUser;
