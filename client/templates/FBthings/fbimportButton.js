Template.fbimportButton.events({

  'click .importFB': function (event) {

		FB.login(function(response) {
			if (response.authResponse) {
			    console.log('Welcome! Logged in, going to fbimport');
				Router.go("/fbimport");
			};
		}, {scope: 'user_events'});
	}

	
  
  
});
