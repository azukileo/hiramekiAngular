
var validator = require('validator'),
    constant = require('../../config/const');

function validateFirstname (firstname, errors) {
    if (firstname) {
        if (firstname.match(/[!-/:-@≠\[-`{-~]/i)) {
            errors.push(constant.messages.error.wrongFirstname1);
        }
        if (firstname.match("[ｱ-ﾝﾞﾟｧ-ｫｬ-ｮｰ｡｢｣､]")) {
            errors.push(constant.messages.error.wrongFirstname2);
        }
        if (!validator.isLength(firstname, constant.numeric.firstname.minLength, constant.numeric.firstname.maxLength)) {
            errors.push(constant.messages.error.wrongFirstnameLength);
        }
    } else {
        errors.push(constant.messages.require.firstname);
    }
}

function validateFamilyname (familyname, errors) {
    if (familyname) {
        if (familyname.match(/[!-/:-@≠\[-`{-~]/i)) {
            errors.push(constant.messages.error.wrongFamilyname1);
        }
        if (familyname.match("[ｱ-ﾝﾞﾟｧ-ｫｬ-ｮｰ｡｢｣､]")) {
            errors.push(constant.messages.error.wrongFamilyname2);
        }
        if (!validator.isLength(familyname, constant.numeric.familyname.minLength, constant.numeric.familyname.maxLength)) {
            errors.push(constant.messages.error.wrongFamilynameLength);
        }
    } else {
        errors.push(constant.messages.require.familyname);
    }
}

function validateGender (gender, errors) {
    if (gender) {
        if (!validator.isNumeric(gender)) {
            errors.push(constant.messages.error.genderIsNumeric);
        }
        if (!validator.isLength(gender, 1, 1)) {
            errors.push(constant.messages.error.wrongGenderLength);
        }
        if (Number(gender) !== constant.constVal.gender.male && Number(gender) !== constant.constVal.gender.female && Number(gender) !== constant.constVal.gender.other) {
            errors.push(constant.messages.error.wrongGender);
        }
    } else {
        errors.push(constant.messages.require.gender);
    }
}

function validateEmail (email, errors) {
    if (email) {
        if (!validator.isEmail(email)) {
            errors.push(constant.messages.error.wrongEmail);
        }
        if (!validator.isLength(email, constant.numeric.email.minLength, constant.numeric.email.maxLength)) {
            errors.push(constant.messages.error.wrongEmailLength);
        }
    } else {
        errors.push(constant.messages.require.email);
    }
}

function validateUsername (username, errors) {
    if (username) {
        if (!validator.isAlphanumeric(username)) {
            errors.push(constant.messages.error.wrongUsername);
        }
        if (!validator.isLength(username, constant.numeric.username.minLength, constant.numeric.username.maxLength)) {
            errors.push(constant.messages.error.wrongUsernameLength);
        }
    } else {
        errors.push(constant.messages.require.username);
    }
}

function validatePassword (password, errors) {
    if (password) {
        if (!password.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z])/)) {
            errors.push(constant.messages.error.notCorrectPassword);
        }
        if (!validator.isLength(password, constant.numeric.password.minLength, constant.numeric.password.maxLength)) {
            errors.push(constant.messages.error.wrongPasswordLength);
        }
    }
    if (!password) {
        errors.push(constant.messages.require.password);
    }
}

exports.validateUserInfo = function(email, username, password, firstname, familyname, gender, subscription, terms, errors, callback) {
    'use strict';
    var err;
    validateEmail (email, errors);
    validateUsername (username, errors);
    validatePassword (password, errors);
    validateFirstname (firstname, errors);
    validateFamilyname (familyname, errors);
    validateGender (gender, errors);
    if (subscription) {
        if (subscription !== 'on') {
            errors.push(constant.messages.error.wrongSubscription);
        }
    }
    if (terms) {
        if (terms !== 'on') {
            errors.push(constant.messages.error.wrongTerms);
        }
    }

    if (errors.length > 0) {
        err = new Error();
        callback(err);
    } else {
        callback();
    }
}

