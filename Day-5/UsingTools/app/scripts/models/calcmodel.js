/*global Myapp, Backbone*/

Myapp.Models = Myapp.Models || {};

(function () {
  'use strict';

  Myapp.Models.Calcmodel = Backbone.Model.extend({

    url: '',

    initialize: function() {
    },

    defaults: {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();
