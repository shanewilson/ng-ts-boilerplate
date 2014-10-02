module.exports = function (config) {

    config.set({
        frameworks: ['mocha', 'chai-sinon'],
        browsers: ['PhantomJS'],
        plugins: [
            'karma-mocha',
            'karma-typescript-preprocessor',
            'karma-phantomjs-launcher',
            'karma-chai-sinon'
        ],
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/lodash/dist/lodash.js',
            'dist/js/templates.js',
//            'app/scripts/home/module.ts',
//            'app/scripts/home/home.controllers.ts',
//          'app/scripts/components/header/module.ts',
//          'app/scripts/components/header/header.controller.ts',
//          'app/scripts/components/header/header.directive.ts',
            'app/scripts/**/*.ts',
//            'app/scripts/**/!(module).ts',
            'app/tests/unit/**/*.js'
        ],
        exclude: ['app/tests/integration/**/*.js'],
        preprocessors: {
            '**/*.ts': ['typescript']
        }
    });

};