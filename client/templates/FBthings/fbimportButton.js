git Template.fbimportButton.events({

  'click .importFB': function (event) {
  	    if (! Meteor.user()) {
    	// return alert("Please sign in to be able to delete events");
    	throw new Meteor.Error("not-authorized");
	    }  else {
			FB.login(function(response) {
				if (response.authResponse) {
				    console.log('Welcome! Logged in, going to fbimport');

					Router.go("/fbimport");
				};
			}, {scope: 'user_events'});
		}

	}
  
  
});
