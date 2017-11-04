
module.exports = {
    entry:'./main.js',
    output:{
        path:__dirname,
        filename:'./dist/bundle.js',
        libraryTarget: 'var',
        library: 'acordeonl'
    }
}