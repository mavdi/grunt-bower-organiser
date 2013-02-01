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
  var log = grunt.log.write; 

  grunt.registerTask(TASK_NAME, TASK_DESC, function() {

    var done = this.async();

    log('DATA---------> ' + this.data);
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('bower-organiser', function() {
    return 'bower-organiser!!!';
  });

};
