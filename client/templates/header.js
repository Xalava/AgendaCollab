Template.header.events({
        'click #btn-user-events': function(e) {
                    Meteor.call('getUserEvents', function(err, data) {
                       // $('#result').text(JSON.stringify(data, undefined, 4));
                        console.log('facebook-events',data);
                    });
         }
});
