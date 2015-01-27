Meteor.subscribe("coevents");

Template.body.helpers({
}); //EndTemplateBodyHelpers



// // Config pour comptes
Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

// Validate username, sending a specific error message on failure.
// Accounts.validateNewUser(function (user) {
//   if (user.username && user.username.length >= 3)
//     return true;
//   throw new Meteor.Error(403, "Whaaat!");
// });

// Validate username, without a specific error message.
// Accounts.onCreateUser(function (user) {


//     return true;
// });
