gunApp.GunCollection = Backbone.Collection.extend({
   model:gunApp.GunModel,
   url:'http://127.0.0.1:51140/Examples/GunStoreApp/js/custom/json/gunserver.json'    
});