//1st Define a Model (Only Logic in Model)
         appnamespace.GreetModel = Backbone.Model.extend({
            defaults:{
                firstName:"",
                lastName:"",
                fullName:""
            },
            update:function(){
                // this will update the Value of Greetmodel
                this.set("fullName",this.initCap(this.get("firstName")) + this.initCap(this.get("lastName")));
            },
            initCap:function(str){
                // logic of First Character Capital and Rest is Small in a Word
                if(str.length>1){
                return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
                }
                else{
                    return str.charAt(0).toUpperCase();
                }
            }
        });