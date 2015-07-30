/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'collections/foods',
    'views/foods',
    'common',
    'parse'
], function ($, _, Backbone, Foods, FoodView, Common, Parse) {
    'use strict';

    // Our overall **AppView** is the top-level piece of UI.
    var ProjectOverview = Backbone.View.extend({

        // Instead of generating a new element, bind to the existing skeleton of
        // the App already present in the HTML.
        el: '#mainSection',

        // At initialization we bind to the relevant events on the `Todos`
        // collection, when items are added or changed. Kick things off by
        // loading any preexisting todos that might be saved in *localStorage*.
        initialize: function () {
            Parse.initialize(ApplicationID, ClientKey);

            var TestObject = Parse.Object.extend("TestObject");
            var testObject = new TestObject();
            testObject.save({foo: "bar"}, {
                success: function(object) {
                    $(".success").show();
                },
                error: function(model, error) {
                    $(".error").show();
                }
            });

            this.$foodList = this.$el.find('#foodList')

            this.listenTo(Foods, 'add', this.addOne);
            this.listenTo(Foods, 'reset', this.addAll);
            this.listenTo(Foods, 'change:completed', this.changeCompleted);
            this.listenTo(Foods, 'all', _.debounce(this.render, 0));

            Foods.fetch({reset:true});
        },

        // Re-rendering the App just means refreshing the statistics -- the rest
        // of the app doesn't change.
        render: function () {
            // You could add a spinner while waiting for the fetch
        },

        // Add a single todo item to the list by creating a view for it, and
        // appending its element to the `<ul>`.
        addOne: function (food) {
            var view = new FoodView({ model: food });
            this.$foodList.append(view.render().el);
        },

        // Add all items in the **Todos** collection at once.
        addAll: function () {
            this.$foodList.empty();
            Foods.each(this.addOne, this);
        },

        changeCompleted: function (todo) {}
    });

    return ProjectOverview;
});
