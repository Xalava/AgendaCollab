Meteor.startup(function () {
     // code to run on server at startup
});


Meteor.methods({
  addCoev: function (name,date,url) {

    // Anonymous input if no login
    if (! Meteor.userId()) {
      Coevents.insert({
        name: name,
        date:date,
        url:url,
        votes:0,
        createdAt: new Date(),
        owner: "00",
        username: "Anonymous"

      });
    } else {
      Coevents.insert({
        name: name,
        date:date,
        url:url,
        votes:0,
        createdAt: new Date(),
        owner: Meteor.userId(),
        username: Meteor.user().username
      });
    }
  },
  voteCoev: function (coevId) {
    Coevents.update(coevId,{$inc: {votes: 1}});

  },
  deleteCoev: function (coevId) {
    // var coevent = coevents.findOne(coevId);
    // if (coevent.private && coevent.owner !== Meteor.userId()) {
    //   // If the task is private, make sure only the owner can delete it
    //   throw new Meteor.Error("not-authorized");
    // } else {
    if (! Meteor.user()) {
      // return alert("Please sign in to be able to delete events");
      throw new Meteor.Error("not-authorized");
    }  else {
      Coevents.remove(coevId);
    }
  },
  // FACEBOOOK
  // fbme: function() {
  //   var user = Meteor.users.findOne(this.userId);
  //   //note: I don't have access to a meteor project hooked up to the FB API
  //   //so where the access token is stored in a user object may differ,
  //   //I got this from an old project. Try logging user here to find it
  //   //if this doesn't work
  //    var accessToken = user.services.facebook.accessToken;

  //   if (!user || !accessToken)
  //     throw new Meteor.Error(500, "Not a valid Facebook user logged in");

  //   // return HTTP.get("https://graph.facebook.com/me", { params: {access_token: accessToken}}).data;
  // }

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

