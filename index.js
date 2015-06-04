module.exports = function (Stem) {

    var commands = require('./commands');

    Stem.api.addHandler('bot', 'bettingBot', require('./bettingBot'));

    Stem.api.addCommand(/^inventory/, commands.getMyInventory, { permission: 'admin' });

};
