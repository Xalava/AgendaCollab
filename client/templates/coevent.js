//event.js

Template.coevent.events({
//   "click .toggle-checked": function () {
//     // Set the checked property to the opposite of its current value
//     Meteor.call("setChecked", this._id, ! this.checked);
    
//   },
  
   "click .delete": function () {
   Meteor.call("deleteCoev", this._id)
}

  
//   "click .toggle-private": function () {
//   Meteor.call("setPrivate", this._id, ! this.private);
//   }
// });


// Template.task.helpers({
//   isOwner: function () {
//     return this.owner === Meteor.userId();
//   }
}); 