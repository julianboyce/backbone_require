/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/foods.html',
    'common',
    'parse'
], function ($, _, Backbone, foodsTemplate, Common, Parse) {
    'use strict';

    var FoodView = Backbone.View.extend({

        tagName:  'li',

        template: _.template(foodsTemplate),

        // The TodoView listens for changes to its model, re-rendering. Since there's
        // a one-to-one correspondence between a **Todo** and a **TodoView** in this
        // app, we set a direct reference on the model for convenience.
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        // Re-render the titles of the todo item.
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return FoodView;
});