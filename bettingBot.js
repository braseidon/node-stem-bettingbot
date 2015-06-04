module.exports = function (pendingOffers) {

    var botOffers = this.botOffers,
        log       = this.log,
        Stem      = this;

    if (!pendingOffers)
        return;

    botOffers.getOffers({ get_received_offers: 1, active_only: 1 }, function (err, activeOffers) {

    });

};