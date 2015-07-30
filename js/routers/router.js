/*global define*/
define([
	'jquery',
	'backbone',
	'collections/projects',
	'views/project-overview'
], function ($, Backbone, Projects, ProjectOverview) {
	'use strict';

	var TodoRouter = Backbone.Router.extend({
		routes: {
			'project-overview': 'projectOverview'
		},

		projectOverview: function () {
			new ProjectOverview();
		}
	});

	return TodoRouter;
});
