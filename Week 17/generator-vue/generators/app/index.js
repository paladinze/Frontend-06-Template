var Generator = require('yeoman-generator');

module.exports = class extends Generator {

    // The name `constructor` is important here
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);

        // Next, add your custom code
        this.option('babel'); // This method adds support for a `--babel` flag

    }

    async initPackages() {
        const answer = await this.prompt([{
            type: "input",
            name: "name",
            message: "your project name: ",
            default: this.appname // use folder name as default
        }]);
        const pkgJson = {
                "name": answer.name,
                "version": "1.0.0",
                "description": "",
                "main": "index.js",
                "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1"
                },
                "author": "",
                "license": "ISC",
                "dependencies": {}
            }
        ;

        this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
        this.npmInstall(["vue"], {'save-dev': false});
        this.npmInstall(["webpack", "vue-loader", "vue-template-compiler"], {'save-dev': true});
        this.npmInstall(["vue-style-loader", "css-loader", "copy-webpack-plugin",], {'save-dev': true});

        this.fs.copyTpl(
            this.templatePath('HelloWorld.vue'),
            this.destinationPath('src/index.vue'),
            {},
        );
        this.fs.copyTpl(
            this.templatePath('webpack.config.js'),
            this.destinationPath('webpack.config.js'),
            {},
        );
        this.fs.copyTpl(
            this.templatePath('main.js'),
            this.destinationPath('src/main.js'),
            {},
        );
        this.fs.copyTpl(
            this.templatePath('index.html'),
            this.destinationPath('src/index.html'),
            {title: answer.name},
        );
    }
};