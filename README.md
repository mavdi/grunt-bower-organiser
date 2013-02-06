# grunt-bower-organiser

Organises Bower components according to their types

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-bower-organiser`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-bower-organiser');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

## Documentation
To your [grunt.js gruntfile][getting_started], add:

```javascript
bowerOrganiser: {
  mapping: {
    js: 'lib',
    css: 'css',
    less : 'less'
  }
}
```

Plugin now accepts folders in the ```main``` section of ```component.json```. 

```javascript
{
  "name": "some-module",
  "version": "1.0.0",
  "main": "./less/",
  "dependencies": {},
  "gitHead": "",
  "_id": "some-module@1.0.0",
  "readme": "",
  "repository": {
    "type": "git",
    "url": ""
  }
}
```

will copy all the files in the '''less''' folder over to the destination specified in the mappings.

The plugin will use the file extension as a directory if there are no mappings provided for a certain extension.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History
v0.3.0 Plugin now accepts folders in the ```main``` section of ```component.json```. 

## License
Copyright (c) 2013 Mehdi Avdi  
Licensed under the MIT license.
