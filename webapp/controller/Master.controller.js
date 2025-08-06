sap.ui.define(['com/rg/mm/vd/controller/BaseController'],
    function(BaseController){
        return BaseController.extend("com.rg.mm.vd.controller.Master",{

            onInit: function(){
                this.oRouter = this.getOwnerComponent().getRouter();
            },

            onItemPress: function(oEvent){
                var sPath = oEvent.getParameter("listItem").getBindingContextPath();
                var oIndex = sPath.split("/")[sPath.split("/").length - 1];

                switch (oIndex) {
                    case "0":
                        this.oRouter.navTo("vendorDetail",{
                            index : oIndex,
                        });
                        break;

                    case "1":
                        this.oRouter.navTo("CustomerDetail",{
                            index : oIndex,
                        });
                        break;

                    default:
                        break;
                };

            },

            

        });

});