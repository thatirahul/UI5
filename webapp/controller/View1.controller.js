sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function  (Controller , MessageToast)  {
    "use strict";

    return Controller.extend("service.ui5.project1.controller.View1", {
        onInit: function () {
        },
 onProducts: function (oEvent) {
            var oSelectedItem = oEvent.getParameter("listItem");
            var oCtx = oSelectedItem.getBindingContext();
            var sPath = oCtx.getPath();

            var oDetailsPanel = this.getView().byId("detailsPanel");
            oDetailsPanel.bindElement(sPath);
            this.getView().byId("listPanel").setVisible(false);
            oDetailsPanel.setVisible(true);
        },
  onBack: function () {
            this.getView().byId("detailsPanel").setVisible(false);
            this.getView().byId("listPanel").setVisible(true);
        },
    });
});