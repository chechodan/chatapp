Messages = new Mongo.Collection("messages");
Channels = ["Channel 1", "Channel 2", "Channel 3", "Channel 4", "Channel 5"];

if (Meteor.isServer) {    
  Meteor.startup(function () {      
    Meteor.methods({
      // This method is here to synchronize with the server date
      insertMessage: function(channel, username, message) {
          Messages.insert({
          channel: channel, 
          author: username,
          text: message, 
          created_on: new Date().getTime()
        });
      }
    });
  });
}

if(Meteor.isClient) {
  Session.setDefault('username', "Unknown");
  Session.setDefault('channelSelected', Channels[0]);
  Session.set('channels', Channels);

  Template.registerHelper("dateFormat", function(str_date) {
    var date = new Date(str_date);
    var d = date.getDate();
    var m = date.getMonth() + 1; // Months are zero based
    var y = date.getFullYear();
    var h = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return  d + "-" + m + "-" + y + " " + h;
  });
}
