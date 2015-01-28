importedEvents = new Mongo.Collection();

Template.fbimportList.events({

  'click .importValidation': function (event) {
	var impArray = importedEvents.find({toadd:true}).fetch();

	for (var i = impArray.length - 1; i >= 0; i--) {
		Meteor.call(
			'addCoev',
			impArray[i].name,
			impArray[i].start_time,
			("http://www.facebook.com/events/").concat(impArray[i].id)
			);
	};
  	 
	
	Router.go("/");

 	}  


});


Template.fbimportList.helpers({



	importedEvents: function () {
		console.log("in importedEvents");

		FBattendingEvents(importedEvents);

		return importedEvents.find();

	}

}); //helpers