var elixir = require("laravel-elixir");
require("laravel-elixir-livereload");

elixir(function(mix){

    // Babel configuration
    var config = elixir.config.js.browserify.transformers.find(transformer => transformer.name === 'babelify');
    config.options.plugins = ["babel-plugin-transform-decorators-legacy"];
    config.options.presets = ["es2015", "stage-2"];

    mix.browserify('./src/NgNext.js', './dist/ng-next.js', '.', {
        standalone : "NgNext",
        bare : true,
        debug : true,
        plugin: [
            [ "browserify-derequire" ]
        ]
    });

    mix.browserify('./examples/Example.js', './examples/dist/transpiled.js', '.', {
        cache: {}, // required for watchify
        packageCache: {}, // required for watchify
    });

    mix.livereload();
});