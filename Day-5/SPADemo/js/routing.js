// This JS Contains the Routing Information
// Navigation Information of the Different Views

// Define a Router
var AppRouter = Backbone.Router.extend({
   // Routing Information of Different Views,
//    Will be Here
    routes:{
    "mobiles/:items":"mobileview",
    "home":"homeview",
    "tablets":"tabletview",
    "leds":"ledview"    
   },
   mobileview:function(value){
       var view = new MobileView({el:"#container"});
       view.setItemValue(value);
       view.render();
   },
   homeview:function(){
       var view = new HomeView({el:"#container"});
       view.render();
   },
 tabletview:function(){
       var view = new TabletView({el:"#container"});
       view.render();
   },
     ledview:function(){
       var view = new LedView({el:"#container"});
       view.render();
   }
    
});
var router = new AppRouter();
Backbone.history.start();

var NavBarView = Backbone.View.extend({
    events:{
        "click":"OnClick"
    },
    OnClick:function(event){
        var li = $(event.target);
        router.navigate(li.attr("data-url"),{trigger:true});
    }
});
var navBar = new NavBarView({el:"#navbar"});