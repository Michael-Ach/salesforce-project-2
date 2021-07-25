'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var PageRenderHelper = require('*/cartridge/experience/utilities/PageRenderHelper.js');
var HookManager = require('dw/system/HookMgr');

/**
 * Render logic for the storepage.
 *
 * @param {dw.experience.PageScriptContext} context The page script context object.
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge.
 * This will not be passed in by Commcerce Cloud Plattform.
 *
 * @returns {string} The markup to be displayed
 */
function pageModel(context, modelIn) {
  var model = modelIn || new HashMap();

  var page = context.page;
  model.page = page;
  model.content = context.content;

    // automatically register configured regions
  model.regions = PageRenderHelper.getRegionModelRegistry(page);

  if (PageRenderHelper.isInEditMode()) {
    HookManager.callHook('app.experience.editmode', 'editmode');
    model.resetEditPDMode = true;
  }

  model.CurrentPageMetaData = PageRenderHelper.getPageMetaData(page);

    // render the page
  return new Template('experience/pages/homepage').render(model).text;
}

module.exports.render = pageModel;