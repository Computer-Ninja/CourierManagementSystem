sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller) {
  "use strict";

  return Controller.extend("com.sap.technophilia.courier.controller.Manager", {

    /**
     * Lifecycle Method - Called when the manager's page is instantiated.
     * @public
     */
    onInit: function() {
		var oThis = this;
    	var oComponent = oThis.getOwnerComponent();
    	oThis._router = oComponent.getRouter();
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
  })
})
