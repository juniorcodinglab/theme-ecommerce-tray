const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const stripCssComments = require('gulp-strip-css-comments');

// HOME FILES
const homeSassCss = () => {

    const src = './public/css/sass/home.min.scss';
    const dest = './public/css';
    const name = 'home.sass.min.css'

    return gulp.src(src)
        .pipe(concat(name))
        .pipe(stripCssComments({
            preserve: false,
            whitespace: false
        }))
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(dest));
};
const homeCss = () => {

    const src = [
        './public/css/bootstrap/bootstrap.min.css',
        './public/js/vendor/slick/slick.css',
        './public/js/vendor/remixicon/remixicon.css',
        './public/css/home.sass.min.css'
    ];
    const dest = './public/css';
    const name = 'home.min.css'

    return gulp.src(src)
        .pipe(concat(name))
        .pipe(stripCssComments({
            preserve: false,
            whitespace: false
        }))
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(dest));
};
const srcHomeJs = [
    './public/js/vendor/bootstrap-4.4.1/bootstrap.min.js',
    './public/js/vendor/slick/slick.min.js',
    './public/js/vendor/jquery-ui-1.12.1/jquery-ui.min.js',
    './public/js/vendor/jquery.hoverIntent.min.js',
    './public/js/modules/functions.js',
    './public/js/modules/header.js',
    './public/js/modules/cart.js',
    './public/js/modules/footer.js',
    './public/js/modules/modais.js',
    './public/js/modules/home.js'
];
const homeJs = () => {

    const dest = './public/js';
    const name = 'home.min.js';

    return gulp.src(srcHomeJs)
        .pipe(concat(name))
        .pipe(babel({
            presets: [
                [
                    '@babel/env',
                    { targets: { chrome: "58" } }
                ]
            ],
            plugins: [
                [
                    "@babel/plugin-transform-modules-commonjs",
                    { strictMode: false }
                ]
            ],
            compact: true,
            minified: true,
            comments: false
        }))
        .pipe(gulp.dest(dest));
};
const homeWatch = () => {

    const srcCss = [
        './public/css/sass/components/header/**/*',
        './public/css/sass/components/home/*',
        './public/css/sass/components/blurry/*',
        './public/css/sass/components/**/*',
        './public/css/sass/fonts/*.scss',
        './public/css/sass/home.min.scss'
    ];

    gulp.watch(srcHomeJs, homeJs);
    gulp.watch(srcCss, gulp.series(homeSassCss, homeCss));
}

// CATALOG FILES
const catalogSassCss = () => {

    const src = './public/css/sass/catalog.min.scss';
    const dest = './public/css';
    const name = 'catalog.sass.min.css'

    return gulp.src(src)
        .pipe(concat(name))
        .pipe(stripCssComments({
            preserve: false,
            whitespace: false
        }))
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(dest));
};
const catalogCss = () => {

    const src = [
        './public/css/bootstrap/bootstrap.min.css',
        './public/js/vendor/slick/slick.css',
        './public/js/vendor/fontawesome-5.0.10/css/all.css',
        './public/css/catalog.sass.min.css'
    ];
    const dest = './public/css';
    const name = 'catalog.min.css'

    return gulp.src(src)
        .pipe(concat(name))
        .pipe(stripCssComments({
            preserve: false,
            whitespace: false
        }))
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(dest));
};
const srcCatalogJs = [
    './public/js/vendor/bootstrap-4.4.1/bootstrap.min.js',
    './public/js/vendor/slick/slick.min.js',
    './public/js/vendor/jquery-ui-1.12.1/jquery-ui.min.js',
    './public/js/vendor/jquery.hoverIntent.min.js',
    './public/js/vendor/fontawesome-5.0.10/js/all.js',
    './public/js/modules/functions.js',
    './public/js/modules/header.js',
    './public/js/modules/cart.js',
    './public/js/modules/footer.js',
    './public/js/modules/modais.js',
    './public/js/modules/catalog.js'
];
const catalogJs = () => {

    const dest = './public/js';
    const name = 'catalog.min.js';

    return gulp.src(srcCatalogJs)
        .pipe(concat(name))
        .pipe(babel({
            presets: [
                [
                    '@babel/env',
                    { targets: { chrome: "58" } }
                ]
            ],
            plugins: [
                [
                    "@babel/plugin-transform-modules-commonjs",
                    { strictMode: false }
                ]
            ],
            compact: true,
            minified: true,
            comments: false
        }))
        .pipe(gulp.dest(dest));
};
const catalogWatch = () => {

    const srcCss = [
        './public/css/sass/components/header/**/*',
        './public/css/sass/components/catalog/**/**/*',
        './public/css/sass/components/blurry/*',
        './public/css/sass/components/**/*',
        // './public/css/sass/fonts/*.scss',
        // './public/css/sass/catalog.min.scss'
    ];

    gulp.watch(srcCatalogJs, catalogJs);
    gulp.watch(srcCss, gulp.series(catalogSassCss, catalogCss));
}

