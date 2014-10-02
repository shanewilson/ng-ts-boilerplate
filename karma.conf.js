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
            'app/scripts/**/*.ts',
            'app/tests/unit/**/*.js'
        ],
        exclude: ['app/tests/integration/**/*.js'],
        preprocessors: {
            '**/*.ts': ['typescript']
        }
    });

};