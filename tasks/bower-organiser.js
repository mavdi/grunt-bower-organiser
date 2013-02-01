/*
 * grunt-bower-organiser
 * https://github.com/mavdi/grunt-bower-organiser
 *
 * Copyright (c) 2013 Mehdi Avdi
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  //Constants
  var TASK_NAME = 'bowerOrganiser';
  var TASK_DESC = 'Organises Bower components according to their types';

  //libs
  var path = require('path');
  var bower = require('bower');

  //utils
  var _ = grunt.utils._;
  var log = grunt.log.write; 

  var config = _.extend( [], grunt.config.get('bowerOrganiser'), this.data);


  grunt.registerTask(TASK_NAME, TASK_DESC, function() {

    var done = this.async();

    bower.commands.list({map : true}).on('data', function(data) {
      log("data" + grunt.utils);
      _.each(data, function(component) {
        if(grunt.utils.kindOf(component.source.main) === 'array') {
          _.each(component.source.main, function(source) {
            var extension = source.split('.').pop();
            grunt.file.copy(source, extension + '/' + path.basename(source));
          });
        } else {
          var extension = component.source.main.split('.').pop();
          grunt.file.copy(component.source.main, extension + '/' + path.basename(component.source.main));
        }
        
      });
    });
  });
};
