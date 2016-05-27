var MobileView = Backbone.View.extend({
    defaults:{
        itemValue:''
    },
    render:function(){
    this.$el.html("<h1>This is a Mobile View For "+this.itemValue+" </h1>");
    return this;
    },
    setItemValue:function(value){
    this.itemValue= value;
    }
});