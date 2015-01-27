Router.configure({
	layoutTemplate: 'galLayout',
	loadingTemplate: 'loading',
	waitOn: function() {return Meteor.subscribe('coevents');}
});

Router.route('/', {name: 'coeventsList'});

//deprecated?
// Router.map(function(){
// 	this.route('coeventsList', {path:'/'});

// });