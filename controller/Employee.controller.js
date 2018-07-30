sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
  "use strict";

  return Controller.extend("com.sap.technophilia.courier.controller.Employee", {

    /**
     * Lifecycle Method - Called when the employee's page is instantiated.
     * @public
     */
    onInit: function() {
      var oThis = this;
      var oComponent = oThis.getOwnerComponent();
      oThis._router = oComponent.getRouter();
    },

    /**
     *
     * Event Handler - On press of Update Order Tile
     * @public
     */
    onUpdateOrder: function() {
      var oThis = this;
      if(!oThis._oUpdateOrderDialog) {
        oThis._oUpdateOrderDialog = sap.ui.xmlfragment("com.sap.technophilia.courier.fragment.UpdateOrder", oThis);
        oThis._oUpdateOrderDialog.addStyleClass("sapUiSizeCompact");
        oThis.getView().addDependent(oThis._oUpdateOrderDialog);
      }
      oThis._oUpdateOrderDialog.open();
    },

    /**
     *
     * Event Handler - On press of Update on Update Order Dialog
     * @public
     */
    onUpdateOrderOkay: function() {
      var oThis = this;
    },

    /**
     *
     * Event Handler - On press of Cancel on Update Order Dialog
     * @public
     */
    onUpdateOrderCancel: function() {
      var oThis = this;
      oThis._oUpdateOrderDialog.close();
    },

    /**
     *
     * Event Handler - On press of Create Order Tile
     * @public
     */
    onCreateOrder: function() {
      var oThis = this;
      if (!oThis._oCreateOrderDialog) {
        oThis._oCreateOrderDialog = sap.ui.xmlfragment("com.sap.technophilia.courier.fragment.CreateOrder", oThis);
        oThis._oCreateOrderDialog.addStyleClass("sapUiSizeCompact");
        oThis.getView().addDependent(oThis._oCreateOrderDialog);
      }
      oThis._oCreateOrderDialog.open();
    },

    /**
     *
     * Event Handler - On press of Create on Create Order Dialog
     * @public
     */
    onCreateOrderOkay: function() {
      var oThis = this;
    },

    /**
     *
     * Event Handler - On press of Cancel on Create Order Dialog
     * @public
     */
    onCreateOrderCancel: function() {
      var oThis = this;
      oThis._oCreateOrderDialog.close();
    },

    /**
     *
     * Event Handler - On press of Claim Reimbursement Tile
     * @public
     */
    onClaimReimbursement: function() {
      var oThis = this;
      if (!oThis._oClaimReimbursementDialog) {
        oThis._oClaimReimbursementDialog = sap.ui.xmlfragment("com.sap.technophilia.courier.fragment.ClaimReimbursement", oThis);
        oThis._oClaimReimbursementDialog.addStyleClass("sapUiSizeCompact");
        oThis.getView().addDependent(oThis._oClaimReimbursementDialog);
      }
      oThis._oClaimReimbursementDialog.open();
    },

    /**
     *
     * Event Handler - On press of Ok in  Claim Reimbursement Dialog
     * @public
     */
    onClaimReimbursementOkay: function() {
      var oThis = this;
    },

    /**
     *
     * Event Handler - On press of Cancel in  Claim Reimbursement Dialog
     * @public
     */
    onClaimReimbursementCancel: function() {
      var oThis = this;
      oThis._oClaimReimbursementDialog.close();
    },

    /**
     *
     * Event Handler - On press of Reimbursement History Tile
     * @public
     */
    onReimbursementHistory: function() {
      var oThis = this;
      if (!oThis._oReimbursementHistoryDialog) {
        oThis._oReimbursementHistoryDialog = sap.ui.xmlfragment("com.sap.technophilia.courier.fragment.ReimbursementHistory", oThis);
        oThis._oReimbursementHistoryDialog.addStyleClass("sapUiSizeCompact");
        oThis.getView().addDependent(oThis._oReimbursementHistoryDialog);
      }
      oThis._oReimbursementHistoryDialog.open();
      oThis._fetchReimbursementHistory();
    },


    /**
     *
     * Internal Method - Method to fetch Reimbursement History and
                         called before opening Reimbursement History Dialog
     * @private
     */
    _fetchReimbursementHistory: function() {
      var oThis = this;
      var oModel = [
        {
          "Type": "Food",
          "Description": "Lunch Bills",
          "Cost": "Rs. 895",
          "Time": "July 29, 2018",
          "Status": "Approved"
        },
        {
          "Type": "Transport",
          "Description": "Cost for Fuel",
          "Cost": "Rs. 1265",
          "Time": "July 29, 2018",
          "Status": "Pending"
        },
        {
          "Type": "Mobile",
          "Description": "Calls to Customer",
          "Cost": "Rs. 399",
          "Time": "July 29, 2018",
          "Status": "Pending"
        }
      ];
      oThis.getView().setModel(new JSONModel(oModel), "ReimbursementHistory");
      console.log("done");
    },


    /**
     *
     * Event Handler - On press of Cancel on Reimbursement History Dialog
     * @public
     */
    onReimbursementHistoryCancel: function() {
      var oThis = this;
      oThis._oReimbursementHistoryDialog.close();
    },

    /**
     *
     * Event Handler - On press of Back button on Page Header
     * @public
     */
    onNavBack: function() {
      var oThis = this;
      oThis._router.navTo("tracking");
    }
  });
});
