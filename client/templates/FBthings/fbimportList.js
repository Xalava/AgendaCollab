Template.fbimportList.events({

  'click .importValidation': function (event) {
	var impArray = importedEvents;
	// selection only 
	for (var i = impArray.length - 1; i >= 0; i--) {
		Meteor.call(
			'addCoev',
			impArray[i].name,
			impArray[i].start_time,
			("http://www.facebook.com/events/").concat(impArray[i].id)
			);
	}; 	 
	importedEvents.remove({});
	Router.go("/");

 	},
 	  
 	'click .backBtn': function (event) {
 	 
	importedEvents.remove({});
	Router.go("/");

 	} 

});

importedEvents = new Meteor.Collection( null );

Template.fbimportList.helpers({

	importedEvents: function () {
	FBattendingEvents(importedEvents);

	console.log("importedEventshelper")
	return importedEvents.find({});
	
	}

}); //helpers