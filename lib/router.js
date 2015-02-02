Router.configure({
	layoutTemplate: 'galLayout',
	loadingTemplate: 'loading',
	waitOn: function() {return Meteor.subscribe('coevents');}
});

Router.route('/', {name: 'coeventsList'});
Router.route('/fbimport', {name: 'fbimportList'});
// Router.before(function() { clearErrors() });


// Meteor.Router.filters({
//   'clearErrors': function(page) {
//     clearErrors();
//     return page;
//   }
// });

// Meteor.Router.filter('clearErrors');