const path = require('path');
const merge = require('webpack-merge');

const resolve = (dir) => path.resolve(__dirname, '..', dir);

const join = (dir) => path.join(__dirname, '/../', dir);

const localesEntry  = (...locales) => locales.reduce((entry, locale) => {
    entry[`locales/${locale}`] = `locale_loader?${locale}!`;
    return entry;
}, {})

const PATH = {
    app: resolve('src'),
    build: resolve('dist'),
    root: resolve('.'),
    node_modules: resolve('node_modules')
};

const moduleWrapper = (result) => {
    return result
};

const localLLReact = (localLLReact) => localLLReact && merge(moduleWrapper({
    test: /\.js$/,
    inClude: /docs-react-ui\/src/,
    use: 'babel-loader'
}), {
    resolve: {
        alias: { 'll-react': resolve('../ll-react') }
    }
});


exports.resolve = resolve;
exports.join = join;
exports.localesEntry =localesEntry;
exports.PATH = PATH;