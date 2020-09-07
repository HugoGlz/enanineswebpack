const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: path.join(__dirname, 'src', 'js', 'index.js'), /*  ./src/js/index.js */
        contact: path.join(__dirname, 'src', 'js', 'contact.js'), /*  ./src/js/contact.js */
        users: path.join(__dirname, 'src', 'js', 'users.js'), /*  ./src/js/users.js */
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    }
}