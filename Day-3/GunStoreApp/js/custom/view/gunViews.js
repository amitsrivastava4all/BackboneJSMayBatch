/* It reprsent the view for a Collection*/
gunApp.GunViews = Backbone.View.extend({
    tagName:"div",
    className:"row",
    render:function(){
        // Iterate the Collection 
        this.collection.each(this.addGun,this);
        return this;
        
    },
    addGun:function(gunObject){
        // Single View Object Created
        var gunViewObject = new gunApp.GunView({
            model:gunObject
        });
        this.$el.append(gunViewObject.render().el);
    }
});

$(document).ready(function(){
    var gunCollection = new gunApp.GunCollection();
    gunCollection.fetch({
        success:function(data){
            alert("Data is "+data);
           var gunCollectionView = new gunApp.GunViews({
               collection:data
           });
        gunCollectionView.render().$el.appendTo(document.body);    
        },
        error:function(err){
           alert("Error is "+err); 
        }
    })
    
})
