# grunt-bower-organiser

Organises Bower components according to their types

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-bower-organiser`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-bower-organiser');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/wiki/Getting-started

## Documentation
To your [grunt.js gruntfile][getting_started], add:

```javascript
bowerOrganiser: {
  options: {
    includeName: true
  },
  mapping: {
    js: 'lib',
    css: 'css',
    less: 'less'
  }
}
```

If you want to move specific files in modules to a different folder than the mappings, use the following syntax:

```
bowerOrganiser: {
  options: {
    includeName: true
  },
  mapping: {
    js: 'lib',
    css: 'css',
    less: 'css/less'
  },
  specifics: {
    example-module : {
      'main.less' : 'css'
    }
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
* v0.7.0 Grunt 0.4 compatible
* v0.6.0 Added the ability to move specific files to different destinations than the ones declared in the mappings.
* v0.5.0 Folder recursion bug fixes.
* v0.4.0 options added to include package name when placing the assets.
* v0.3.0 Plugin now accepts folders in the ```main``` section of ```component.json```. 

## License
Copyright (c) 2013 Mehdi Avdi  
Licensed under the MIT license.
