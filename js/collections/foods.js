/*global define */
define([
    'underscore',
    'backbone',
    'backboneLocalstorage',
    'models/food',
    'parse'
], function (_, Backbone, Store, Food, Parse) {
    'use strict';

    //var FoodsCollection = Backbone.Collection.extend({
    var FoodsCollection = Parse.Collection.extend({
        // Reference to this collection's model.
        model: Food
    });

    return new FoodsCollection();
});