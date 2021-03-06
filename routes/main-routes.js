Router.configure({
  layoutTemplate: 'main'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/i/notifications', function () {
  this.render('notifications');
});

Router.route('/i/messages', function () {
  this.render('messages');
});

Router.route('/i/settings', function () {
  this.render('settings');
});

Router.route('/:username', function () {
  var item = Meteor.users.findOne({username: this.params.username});
  this.render('profile', {data: item});
  
  var ITEMS_INCREMENT = 25;
  Session.setDefault("tweetsLimit", ITEMS_INCREMENT);
  Meteor.subscribe("tweetsForUsername",this.params.username,Session.get("tweetsLimit"));
});
