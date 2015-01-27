Template.fbimport.events({

  'click .importFB': function (event) {
    
    Meteor.call('fbme', function(err, res) {
      console.log("back from fbme");

      if (err) {
        console.log("erreur");
        console.log(err);
      }else{
          console.log("yay");
         console.log(res);
      }
       
    });





  }
  
  
});
