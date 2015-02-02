Template.fbimportList.events({

  'click .importValidation': function (event) {
	var impArray = importedEvents.find({toadd:true}).fetch();
	console.log(impArray)

	// selection only 
	for (var i = impArray.length - 1; i >= 0; i--) {
		Meteor.call(
			'addCoev',
			impArray[i].name,
			impArray[i].start_time,
			("http://www.facebook.com/events/").concat(impArray[i].id)
			);
		console.log(impArray[i].id.concat(" imported"));
	}; 	 

	importedEvents.remove({});
	clearErrors();
	Router.go("/");

 	},
 	  
 	'click .backBtn': function (event) {
 	 
	importedEvents.remove({});
	clearErrors();
	Router.go("/");

 	} 

});

importedEvents = new Meteor.Collection( null );

Template.fbimportList.helpers({

	importedEvents: function () {
	FBaddEvents(importedEvents,"/me/events");

	console.log("importedEventshelper")
	return importedEvents.find({});
	
	}

}); //helpers