// PRODUCT FILES
const productSassCss = () => {

    const src = './public/css/sass/product.min.scss';
    const dest = './public/css';
    const name = 'product.sass.min.css'

    return gulp.src(src)
        .pipe(concat(name))
        .pipe(stripCssComments({
            preserve: false,
            whitespace: false
        }))
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(dest));
};
const productCss = () => {

    const src = [
        './public/css/bootstrap/bootstrap.min.css',
        './public/js/vendor/slick/slick.css',
        './public/js/vendor/fontawesome-5.0.10/css/all.css',
        './public/css/product.sass.min.css'
    ];
    const dest = './public/css';
    const name = 'product.min.css'

    return gulp.src(src)
        .pipe(concat(name))
        .pipe(stripCssComments({
            preserve: false,
            whitespace: false
        }))
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(dest));
};
const srcProductJs = [
    './public/js/vendor/bootstrap-4.4.1/bootstrap.min.js',
    './public/js/vendor/slick/slick.min.js',
    './public/js/vendor/jquery-ui-1.12.1/jquery-ui.min.js',
    './public/js/vendor/jquery.hoverIntent.min.js',
    './public/js/vendor/fontawesome-5.0.10/js/all.js',
    './public/js/modules/functions.js',
    './public/js/modules/header.js',
    './public/js/modules/cart.js',
    './public/js/modules/footer.js',
    './public/js/modules/modais.js',
    './public/js/modules/product.js'
];
const productJs = () => {

    const dest = './public/js';
    const name = 'product.min.js';

    return gulp.src(srcProductJs)
        .pipe(concat(name))
        .pipe(babel({
            presets: [
                [
                    '@babel/env',
                    { targets: { chrome: "58" } }
                ]
            ],
            plugins: [
                [
                    "@babel/plugin-transform-modules-commonjs",
                    { strictMode: false }
                ]
            ],
            compact: true,
            minified: true,
            comments: false
        }))
        .pipe(gulp.dest(dest));
};
const productWatch = () => {

    const srcCss = [
        './public/css/sass/components/header/**/*',
        './public/css/sass/components/product/**/**/*',
        './public/css/sass/components/blurry/*',
        './public/css/sass/components/**/*',
        // './public/css/sass/fonts/*.scss',
        // './public/css/sass/product.min.scss'
    ];

    gulp.watch(srcProductJs, productJs);
    gulp.watch(srcCss, gulp.series(productSassCss, productCss));
}

const Home              = () => gulp.series(gulp.parallel(gulp.series(homeSassCss, homeCss), homeJs), homeWatch);
const Catalog           = () => gulp.series(gulp.parallel(gulp.series(catalogSassCss, catalogCss), catalogJs), catalogWatch);
const Product           = () => gulp.series(gulp.parallel(gulp.series(productSassCss, productCss), productJs), productWatch);
exports.Home            = Home();
exports.Catalog         = Catalog();
exports.Product         = Product();
exports.Build           = gulp.parallel(Home(), Catalog(), Product());
