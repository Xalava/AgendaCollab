Template.coeventsList.helpers({

	 coevents: function () {
    var currentDate = new Date();
    //this could be done better using conversion fuctions
    var endCurrentDate = new Date();
    endCurrentDate.setHours(23,59,59,999);

    switch (Session.get("sort")) {
      case 1://trending
        return Coevents.find({}, {sort: {votes: -1}});
        break;
      case 2://upcoming
              // retourne date croissante, superieur à aujourd'hui
        return Coevents.find({date:{$gt: currentDate}},{sort: {date: 1}});
        // date non vide
        //pas vide
        break;
      case 3://new
        return Coevents.find({}, {sort: {createdAt: -1}});
        break;
      case 4://bestOfToday
        return Coevents.find({date:{$gt: currentDate, $lte:endCurrentDate}},{sort: {votes: -1}});
        
        break; 
      default:
        return Coevents.find({}, {sort: {createdAt: -1}});
    }
  }

});