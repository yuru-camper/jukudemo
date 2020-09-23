module.exports = {
    publicPath: './jukudemo',
    outputDir: 'docs',
    filenameHashing: false,
    productionSourceMap: false,
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/variables.scss";`
            }
        }
    }
}