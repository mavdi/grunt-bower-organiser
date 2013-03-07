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
  var clc = require('cli-color');

  //utils
  var _ = grunt.util._;
  var log = grunt.log.write; 
  var helpers = require('./lib/helpers').init(grunt, _);

  var config = _.extend( [], grunt.config.get('bowerOrganiser'), this.data);


  grunt.registerTask(TASK_NAME, TASK_DESC, function() {

    var done = this.async();

    bower.commands.list({map : true}).on('data', function(data) {
      _.each(data, function(component, name) {
        if(component.source.main) {
          helpers.parse(config, name, component.source.main);
        } else {
          console.log(clc.red('>>> main property not found in component.json for package ' + name));
        }
      });
      done();
    });
  });
};
