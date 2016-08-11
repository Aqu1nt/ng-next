var elixir = require("laravel-elixir");

elixir(function(mix){

    // Babel configuration
    var config = elixir.config.js.browserify.transformers.find(transformer => transformer.name === 'babelify');
    config.options.plugins = ["babel-plugin-transform-decorators-legacy"];
    config.options.presets = ["es2015", "stage-2"];

    mix.browserify('./src/NgNext.js', './dist/ng-next.min.js', '.', {
        standalone : "Angular2to1",
        bare : true
    });

    mix.browserify('./examples/Example.js', './examples/dist/transpiled.js', '.', {

    })
});