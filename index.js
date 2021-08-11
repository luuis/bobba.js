const fetch = require('isomorphic-unfetch');

/**
 * @enum string
 */
var HabboHotel = {
    SANDBOX: 'sandbox',
    COM: 'com',
    BR: 'com.br',
    TR: 'com.tr',
    DE: 'de',
    ES: 'es',
    FI: 'fi',
    FR: 'fr',
    IT: 'it',
    NL: 'nl'
}

/**
 * The model of Habbo
 * @typedef {{ uniqueId: string, habboName: string, motto: string, memberSince?: Date, lastAccessTime?: Date, online?: boolean, figureString?: string, habboFigure?: string, profileVisible?: boolean, selectedBadges?: Badge[], online?: boolean, currentLevel?: number, currentLevelCompletePercent?: number, totalExperience?: number, starGemCount?: number }} Habbo
 */

/**
 * The model of Photo
 * @typedef {{ id: string, previewUrl: string, tags: string[], creatorUniqueId: string, creatorName: string, creatorId: string, type: string, url: string, takenOn: int, roomId: string, likes: string[] }} Photo
 */

/**
 * The model of Room
 * @typedef {{ id: string, uniqueId: string, name: string, description: string, creationTime?: string, habboGroupId?: string, maximumVisitors: number, tags: string[], showOwnerName: boolean, ownerName: string, ownerUniqueId: string, categories: string[], thumbnailUrl: string, imageUrl: string, rating: number }} Room
 */

/**
 * The model of Group
 * @typedef {{ id: string, name: string, description: string, type: string, primaryColour?: string, secondaryColour?: string, badgeCode?: string, roomId: string, isAdmin?: true }} Group
 */

/**
 * The model of Badge
 * @typedef {{ badgeIndex?: string, code: string, name: string, description: string }} Badge
 */

/**
 * The model of Achievement
 * @typedef {{ id: string, name: string, creationTime: Date, state: string, category: string, requirements?: string[], level?: number, score?: number }} Achievement
 */

/**
 * The model of Profile
 * @typedef {{ habbo: Habbo, friends: Habbo[], groups: Group[], rooms: Room[], badges: Badge[] }} Profile
 */

const VERSION = require('./package.json').version;

/**
 * HabboAPI class
 *
 * @class HabboAPI
 */
class HabboAPI {
    #basePath;

    /**
     * Creates an instance of HabboAPI.
     * @param {{ hotel: HabboHotel }} config
     * @memberof HabboAPI
     */
    constructor(config) {
        /** @type { string } */
        let hotel = !config.hotel ? HabboHotel.COM : config.hotel;
        /** @type { string } */
        let subdomain = 'www';

        if (hotel === HabboHotel.SANDBOX) {
            subdomain = 'sandbox';
            hotel = HabboHotel.COM;
        }

        this.basePath = 'https://' + subdomain + '.habbo.' + hotel;
    }

    /**
     * Make a request
     *
     * @param { string } endpoint
     * @param { object } [options={}]
     * @return { Promise } Promise object
     * @memberof HabboAPI
     */
    request(endpoint, options = {}) {
        let url = this.basePath + endpoint

        let headers = {
            'User-Agent': 'github.com/luuis/bobba.js v' + VERSION,
            'Content-Type': 'application/json'
        }

        let config = {
            ...options,
            ...headers
        }


        return fetch(url, config).then(r => {
            if (r.ok) {
                return r.json()
            }
            throw new Error(r)
        })
    }

    /**
     * Get a Habbo object from a name or uniqueId
     *
     * @param { string } identifier
     * @param { boolean } [useUniqueId=false]
     * @return { Promise<Habbo> } 
     * @memberof HabboAPI
     */
    getHabbo(identifier, useUniqueId = false) {
        let url = '/api/public/users';

        if (useUniqueId) {
            url += '/' + identifier;
        } else {
            url += '?name=' + identifier;
        }

        let config = {
            method: 'GET'
        }
        return this.request(url, config);
    }

    /**
     * Get a Profile object from an Habbo uniqueId
     *
     * @param { string } identifier
     * @return { Promise<Profile> }
     * @memberof HabboAPI
     */
    getProfile(identifier) {
        let url = '/api/public/users/' + identifier + '/profile';

        let config = {
            method: 'GET'
        }
        return this.request(url, config);
    }

    /**
     * Get an array of Photo objects public or from an Habbo uniqueId
     *
     * @param { string } [identifier='']
     * @return { Promise<Photo[]> } 
     * @memberof HabboAPI
     */
    getPhotos(identifier = '') {
        let url = (identifier) ? '/extradata/public/users/' + identifier + '/photos' : '/extradata/public/photos';

        let config = {
            method: 'GET'
        }
        return this.request(url, config);
    }

    /**
     * Get a Group object from a Group id
     *
     * @param { string } identifier
     * @return { Promise<Group> } 
     * @memberof HabboAPI
     */
    getGroup(identifier) {
        let url = '/api/public/groups/' + identifier;

        let config = {
            method: 'GET'
        }
        return this.request(url, config);
    }

    /**
     * Get an Achievement object from an Achievement
     *
     * @param { string } identifier
     * @return { Promise<Achievement> } 
     * @memberof HabboAPI
     */
    getAchievements(identifier) {
        let url = '/api/public/achievements/' + identifier;

        let config = {
            method: 'GET'
        }
        return this.request(url, config);
    }
}

module.exports = { HabboAPI, HabboHotel };
