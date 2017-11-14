var gulp = require('gulp')
var typedoc = require("gulp-typedoc");
gulp.task("typedoc", function() {
    return gulp
        .src(["src/fwi_core.ts", "src/player.ts", "src/models/TextFormatVariable.ts", "src/string.ts"])
        .pipe(typedoc({
            module: "system",
            target: "es6",
            out: "docs/",
            name: "Fwi.js"
        }))
    ;
});