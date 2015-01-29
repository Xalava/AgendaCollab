Template.header.helpers({
  currentDate: function() {
  	// debug function to understand dates
  	var CurrentDate = new Date();
    return CurrentDate;

  },

    endCurrentDate: function() {

  	// var str = CurrD.toDateString;
  	var endCurrentDate = new Date();
    endCurrentDate.setHours(23,59,59,999);

    return endCurrentDate;

  }

});

Template.header.events({

  'click .trending': function (event) {
    Session.set("sort", 1);
  },
  
  'click .upcoming': function (event) {
    Session.set("sort", 2);
  },
    'click .new': function (event) {
    Session.set("sort", 3);
  },
  'click .bestOfToday': function (event) {
    Session.set("sort", 4);
  }
});
