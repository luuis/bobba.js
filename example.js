const { HabboAPI, HabboHotel } = require('bobba');

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
const bobba = new HabboAPI({ hotel: HabboHotel.ES });

bobba.getHabbo('lDromedario').then(habbo => {
    bobba.getProfile(habbo.uniqueId).then(profile => console.log(profile));
});
