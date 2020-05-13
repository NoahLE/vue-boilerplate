const path = require("path")

module.exports = {
    mode: "development",
    entry: "./src/index",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../dist")
        
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [ path.resolve(__dirname, "src")]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".css"],
        modules: ["node_modules", path.resolve(__dirname, "src")],
    },
    performance: {
        hints: false
    },
    devtool: "source-map",
    target: "web",
    stats: "errors-only"
}