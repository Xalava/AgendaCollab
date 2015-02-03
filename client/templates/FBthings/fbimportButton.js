Template.fbimportButton.events({

  'click .importFB': function (event) {
  	    if (! Meteor.user()) {
    	// return alert("Please sign in to be able to delete events");
    	//throw new Meteor.Error("not-authorized");
    	throwError("Please sign in first");
	    }  else {
			FB.login(function(response) {
				if (response.authResponse) {
				    console.log('Welcome! Logged in, going to fbimport');
				    clearErrors();	
					Router.go("/fbimport");
				}else{
					throwError("Facebook Import is not available to the public yet");
				};
			}, {scope: 'user_events'});
		}

	}
  
  
});
