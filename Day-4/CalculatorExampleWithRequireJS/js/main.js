/*
Reference of all the Library and Custom JS Files
*/
require.config({
    baseUrl:'.',
    // Add the Library Depedency
    paths:{
        'handlebars':'js/libs/handlebars-v4.0.5',
        'jquery':'js/libs/jquery-1.12.4.min',
        'underscore':'js/libs/underscore-min',
        'backbone':'js/libs/backbone-min',
        'text':'js/libs/text'
    },
   shim:{
        'jquery':{
            exports:'$'
        },
        'underscore':{
            exports:'_'
        },
        'backbone':{
            deps:['underscore','jquery'],
            exports:function(){
                return Backbone.noConflict();
            }
        }
    }
});

// Entry Point of the Application
require(['jquery','js/custom/model/calcmodel','js/custom/views/calcview'],
       function($,CalculatorModel,CalculatorView){
            var calcModel = new CalculatorModel();
// Create Object of View
var calcView = new CalculatorView({
    model:calcModel
});
$(document).ready(function(){
    calcView.render().$el.appendTo(document.body);
});
});