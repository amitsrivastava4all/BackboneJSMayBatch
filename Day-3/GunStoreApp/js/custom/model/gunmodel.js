gunApp.GunModel = Backbone.Model.extend({
defaults:{
name:'',
desc:'',
price:0,
quantity:0,
discount:0,
url:'',
basePath:config.basepath    
    
},
    initialize:function(){
        console.log("Model Object Created "+this.get("name")
                 +" url "+this.get("url") +" base path "+this.get("basePath"));
    }
    
});
