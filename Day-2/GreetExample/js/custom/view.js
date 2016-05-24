 // DOM Manipulation in View (Event Register , Calling Model , Template Integeration)
         appnamespace.GreetView = Backbone.View.extend({
            //1st Get Intialized when View object is created....
            initialize:function(){
               // alert("Init Called ... View Object is Created...");
                // Register event on model and bind it with the render
                this.model.on("change",this.render.bind(this));
            },
            // 3rd register the events 
            events:{
                // register the template events
                "click #greet":"triggerFullName" // Picking the id of greet button
                // and add the event click on greet button id
            },
            // 2nd When Ready is called , then i called render to show template output
            // Used to render the output
            render:function(){
               // alert("Render Called...");
                var templateValue = document.getElementById("greetTemplate").innerHTML;
                var template = Handlebars.compile(templateValue);
                //var result = template({fullName:this.model.get("fullName")});
                var result = template(this.model.attributes);
                this.$el.html(result);
                return this;
            },
            triggerFullName:function(){
                var firstNameValue = $("#firstName").val(); //JQuery Way
                var lastNameValue = document.getElementById("LastName").value; //JS Style
                this.model.set("firstName",firstNameValue);
                this.model.set("lastName",lastNameValue);
                this.model.update();
                
            }
        });
        
        // Create Object of Model
        var greetModel = new appnamespace.GreetModel();
        // Create Object of View
        var greetView = new appnamespace.GreetView({
            model:greetModel // Binding Model Object with View
        });
        $(document).ready(function(){
            //alert("Document Ready Called...");
            greetView.render().$el.appendTo(document.body);
        });