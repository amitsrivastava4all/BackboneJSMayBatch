var Calculator = Backbone.Model.extend({
    defaults:{
        firstNumber:0,
        secondNumber:0    
    },
    add:function(){
        return this.get("firstNumber")+ this.get("secondNumber");
    },
    reset:function(){
        this.set("firstNumber",0);
        this.set("secondNumber",0);
    }    
    
});

