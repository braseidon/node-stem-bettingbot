/**
 * Dependencies
 */

/**
 * Output the bot's inventory
 *
 * @param  {String} steamID
 */
exports.getMyInventory = function (steamID) {

    var Stem  = this,
        Trade = this.botTrade,
        myBag;

    Trade.loadMyInventory(730, 2, function (inv) { // appid.CSGO, contextid.CSGO
        if (! inv) {
            this.log.error('[ERROR] Error getting own inventory. Cancelling TradeBot.');
            this.bot.sendMessage(steamID, '[ERROR] Could not load my inventory. Please try again later.');
        } else {
            invMessage = 'Found ' + inv.length + ' item(s) in my inventory.';
            this.bot.sendMessage(steamID, invMessage);
            this.log.info('[INVENTORY] ' + invMessage);
            this.bot.sendMessage(steamID, 'Listing items:');

            for (var i = 0; i < inv.length; i++) {
                if (inv[i].tradable) {
                    item = inv[i];
                    itemMessage = 'Item ' + (i + 1) + ': ' + item.market_name; // Poseidon.object_get(item, 'market_name')
                    this.log.info('[ITEM] ' + itemMessage);
                    this.bot.sendMessage(steamID, itemMessage);
                    break;
                }
            }

            myBag = inv; // Now we can access it globally
            // If you want to put items up in the trade window immediately,
            // here is where you could do it. Instead we're calling a custom function.
        }
    });

};
