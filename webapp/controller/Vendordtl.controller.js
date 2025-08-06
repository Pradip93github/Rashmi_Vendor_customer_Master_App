sap.ui.define(['com/rg/mm/vd/controller/BaseController',
               'sap/ui/model/Filter',
               'sap/ui/model/FilterOperator',
               'sap/m/MessageBox',
	             'sap/m/MessageToast',
               'sap/m/Text'
],
    
    function(BaseController,Filter,FilterOperator,MessageBox,MessageToast,Text){
       return BaseController.extend("com.rg.mm.vd.controller.Vendordtl",{
           onInit:function(){
            this.Orouter = this.getOwnerComponent().getRouter();
            this.Orouter.getRoute("vendorDetail").attachMatched(this.harculus, this);
           },
           
           harculus: function(oEvent){
           },

           onGoButton:function( oEvent){
             var oFilter1 = [];
             var oFilter2 = [];
              var sCmcd = this.getView().byId("idCmcd").getSelectedKeys();
              var sBprole = this.getView().byId("idBpRole").getSelectedKeys();
             
               for (let index = 0; index < sCmcd.length; index++) {
                const element = sCmcd[index];
                 oFilter1 = new Filter("CODE", FilterOperator.EQ, element );
                 oFilter2.push(oFilter1);
                }

               if ( oFilter2.length === 0 ) {
                MessageBox.error("oops!company code should not be blank");

               } else {
                
                oFilter1 = [];
                for (let index = 0; index < sBprole.length; index++) {
                 const element = sBprole[index];
                 oFilter1 = new Filter("BPROLE", FilterOperator.EQ, element )
                 oFilter2.push(oFilter1);
                }
               
               }

              // **** Dynamic Buinding -Table Items binding ***** //

              //  var oModel = this.getView().getModel("vencust");
              //  var that = this;
              //  oModel.read("/BasicDataSet",{
              //   filters: oFilter2,
                
              //   sorters: [],                          // Optional: Array of sap.ui.model.Sorter objects for sorting
              //   urlParameters: {
              //       "$expand": "NavigationProperty", // Optional: Expand related entities
              //       "$select": "Property1,Property2" // Optional: Select specific properties
              //   },
              
              //   success: function(oData, oResponse){
              //     console.log("success hua" + oResponse );
              //   },
              //   error: function(oError) {
              //     console.log("Error hua" + oError); 
              //   },    
                           
              //  });


                   
                  var oItemTemplate = new sap.m.ColumnListItem({
                    type: 'Navigation',
                    cells:[
                      new sap.m.ObjectIdentifier({ 
                        title: "{vencust>CODE}",
                        text: "{vencust>NAME}"
                      }),
                      new Text({ text: "{vencust>CITY}"}),
                      new Text({ text: "{vencust>DISTRICT}" }),
                      new Text({ text: "{vencust>POSTCODE}" }),
                      new Text({ text: "{vencust>REGION}" }),
                      new Text({ text: "{path: 'vencust>STREET'}" })
                    ],
                    
                  });
                    this.getView().byId("idVenTable").bindAggregation("items",{
                        path: "vencust>/BasicDataSet",
                        template: oItemTemplate,
                        filters: oFilter2,
                    });


                  // ***** Static Binding If we declared aggrigation binding in view ****** //
                  //  this.getView().byId("idVenTable").getBinding("items").filter(oFilter2);
           },

           onPressItem: function(oEvent){
             debugger;
             var sPath = oEvent.getParameter("listItem").getBindingContextPath();
             var oIndex = sPath.split("/")[sPath.split("/").length - 1];
             this.Orouter.navTo("VendorPerDetail",{
              code: oIndex
             });
           }










       });
});;