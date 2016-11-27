var Bot = require('slackbots');

var DailyBot = function Constructor(settings){
  this.settings = settings;
  this.settings.name = this.settings.name || 'dailyBot';

}

util.inherits(DailyBot, Bot);

DailyBot.prototype.run = function() {

  DailyBot.super_.call(this, this.settings);
  this.on('start', this._onStart);
  this.on('message', this._onMessage);


};

DailyBot.prototype._onStart = function () {
  this._loadBotUser();
  this._firstRunCheck();
};

DailyBot.prototype._loadBotUser = function () {
  var self = this;
  this.user = this.users.filter(function (user) {
    return user.name === self.name;
  })[0];
};

module.exports = DailyBot;

