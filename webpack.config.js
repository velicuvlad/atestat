var path = require('path');

module.exports = {

    entry: {
        login: path.join(__dirname, 'src' , 'entry' , 'login.js'),
        register: path.join(__dirname, 'src', 'entry', 'register'),
        faqLogged: path.join(__dirname, 'src', 'entry', 'faqLogged'),
        faqNotLogged: path.join(__dirname, 'src', 'entry', 'faqNotLogged'),
        content: path.join(__dirname, 'src', 'entry', 'content'),
        index: path.join(__dirname, 'src','entry','index'),
        indexlogged: path.join(__dirname, 'src', 'entry', 'indexlogged'),
        content_filtered: path.join(__dirname, 'src', 'entry', 'contentfiltered'),
        contentnotloggedfiltered: path.join(__dirname, 'src', 'entry', 'contentnotloggedfiltered'),
        contentnotloggednewest: path.join(__dirname, 'src', 'entry', 'contentnotloggednewest'),
        contentnewest: path.join(__dirname, 'src', 'entry', 'contentnewest')
    },

    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
        publicPath: '/'
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
        ]
    }
}
