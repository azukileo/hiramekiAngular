var nodeUuid = require('node-uuid'),
    Validator = require('../services/user');
/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    /**
     * `UserController.create()`
     */
    create: function (req, res) {
        'use strict';
        sails.log.debug('create user method in');

        var message = null,
            uuid = nodeUuid.v4(),
            user = req.body,
            email = user.email,
            username = user.username,
            password = user.password,
            // passwordConfirm = user.passwordConfirm,
            gender = user.gender,
            firstname = user.firstname,
            familyname = user.familyname,
            subscription = user.subscription,
            terms = user.terms,
            errors = [];

        sails.log.debug('uuid = ' + uuid);
        sails.log.debug('username = ' + username);
        sails.log.debug('email = ' + email);
        sails.log.debug('password = ' + password);
        // sails.log.debug('passwordConfirm = ' + passwordConfirm);
        sails.log.debug('gender = ' + gender);
        sails.log.debug('firstname = ' + firstname);
        sails.log.debug('familyname = ' + familyname);
        sails.log.debug('subscription = ' + subscription);
        sails.log.debug('terms = ' + terms);

        async.waterfall([
            function (callback) {
                Validator.validateUserInfo(email, username, password, firstname, familyname, gender, subscription, terms, errors, callback);
            },
            function (callback) {
                sails.log.debug('gender = ' + gender);
                User.create({
                    uuid: uuid,
                    email: email,
                    username: username,
                    password: password,
                    gender: Number(gender),
                    firstname: firstname,
                    familyname: familyname,
                    subscription: subscription,
                    terms: terms
                }).exec(function (err, user) {
                    if (err) {
                        sails.log.debug('err発生 inside of User.create');
                        sails.log.debug('err = ' + JSON.stringify(err));
                        sails.log.debug('err.summary = ' + JSON.stringify(err.summary));
                        sails.log.debug('err.status = ' + JSON.stringify(err.status));
                        sails.log.debug('err.invalidAttributes = ' + JSON.stringify(err.invalidAttributes));
                        // sails.log.debug('err.invalidAttributes.length = ' + err.invalidAttributes.length);
                        if (err.status === 400) {
                            for (var key in err.invalidAttributes) {
                                sails.log.debug('key = ' + JSON.stringify(key));
                                if (key === 'email') {
                                    errors.push(constant.messages.error.alreadyExistsEmail);
                                } else if (key === 'username') {
                                    errors.push(constant.messages.error.alreadyExistsUsername);
                                }
                            }
                        }
                        callback(err);
                    } else {
                        callback(null, user);
                    }
                })
            }
        ], function (err, user) {
            if (err) {
                if (errors.length > 0) {
                    sails.log.debug('err　キャッチ errors.length > 0 のとき');
                    sails.log.debug('error = ' + JSON.stringify(errors));
                    sails.log.debug('res.header = ' + JSON.stringify(res.header));
                    res.json({
                        errors: errors,
                        user: user
                    });
                } else {
                    sails.log.debug('err　キャッチ 500エラー のとき');
                    res.serverError(err);
                }
            } else {
                sails.log.debug('正常終了のとき');
                req.login(user, function () {
                    res.json({result: "ok"});
                });
            }
        });
    }
};

