Router.configure({
	layoutTemplate: 'galLayout',
	loadingTemplate: 'loading',
	waitOn: function() {return Meteor.subscribe('coevents');}
});

Router.route('/', {name: 'coeventsList'});
Router.route('/fbimport', {name: 'fbimportList'});
