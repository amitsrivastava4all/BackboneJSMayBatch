// define is used to define or declare a new module
//and parameters of define says ur module is dependent on which module
define(['backbone'],function(BackBone){
var CalculatorModel = Backbone.Model.extend({
    defaults:{
        firstNo:0,
        secondNo:0,
        operator:'',
        result:0
    },
    operation : function(){
        var operandOne = this.get("firstNo");
        var operandTwo = this.get("secondNo");
        var operartor = this.get("operator");
        var expression = operandOne + operartor + operandTwo;
        var r = eval(expression);
        this.set("result",r);
        console.log("Result of R is ",r);
        console.log("Expression is ",expression);
        console.log("Type of Expression is  ",typeof expression);
    }
    /*add:function(){
        var sum = parseInt(this.get("firstNo")) + parseInt(this.get("secondNo"));
        this.set("result",sum);
    },
    subtract:function(){
        var sum = parseInt(this.get("firstNo")) - parseInt(this.get("secondNo"));
        this.set("result",sum);
    },
    multiply:function(){
        var sum = parseInt(this.get("firstNo")) * parseInt(this.get("secondNo"));
        this.set("result",sum);
    },
    divide:function(){
        var sum = parseInt(this.get("firstNo")) / parseInt(this.get("secondNo"));
        this.set("result",sum);
    }*/
});
    return CalculatorModel; // Module Must return the Object
});