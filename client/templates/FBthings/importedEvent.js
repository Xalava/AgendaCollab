//event.js

Template.importedEvent.events({
  "click .toggle-import": function (event) {
    // Set the checked property to the opposite of its current value
	Session.get("importedEvents").update(this._id,{ $set: { toadd: !this.toadd} });
 	}
}); 

Template.importedEvent.helpers({

  importedDate: function() {

  		var importDate = moment(this.start_time).format('DD/MM/YYYY');
    	return importDate;

  },
	  importedUrl: function() {
    	return ("http://www.facebook.com/events/").concat(this.id);


  } 

});