import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import { Accounts } from 'meteor/accounts-base'

export default function (){
  Meteor.methods({
    'users.create'(mail, password){
      check(mail, String);
      check(password, String);
      return Accounts.createUser({mail, password});
    }
  });
}
