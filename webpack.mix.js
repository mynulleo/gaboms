const mix = require("laravel-mix");

// Mix core script...
mix.js("resources/js/app.js", "public/build/js")
    .js("resources/js/login_app.js", "public/build/js")
    .vue()
    .options({
        processCssUrls: false,
    });

// SASS CSS
mix.sass(
    "resources/build/admin/sass/style.scss",
    "public/build/admin/css"
).sourceMaps(true, "source-map");

// theme sass
// mix.sass(
//     "resources/build/theme/css/main.css",
//     "public/build/theme/css"
// ).sourceMaps(true, "source-map");

// Create chunk...
let config = {
    output: {
        publicPath: process.env.MIX_VUE_ROUTER_BASE
            ? "/" + process.env.MIX_VUE_ROUTER_BASE + "/public/"
            : "/",
        chunkFilename: "build/js/chunks/[name].js",
    },
    stats: {
        children: true,
    },
};

// Mix Config...
mix.webpackConfig(config);
