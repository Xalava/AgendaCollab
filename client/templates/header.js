

Template.header.events({



});

Template.header.helpers({
  currentDate: function() {
  	// debug function to understand dates
  	var CurrentDate = new Date();
  	// var str = CurrD.toDateString;
  	var endCurrentDate = new Date();
    endCurrentDate.setHours(23,59,59,999);

    return CurrentDate;

  }

});