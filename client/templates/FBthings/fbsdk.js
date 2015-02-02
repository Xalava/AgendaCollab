FBaddEvents = function(tempCollection,eventsType){ 
 	//if (FB.getLoginStatus().status==="connected"){

		console.log(' Fetching attending events ');
		FB.api(eventsType,
		function(response) {
		    if (response && !response.error) {

		    	console.log('retrieved info');
		    	var currentDate = new Date();

				for (var i = response.data.length - 1; i >= 0; i--) {
					//if(response.data[i].end_time.valueof() >= currentDate.valueof() ){
					tempCollection.insert(response.data[i]);
				};


		    	
		    } else{
		    	console.log("error loading events");
		    	throwError("Could not load from Facebook. Try again later");
		    	Router.go("/");
		    	

		    }
		});	
};