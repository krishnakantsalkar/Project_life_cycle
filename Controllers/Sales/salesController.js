/// <reference path="../../libs/Jquery/jquery-3.4.1.min.js"/>
/// <reference path="../../Models/customerModel.js"/>
/// <reference path="../../Models/productModel.js"/>
// / <reference path="../../Models/salesModel.js"/>
/// <reference path="../../Models/productCalcModel.js"/>
/// <reference path="../../Models/discountModel.js"/>
/// <reference path="../../Models/taxModel.js"/>
/// <reference path="../../ViewContext/Sales/salesViewContext.js"/>

"use strict";

let salesViewContextObj = null;
function salesMethodController() {
  this.onButtonCancel = async function() {
    try {
      return await new Promise(async resolve => {
        salesViewContextObj = new salesViewContext();
        await salesViewContextObj.cancel();
        return resolve("cancel button click");
      });
    } catch (ex) {
      console.log(ex.message);
      console.log(ex.stack);
    }
  };

  this.salesSubmitAsync = async function() {
    let salesData = null;
    let salesDataObj = null;
    return await new Promise(async resolve => {
      salesViewContextObj = new salesViewContext();
      salesData = await salesViewContextObj.getSalesDataAsync();

      salesDataObj = new salesModel();
      salesDataObj.customerModel = salesData.customerModel;
      salesDataObj.productModel = salesData.productModel;

      console.log(salesDataObj);
    });
  };
}
// UI ACIONS
function onButtonCancelEvent() {
  let onButtonCancelObj = new salesMethodController();
  onButtonCancelObj
    .onButtonCancel()
    .then(resolveResult => console.log(resolveResult));
}
function onButtonSubmitEvent() {
  let onButtonSubmitObj = new salesMethodController();
  onButtonSubmitObj
    .salesSubmitAsync()
    .then(resolveResult => console.log(resolveResult));
}
