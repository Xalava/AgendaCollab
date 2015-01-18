Meteor.subscribe("coevents");


Template.body.helpers({
  
  coevents: function () {
    switch (Session.get("sort")) {
      case 1://trending
        return Coevents.find({}, {sort: {votes: -1}});
        break;
      case 2://upcoming
        return Coevents.find({}, {sort: {date: 1}},{date:{$gt: Date()}},{date:{$not:0}});
        // suprimer date aujourd'hui
        //pas vide
        break;
      case 3://new
        return Coevents.find({}, {sort: {createdAt: -1}});
        break;
      case 4://bestOfToday
        return Coevents.find({}, {date: {$gt:Date()}},{sort: {votes: -1}});
        break; 
      default:
        return Coevents.find({}, {sort: {createdAt: -1}});
    }
  }
    //   // If hide completed is checked, filter tasks
    //   return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
    // } else {
    //   // Otherwise, return all of the tasks
    //   return Tasks.find({}, {sort: {createdAt: -1}});
    // }

    
    // if (Session.get("hideCompleted")) {
    //   // If hide completed is checked, filter tasks
    //   return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
    // } else {
    //   // Otherwise, return all of the tasks
    //   return Tasks.find({}, {sort: {createdAt: -1}});
    // }


//   hideCompleted: function () {
//     return Session.get("hideCompleted");
//   },

//   incompleteCount: function () {
//   return Tasks.find({checked: {$ne: true}}).count();
// },


//   isAnon: function () {
//   return Meteor.userId();
// }



}); //EndTemplateBodyHelpers


Template.body.events({

  'click .trending': function (event) {
    Session.set("sort", 1);
  },
  
  'click .upcoming': function (event) {
    Session.set("sort", 2);
  },
    'click .new': function (event) {
    Session.set("sort", 3);
  },
  'click .bestOfToday': function (event) {
    Session.set("sort", 4);
  }
});



// // Config pour comptes
// Accounts.ui.config({
//     passwordSignupFields: "USERNAME_ONLY"
//   });

    // Validate username, sending a specific error message on failure.
    Accounts.validateNewUser(function (user) {
      if (user.username && user.username.length >= 3)
        return true;
      throw new Meteor.Error(403, "Whaaat!");
    });

    // Validate username, without a specific error message.
    Accounts.onCreateUser(function (user) {


        return true;
    });





  // // counter starts at 0
  // Session.setDefault("counter", 0);

  // Template.hello.helpers({
  //   counter: function () {
  //     return Session.get("counter");
  //   }
  // });

  // Template.hello.events({
  //   'click button': function () {
  //     // increment the counter when button is clicked
  //     Session.set("counter", Session.get("counter") + 1);
  //   }
  // });
