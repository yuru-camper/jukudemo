module.exports = {
    publicPath: '/jukudemo',
    outputDir: 'docs',
    assetsDir: "",
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