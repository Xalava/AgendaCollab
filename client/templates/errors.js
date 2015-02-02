Errors = new Meteor.Collection(null);

throwError = function(message) {
Errors.insert({message: message})
}

Template.errors.helpers({
errors: function() {
return Errors.find();
}
});

clearErrors = function() {
Errors.remove({seen: true});
}