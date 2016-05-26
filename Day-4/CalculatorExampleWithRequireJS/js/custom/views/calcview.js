define(['jquery','handlebars','backbone','underscore'
        ,'text!calctemplate.html','js/custom/model/calcmodel'],
      function($,Handlebars,Backbone,_,templateHTML,CalculatorModel){
var CalculatorView=Backbone.View.extend({
   initialize:function(){
       // When Any Update On Model it Will Call the Render , toPrint output
       this.model.on("change",this.render.bind(this));
   },
render:function(){
    //var templateValue = document.getElementById("calculateTemplate").innerHTML;
    console.log("Template is "+templateHTML);
    var template = Handlebars.compile(templateHTML);
    var result = template(this.model.attributes);
    this.$el.html(result);
    return this;
},
events:{
    //"click .opr":"doOperation"
    "click #plus":"doOperation",
    "click #subtract":"doOperation",
    "click #multiply":"doOperation",
    "click #divide":"doOperation"
   /* "click #plus":"triggerAdd",
    "click #subtract":"triggerSubtract",
    "click #multiply":"triggerMultiply",
    "click #divide":"triggerDivide"*/
},
doOperation:function(event){
    console.log("Source Element "+event.target.innerHTML);
    var operator = event.target.innerHTML;
    var firstNumber = $("#firstNumber").val(); // getting text box value
    var secondNumber = $("#secondNumber").val();
    this.model.set("firstNo",firstNumber);
    this.model.set("secondNo",secondNumber);
    this.model.set("operator",operator);
    this.model.operation();
   // console.dir(event.target.innerHTML);
}    
/*triggerAdd:function(){
var firstNumber = $("#firstNumber").val(); // getting text box value
var secondNumber = $("#secondNumber").val();
this.model.set("firstNo",firstNumber);
this.model.set("secondNo",secondNumber);
this.model.add();  // this.calcModel.add();   
},
triggerSubtract:function(){
var firstNumber = $("#firstNumber").val(); // getting text box value
var secondNumber = $("#secondNumber").val();
this.model.set("firstNo",firstNumber);
this.model.set("secondNo",secondNumber);
this.model.subtract();    
},
triggerMultiply:function(){
var firstNumber = $("#firstNumber").val(); // getting text box value
var secondNumber = $("#secondNumber").val();
this.model.set("firstNo",firstNumber);
this.model.set("secondNo",secondNumber);
this.model.multiply();    
},
triggerDivide:function(){
var firstNumber = $("#firstNumber").val(); // getting text box value
var secondNumber = $("#secondNumber").val();
this.model.set("firstNo",firstNumber);
this.model.set("secondNo",secondNumber);
this.model.divide();    
}*/
});
// Create Object of Model
/*var calcModel = new calculatorApp.CalculatorModel();
// Create Object of View
var calcView = new calculatorApp.CalculatorView({
    model:calcModel
});
$(document).ready(function(){
    calcView.render().$el.appendTo(document.body);
});*/
    return CalculatorView;
});    