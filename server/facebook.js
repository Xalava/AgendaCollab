var debug = Meteor.npmRequire('debug')('sc:coll:sample-collection');

function Facebook(accessToken) {
    this.fb = Meteor.require('fbgraph');
    this.accessToken = accessToken;
    this.fb.setAccessToken(this.accessToken);
    this.options = {
                    timeout: 3000,
                    pool: {maxSockets: Infinity},
                    headers: {connection: "keep-alive"}
                    }
    this.fb.setOptions(this.options);
}

Facebook.prototype.query = function(query, method) {
    var self = this;
    var method = (typeof method === 'undefined') ? 'get' : method;
    var data = Meteor.sync(function(done) {
        self.fb[method](query, function(err, res) {
                done(null, res);
        });
    });
    return data.result;
}

Facebook.prototype.getUserEvents = function(facebookId){
    var events  = this.query('v2.3/' + facebookId + '/events');
    return events;
}

Facebook.prototype.enrichEvents = function(events){
    var enrichedEvents = [];
    debug(events);
    for(var i = 0;i<events.data.length;i++){
        enrichedEvents.push(this.query('v2.3/'+events.data[i].id));
    }
    return enrichedEvents;
}

Meteor.methods({
    getUserEvents : function(){
        fb = new Facebook(Meteor.user().services.facebook.accessToken);
        return fb.enrichEvents(fb.getUserEvents(Meteor.user().services.facebook.id));
    }
});
