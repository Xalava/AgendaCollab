//event.js

Template.coevent.events({
//   "click .toggle-checked": function () {
//     // Set the checked property to the opposite of its current value
//     Meteor.call("setChecked", this._id, ! this.checked);
    
//   },
  
   "click .delete": function () {
   Meteor.call("deleteCoev", this._id)
},

   "click .vote": function () {
   Meteor.call("voteCoev", this._id)
},
  
//   "click .toggle-private": function () {
//   Meteor.call("setPrivate", this._id, ! this.private);
//   }
// });


// Template.task.helpers({
//   isOwner: function () {
//     return this.owner === Meteor.userId();
//   }
}); 

Template.coevent.helpers({
  coeventDate: function() {
  	// if (this.date != 0) {
  		var coeventDate = moment(this.date).format('DD/MM/YYYY');
    	return coeventDate;
	// } else{
	//  return "";
	// }

  },

  displayUrl: function() {
    var str = this.url;

    if (str == "") {
      return "";
    } else {
      var i = str.search("//");
      if (str.search("www.")){
        i = 6 + i;
      } else {
        i = 4 + i;
      }
      str = str.substring(i,str.length);


      //remplacer facebook ( lien le plus courant)
      str = str.replace(/facebook/g,"fb");

      //i = str.search("/")||str.length;

      //str = str.substring(0,i + 12); 


      return str;
    }
  },
  infos: function(){
    if(this.url != "")
      return "infos";
  }

});