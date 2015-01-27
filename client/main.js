Meteor.subscribe("coevents");

Template.body.helpers({
}); //EndTemplateBodyHelpers

// // Config pour comptes
Accounts.ui.config({
  requestPermissions: {
    facebook: ['public_profile,user_events'] //email,user_location,user_likes
      },
    passwordSignupFields: "USERNAME_ONLY" //USERNAME_AND_OPTIONAL_EMAIL
  });