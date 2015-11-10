var updateScroll = function() {
  try{
    var obj = $("#messages-panel");
    obj.scrollTop = obj.scrollHeight;
  }catch(e){ }
}

Template.messages.helpers({
  channelSelected: function() {
    return Session.get('channelSelected');
  },

  username: function() {
    return Session.get('username');
  },

  channels: function() {
    return Session.get('channels');
  },

  messages: function() {
    try{
      m = Messages.find({channel: Session.get('channelSelected')},{sort: {created_on: 1}});
    }catch(e){
    }

    return m;
  },

  isSelectedChannel: function(channel) {
    return (Session.get('channelSelected') === channel) ? 'selected' : '';
  },

  updateScroll: updateScroll
});

Template.messages.events({
  "submit #change-config": function (event) {
    event.preventDefault();
    var username = event.target.username.value;
    var channel = event.target.channel.value;

    Session.set('username', username);
    Session.set('channelSelected', channel);
  },

  "submit #new-message": function (event) {      
    event.preventDefault();
    var message = event.target.message.value;
    Meteor.call('insertMessage', Session.get('channelSelected'), Session.get('username'), message);
    event.target.message.value = "";
    Tracker.afterFlush(updateScroll);
  }
});
