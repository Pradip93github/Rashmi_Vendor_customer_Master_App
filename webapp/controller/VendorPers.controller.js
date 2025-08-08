sap.ui.define(['com/rg/mm/vd/controller/BaseController'],
    
    function(BaseController){
        return BaseController.extend("com.rg.mm.vd.controller.VendorPers",{
       
            onInit: function(){
             this.oRouter = this.getOwnerComponent().getRouter();
             this.oRouter.getRoute("VendorPerDetail").attachMatched(this.harculus, this);
            },

            harculus: function(oEvent){
                 debugger;
                 var oId = oEvent.getParameter("arguments").code;
                 var sPath = 'vencust>/' + oId;
                 this.getView().bindElement(sPath,{
                         expand: 'venTObank'
                 });
            },




        });

});