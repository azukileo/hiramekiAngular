var constants = require('../../config/const');
/**
 * ConstantController
 *
 * @description :: Server-side logic for managing constants
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    gender: function(req, res) {
        sails.log.debug("method gender 発動！: json gender = " + JSON.stringify(constants.constVal.gender));
        return res.json(constants.constVal.gender);
    }
};