exports.validateProfile = function (familyname, firstname, gender, socialRole, prefectureCd, cityCd, singleOrMarried, aboutMySelf, errors, callback) {
    'use strict';
    validateFirstname (firstname, errors);
    validateFamilyname (familyname, errors);
    validateGender (gender, errors);
    if (socialRole) {
        if (!validator.isNumeric(socialRole)) {
            errors.push(constant.messages.error.socialRoleIsNumeric);
        }
        if (!validator.isLength(socialRole, 1, 1)) {
            errors.push(constant.messages.error.wrongSocialRoleLength);
        }
        if (Number(socialRole) !== constant.constVal.socialRole.employee && Number(socialRole) !== constant.constVal.socialRole.freelance && Number(socialRole) !== constant.constVal.socialRole.student) {
            errors.push(constant.messages.error.wrongSocialRole);
        }
    } else {
        errors.push(constant.messages.require.socialRole);
    }
    if (prefectureCd) {
        if (!validator.isNumeric(prefectureCd)) {
            errors.push(constant.messages.error.prefectureCdIsNumeric);
        }
        if (!validator.isLength(prefectureCd, 2, 2)) {
            errors.push(constant.messages.error.wrongPrefectureCdLength);
        }
    } else {
        errors.push(constant.messages.require.prefectureCd);
    }
    if (cityCd) {
        if (!validator.isNumeric(cityCd)) {
            errors.push(constant.messages.error.cityCdIsNumeric);
        }
        if (!validator.isLength(cityCd, 5, 5)) {
            errors.push(constant.messages.error.wrongCityCdLength);
        }
    } else {
        errors.push(constant.messages.require.cityCd);
    }
    if (singleOrMarried) {
        if (!validator.isNumeric(singleOrMarried)) {
            errors.push(constant.messages.error.singleOrMarriedIsNumeric);
        }
        if (!validator.isLength(singleOrMarried, 1, 1)) {
            errors.push(constant.messages.error.wrongSingleOrMarriedLength);
        }
        if (Number(singleOrMarried) !== constant.constVal.singleOrMarried.single && Number(singleOrMarried) !== constant.constVal.singleOrMarried.married) {
            errors.push(constant.messages.error.wrongSingleOrMarried);
        }
    } else {
        errors.push(constant.messages.require.singleOrMarried);
    }
    if (!aboutMySelf) {
        errors.push(constant.messages.require.aboutMySelf);
    }
    if (errors.length > 0) {
        var err = new Error();
        callback(err);
    } else {
        callback();
    }
};

exports.validateAccount = function (user, email, username, password, newPassword, newPasswordConfirm, errors, callback) {
    'use strict';
    sails.log.debug('validateAccount メソッド　開始');
    var err;
    validateEmail (email, errors);
    validateUsername (username, errors);
    if (password) {
        if (!validator.isAlphanumeric(password)) {
            errors.push(constant.messages.error.notCorrectPassword);
        }
        if (!validator.isLength(password, constant.numeric.password.minLength, constant.numeric.password.maxLength)) {
            errors.push(constant.messages.error.wrongPasswordLength);
        }
        if (!user.authenticate(password)) {
            errors.push(constant.messages.error.wrongPassword);
        }
    } else {
        errors.push(constant.messages.require.password);
    }
    if (newPassword && newPasswordConfirm) {
        if (newPassword !== newPasswordConfirm) {
            errors.push(constant.messages.error.newPasswordNotMatch);
        }
        if (!validator.isAlphanumeric(newPassword)) {
            errors.push(constant.messages.error.notCorrectNewPassword);
        }
        if (!validator.isLength(newPassword, constant.numeric.password.minLength, constant.numeric.password.maxLength)) {
            errors.push(constant.messages.error.wrongNewPasswordLength);
        }
    }
    if (!newPassword) {
        errors.push(constant.messages.require.newPassword);
    }
    if (!newPasswordConfirm) {
        errors.push(constant.messages.require.newPasswordConfirm);
    }
    if (errors.length > 0) {
        err = new Error();
        sails.log.debug('validateAccount メソッド　終了');
        callback(err);
    } else {
        sails.log.debug('validateAccount メソッド　終了');
        callback();
    }
}