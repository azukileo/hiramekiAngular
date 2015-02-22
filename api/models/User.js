/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
var crypto = require('crypto'),
    moment = require('moment');

module.exports = {
    // adapter: 'devMysqlServer',
    // Disables Automatic ID generation
    // (allows you to use a FLOAT type for your ID)
    //autoPK: false,
    schema: true,
    // Disables Automatic Timestamps
    // You will need to manually update your timestamps, usually best to leave this
    // on and remove the updated_at and created_at attributes below to let Waterline
    // keep these up to date for you
    autoCreatedAt: true,
    autoUpdatedAt: true,
    attributes: {
        toJSON: function() {
            console.log("toJson");
            var obj = this.toObject();
            delete obj.password;
            return obj;
        },
        id: {
            type: 'INTEGER',
            autoIncrement: true,
            primaryKey: true,
            unique: true
        },
        uuid: {
            type: 'STRING',
            required: true,
            unique: true
        },
        familyname: {
            type: 'STRING',
            required: true
        },
        firstname: {
            type: 'STRING',
            required: true
        },
        email: {
            type: 'STRING',
            required: true,
            unique: true
        },
        username: {
            type: 'STRING',
            required: true,
            unique: true
        },
        gender: {
            type: 'INTEGER',
            required: true
        },
        socialRole: 'INTEGER',
        singleOrMarried: 'INTEGER',
        birthday: 'DATE',
        job: 'INTEGER',
        prefectureCd: 'INTEGER',
        cityCd: 'INTEGER',
        fileName: 'STRING',
        aboutMySelf: 'TEXT',
        memo: 'TEXT',
        subscription: 'BOOLEAN',
        terms: 'BOOLEAN',
        hashedPassword: 'STRING',
        provider: 'STRING',
        salt: 'STRING',
        facebookUserId: 'STRING',
        twitterUserId: 'STRING',
        twitterKey: 'STRING',
        twitterSecret: 'STRING',
        github: 'STRING',
        openId: 'STRING',
        website: 'STRING',
        facebookUrl: 'STRING',
        twitterUrl: 'STRING',
        googleplusUrl: 'STRING',
        loginDate: {
            type: 'DATETIME',
            default: 'NOW'
        },
        lastLoginDate: {
            type: 'DATETIME'
        },
        makeSalt: function() {
            return crypto.randomBytes(16).toString('base64');
        },
        authenticate: function(plainText) {
            return this.encryptPassword(plainText, this.salt) === this.hashedPassword;
        },
        encryptPassword: function(password, salt) {
            if (!password || !salt) return '';
            salt = new Buffer(salt, 'base64');
            return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
        },
        yearOfBirthday: function() {
            sails.log.debug('this.birthday = ' + this.birthday);
            return moment(this.birthday).format('YYYY');
        },
        monthOfBirthday: function() {
            return moment(this.birthday).format('MM');
        },
        dateOfBirthday: function() {
            return moment(this.birthday).format('DD');
        }
    },
    beforeCreate: function(attrs, next) {
        attrs.provider = 'local';
        attrs.salt = crypto.randomBytes(16).toString('base64');
        if (!attrs.password || !attrs.salt) {
            attrs.hashedPassword = '';
        } else {
            attrs.hashedPassword = crypto.pbkdf2Sync(attrs.password, new Buffer(attrs.salt, 'base64'), 10000, 64).toString('base64');
        }
        next();
    },
    beforeUpdate: function(attrs, next) {
        if (!attrs.password || !attrs.salt) {
            attrs.hashedPassword = '';
        } else {
            attrs.hashedPassword = crypto.pbkdf2Sync(attrs.password, new Buffer(attrs.salt, 'base64'), 10000, 64).toString('base64');
        }
        next();
    }
};
