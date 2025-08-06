sap.ui.define(['sap/ui/core/UIComponent'],
    function(UIComponent){
        return UIComponent.extend("com.rg.mm.vd.Component",{
           metadata: {
            manifest: "json"
           },

           init: function(){
            UIComponent.prototype.init.apply(this);
            
            this.getRouter().initialize();

           },

           //createContent: function(){},
           destroy: function(){}

        });
});