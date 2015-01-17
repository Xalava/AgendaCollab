//necessaire?
// if (Meteor.isServer) {
//   Meteor.startup(function () {
//       // code to run on server at startup
//   }
// } //End is server

Meteor.methods({
  addCoev: function (name,date,url) {

    // Anonymous input if no login
    if (! Meteor.userId()) {
      Coevents.insert({
        name: name,
        date:date,
        url:url,
        createdAt: new Date(),
        owner: "00",
        username: "Anonymous"
      });
    } else {
      Coevents.insert({
        name: name,
        date:date,
        url:url,
        createdAt: new Date(),
        owner: Meteor.userId(),
        username: Meteor.user().username
      });
    }
  },

  deleteCoev: function (coevId) {
    // var coevent = coevents.findOne(coevId);
    // if (coevent.private && coevent.owner !== Meteor.userId()) {
    //   // If the task is private, make sure only the owner can delete it
    //   throw new Meteor.Error("not-authorized");
    // } else {

    Coevents.remove(coevId);
    // }
  },
  // setChecked: function (taskId, setChecked) {
  //   var task = Tasks.findOne(taskId);
  //   if (task.private && task.owner !== Meteor.userId()) {
  //     // If the task is private, make sure only the owner can check it off
  //     throw new Meteor.Error("not-authorized");
  //   }
  //   Tasks.update(taskId, { $set: { checked: setChecked} });
  // },
  // setPrivate: function (taskId, setToPrivate) {
  //   var task = Tasks.findOne(taskId);

  //   // Make sure only the task owner can make a task private
  //   if (task.owner !== Meteor.userId()) {
  //     throw new Meteor.Error("not-authorized");
  //   }

  //   Tasks.update(taskId, { $set: { private: setToPrivate } });
  // }

}); //End methods

