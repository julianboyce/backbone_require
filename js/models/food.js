/*global define*/
define([
    'underscore',
    'backbone',
    'parse'
], function (_, Backbone, Parse) {
    'use strict';

    //var Food = Backbone.Model.extend({
    var Food = Parse.Object.extend("TestObject", {
        defaults: {
            foo: 'someBar'
        }
    });

    return Food;
});
