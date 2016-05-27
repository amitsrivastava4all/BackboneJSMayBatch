/*global Myapp, Backbone, JST*/

Myapp.Views = Myapp.Views || {};

(function () {
  'use strict';

  Myapp.Views.Blog = Backbone.View.extend({

    template: JST['app/scripts/templates/blog.hbs'],

    tagName: 'div',

    id: '',

    className: '',

    events: {},

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
    }

  });

})();
