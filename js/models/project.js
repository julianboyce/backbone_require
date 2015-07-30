/*global define*/
define([
    'underscore',
    'backbone',
    'parse'
], function (_, Backbone, Parse) {
    'use strict';

    var Project = Parse.Object.extend("Project", {
        defaults: {
            title: '',
            description: '',
            members: null
        }
    });

    return Project;
});
