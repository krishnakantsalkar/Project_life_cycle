/// <reference path="../../libs/Jquery/jquery-3.4.1.min.js"/>
/// <reference path="../../Models/customerModel.js"/>
/// <reference path="../../Models/productModel.js"/>
// / <reference path="../../Models/salesModel.js"/>
/// <reference path="../../Models/productCalcModel.js"/>
/// <reference path="../../Models/discountModel.js"/>
/// <reference path="../../Models/taxModel.js"/>

"use strict";
// private
function salesViewContext() {
  let getcustomerDetailsAsync = async function() {
    let customerModelData = null;

    try {
      return await new Promise(resolve => {
        let customerModelData = new customerModel();
        customerModelData.firstName = $("#txtfirstName").val();
        customerModelData.lastName = $("#txtlastName").val();
        customerModelData.contactInfo = $("#numcontactInfo").val();
        customerModelData.customerType = $(
          "#txtcustomerType option:selected"
        ).val();
        return resolve(customerModelData);
      });
    } catch (ex) {
      throw ex;
    }
  };

  let getproductDetailsAsync = async function() {
    let productModelData = null;
    try {
      return await new Promise(resolve => {
        let productModelData = new productModel();
        productModelData.productName = $("#productName").val();
        productModelData.productPrice = $("#productPrice").val();
        productModelData.productQuantity = $("#productQuantity").val();
        return resolve(productModelData);
      });
    } catch (ex) {
      throw ex;
    }
  };

  // public method

  this.cancel = async function() {
    try {
      return await new Promise(resolve => {
        $("#txtfirstName").val("");
        $("#txtlastName").val("");
        $("#numcontactInfo").val("");
        $("#txtcustomerType").val("Select Customer Type");
        $("#txtproductType").val("");
        $("#txtproductName").val("Select Product Type");
        $("#productQuantity").val("");

        $("#txtfirstName").focus();
        return resolve(true);
      });
    } catch (ex) {
      throw ex;
    }
  };

  this.getSalesDataAsync = async function() {
    let customerModelData = null;
    let productModelData = null;
    try {
      return await new Promise(async resolve => {
        customerModelData = await getcustomerDetailsAsync();
        productModelData = await getproductDetailsAsync();

        let totalSales = {
          customerModel: customerModelData,
          productModel: productModelData
        };
        return resolve(totalSales);
      });
    } catch (ex) {
      throw ex;
    }
  };
}
