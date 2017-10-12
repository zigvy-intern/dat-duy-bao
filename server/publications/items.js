import {Categories} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
Meteor.publish('items.list', function() {
return Items.find();
});
export default function () {
  Meteor.publish('categories.list', function () {
    return Categories.find();
  }); 
}
