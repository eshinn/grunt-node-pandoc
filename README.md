# grunt-node-pandoc

> Control node-pandoc via Grunt

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-node-pandoc --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-node-pandoc');
```

## The "node_pandoc" task

### Overview
In your project's Gruntfile, add a section named `node_pandoc` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  node_pandoc: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.flags
Type: `String`
Default value: `false`

A string value that is used to pass along to PanDoc as arguments/flags per the CLI (command-line-interface).

### Usage Examples

#### Default Options
In this example, the default options are used to show their optional use. So if the `section1.md` file has the content `# Hello` and the `section2.md` file had the content `1 2 3`, the generated result would be `\section{Hello}\label{hello}\n\n1 2 3`

```js
grunt.initConfig({
  node_pandoc: {
    options: {},
    files: {
      'dest/default_options.tex': ['src/section1.md', 'src/section2.md'],
    },
  },
});
```

#### Custom Options
In this example, custom `flags` are used to specify options permitted by the PanDoc CLI (command-line-interface). So if the `section1.md` file has the content `# Hello` and the `section2.md` file had the content `1 2 3`, the generated result in this case would be `# Hello\n\n1 2 3`

```js
grunt.initConfig({
  node_pandoc: {
    options: {
      flags: "--atx-headers"
    },
    files: {
      'dest/default_options.md': ['src/section1.md', 'src/section2.md'],
    },
  },
});
```

## License

Copyright &copy; Eric Shinn  
Licensed under the MIT License