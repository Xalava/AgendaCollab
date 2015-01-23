Template.addCoev.events({
 "submit .add-coev": function (event) {
    // This function is called when the new event form is submitted

    var name = event.target.nameCoev.value;
    //if (date =="")
    var date = new Date(event.target.dateCoev.value);
   	var url = event.target.urlCoev.value;
    // debugVar = event.target.urlCoev.value;
    // call addCoev method
    Meteor.call("addCoev",name,date,url);
 
    // Clear form
    event.target.nameCoev.value = "";
    event.target.dateCoev.value = "";
    event.target.urlCoev.value = "";


    // Prevent default form submit
    return false;
  },

});
Template.addCoev.rendered = function() {
    // $('#dateEv').datepicker({ 
    	// dateFormat: 'dd-mm-yy',
    	// pickTime: false
    // });

  // $('#dateEv').datepicker('getUTCdate');

    // {
    // todayHighlight: true
    // });

}

// Template.addCoev.rendered=function() {
//     $('#my-datepicker').datepicker();
// }