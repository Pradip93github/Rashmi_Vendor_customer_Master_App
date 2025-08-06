sap.ui.define(['com/rg/mm/vd/controller/BaseController'],
    
    function(BaseController){
        return BaseController.extend("com.rg.mm.vd.controller.Customerdtl",{
            onInit: function(){
                this.oRouter = this.getOwnerComponent().getRouter();
                this.oRouter.getRoute("CustomerDetail").attachMatched(this.harculas, this);
            },

            harculas:function(oEvent){

            },

        });
});