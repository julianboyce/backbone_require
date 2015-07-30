/*global define */
define([
    'underscore',
    'backbone',
    'models/project',
    'parse'
], function (_, Backbone, Project, Parse) {
    'use strict';

    var ProjectsCollection = Parse.Collection.extend({
        // Reference to this collection's model.
        model: Project
    });

    return new ProjectsCollection();
});
