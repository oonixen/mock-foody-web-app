import { merge } from "webpack-merge";
import baseWebpackConfig from "./webpack.base.config";
import * as MiniCssExtractPlugin from "mini-css-extract-plugin";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration } from "webpack";

const prodWebpackConfig = (env) => {
    const config = baseWebpackConfig(env);

    return merge<Configuration>(config, {
        mode: "production",
        output: {
            filename: "[name].[contenthash].js",
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].[contenthash].css",
            }),
            new HtmlWebpackPlugin({
                // @ts-ignore
                template: `${config.externals.path.src}/index.html`,
            }),
        ],
    });
};

module.exports = new Promise((resolve) => {
    resolve(prodWebpackConfig);
});
