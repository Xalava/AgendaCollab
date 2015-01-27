Router.configure({
	layoutTemplate: 'galLayout',
	loadingTemplate: 'loading',
	waitOn: function() {return Meteor.subscribe('coevents');}
});

Router.route('/', {name: 'coeventsList'});
Router.route('/fbimport', {name: 'fbimportScreen'});

//deprecated?
// Router.map(function(){
// 	this.route('coeventsList', {path:'/'});

// });