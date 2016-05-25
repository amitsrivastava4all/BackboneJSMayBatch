/* It reprsent the view for a Model*/
gunApp.GunView = Backbone.View.extend({
   tagName:"div",
   className:'col-md-4',
   render:function(){
    var template = Handlebars.compile($("#guntemplate").html());
    var result = template(this.model.attributes);
    this.$el.html(result);
    return this;
}    
});