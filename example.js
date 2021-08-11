const { HabboAPI, HabboHotel } = require('./');

// Initialize the HabboAPI class by passing the hotel to be queried in an object
/*
    Available hotels:
    -
*/

/**
 * Initialize the HabboAPI class by passing the hotel to be queried in an object
 * 
 * Available hotels:
 * - HabboHotel.SANDBOX
 * - HabboHotel.COM
 * - HabboHotel.BR
 * - HabboHotel.TR
 * - HabboHotel.DE
 * - HabboHotel.ES
 * - HabboHotel.FI
 * - HabboHotel.FR
 * - HabboHotel.IT
 * - HabboHotel.NL
 */
const api = new HabboAPI({ hotel: HabboHotel.ES });

api.getHabbo('lDromedario').then(habbo => {
    api.getProfile(habbo.uniqueId).then(profile => console.log(profile));
});
