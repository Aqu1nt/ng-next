var elixir = require("laravel-elixir");

elixir(function(mix){
    mix.browserify('./src/Angular2to1.js', './dist/angular-es7-integration.min.js', '.', {
        standalone : "Angular2to1",
        bare : true
    });
});