'use strict';

var processInclude = require('base/util');

$(document).ready(function () {
    processInclude(require('plugin_instorepickup/product/details'));
    processInclude(require('./product/pdpInstoreInventory'));
});
