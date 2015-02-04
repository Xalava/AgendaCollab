Template.addCoev.events({
 "submit .add-coev": function (event) { //addCoevButton
    // This function is called when the new event form is submitted

    var name = event.target.nameCoev.value;
    //if (date =="")
    var date = new Date(event.target.dateCoev.value);

   	var urlc = event.target.urlCoev.value;
    if (urlc!= "" && urlc.substring(0,7)!="http://" || urlc .substring(0,8)=="https://") {
        urlc=("http://").concat(urlc);
    }
    // if !url.match()
    // call addCoev method
    Meteor.call("addCoev",name,date,urlc);
 
    // Clear form
    event.target.nameCoev.value = "";
    event.target.dateCoev.value = "";
    event.target.urlCoev.value = "";

    // document.location.reload();

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