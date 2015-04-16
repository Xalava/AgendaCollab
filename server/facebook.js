var debug = Meteor.npmRequire('debug')('sc:coll:sample-collection');

function Facebook(accessToken) {
    this.fb = Meteor.npmRequire('fbgraph');
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
    debug(facebookId);
    var events  = this.query('v2.3/' + facebookId + '/events');
    debug(events);
    return events;
}

Facebook.prototype.enrichEvent = function(eventData){
    return  this.query('v2.3/'+eventData.id);
}

Facebook.prototype.getCoevent = function(event){
    event = this.enrichEvent(event);
    debug('enrichedEvent');
    debug(event);
    var coevent = {};
    var facebook= this.query('me');
    coevent['name'] = event.name;
    coevent['date'] = event.date;
    coevent['url'] = "https://wwww.facebook.com/events/"+event.id+'/';
    coevent['createdAt'] = event.udpated_time;
    coevent['owner'] = facebook.id;
    coevent['username'] = facebook.name;
    debug(coevent);
    return coevent;
}



Meteor.methods({
    getUserFacebookCoEvents : function(){
        var coevents = [];
        fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var events = fb.getUserEvents(Meteor.user().services.facebook.id);
        debug(events);
        for(var i = 0;i<events.data.length;i++){
            coevents.push(fb.getCoevent(events.data[i]));
        }
        debug('coevents');
        debug(coevents);
        return coevents;
    }
});
