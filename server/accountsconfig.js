//package service configuration
ServiceConfiguration.configurations.remove({
    service: 'facebook'
});
ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '',
    secret: ''
});




// // Config pour comptes
// Accounts.ui.config({
// 	requestPermissions: {
//     facebook: ['public_profile,user_events'] //email,user_location,user_likes
//       },
//     passwordSignupFields: "USERNAME_AND_OPTIONAL_EMAIL"
//   });

// Validate username, sending a specific error message on failure.
// Accounts.validateNewUser(function (user) {
//   if (user.username && user.username.length >= 3)
//     return true;
//   throw new Meteor.Error(403, "Whaaat!");
// });

