sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller) {
  "use strict";

  return Controller.extend("com.sap.technophilia.courier.controller.Tracking", {

    /**
     * Lifecycle Method - Called when the home page(i.e, tracking page) is instantiated.
     * @public
     */
    onInit: function() {
      var oThis = this;
      var oComponent = oThis.getOwnerComponent();
      oThis._router = oComponent.getRouter();
    },

    /**
     *
     * Event Handler - On click of log-in on the home page
     * @public
     */
    onLogin: function() {
      var oThis = this;
      if (!oThis._oLoginDialog) {
        oThis._oLoginDialog = sap.ui.xmlfragment("com.sap.technophilia.courier.fragment.Login", oThis);
        oThis._oLoginDialog.addStyleClass("sapUiSizeCompact");
        oThis.getView().addDependent(oThis._oLoginDialog);
      }
      oThis._oLoginDialog.open();
    },
    
    onPolicyCheck: function() {
      var oThis = this;
      if (!oThis._oPolicyDialog) {
        oThis._oPolicyDialog = sap.ui.xmlfragment("com.sap.technophilia.courier.fragment.Policy", oThis);
        oThis._oPolicyDialog.addStyleClass("sapUiSizeCompact");
        oThis.getView().addDependent(oThis._oPolicyDialog);
      }
      oThis._oPolicyDialog.open();
    },

	onPolicyClose: function(){
	  var oThis = this;
      oThis._oPolicyDialog.close();
	},

    onManagerLogin: function() {
      var oThis = this;
      oThis._router.navTo("manager");
    },

    onEmployeeLogin: function() {
      var oThis = this;
      oThis._router.navTo("employee");
    },

    onLoginCancel: function() {
      var oThis = this;
      oThis._oLoginDialog.close();
    }
  });
});
