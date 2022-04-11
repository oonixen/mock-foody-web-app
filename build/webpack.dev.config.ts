import { merge } from "webpack-merge";
import baseWebpackConfig from "./webpack.base.config";
import * as MiniCssExtractPlugin from "mini-css-extract-plugin";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration } from "webpack";

const devWebpackConfig = (env) => {
    const config = baseWebpackConfig(env);

    return merge<Configuration>(config, {
        mode: "development",
        devtool: "inline-source-map",
        // @ts-ignore
        devServer: {
            historyApiFallback: true,
            // @ts-ignore
            static: config.externals.path.dist,
            client: {
                overlay: {
                    warnings: true,
                    errors: true,
                },
            },
        },
        output: {
            filename: "[name].js",
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].css",
            }),
            // @ts-ignore
            new HtmlWebpackPlugin({
                // @ts-ignore
                template: `${config.externals.path.src}/indexDev.html`,
            }),
        ],
    });
};

module.exports = new Promise((resolve) => {
    resolve(devWebpackConfig);
});
