/*global Myapp, Backbone*/

Myapp.Collections = Myapp.Collections || {};

(function () {
  'use strict';

  Myapp.Collections.Empcollection = Backbone.Collection.extend({

    model: Myapp.Models.Empcollection

  });

})();
