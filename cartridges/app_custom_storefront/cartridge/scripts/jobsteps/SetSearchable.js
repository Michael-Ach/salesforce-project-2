'use strict';

var ProductMgr = require('dw/catalog/ProductMgr');
var txn = require('dw/system/Transaction');

function execute (){
    txn.wrap(function(){
        var products = ProductMgr.queryAllSiteProducts();
        while(products.hasNext()){
            products.next().setSearchableFlag(true);
        }
    });
}

exports.execute = execute;