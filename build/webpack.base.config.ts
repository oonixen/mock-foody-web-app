import * as path from "path";
import * as MiniCssExtractPlugin from "mini-css-extract-plugin";
import * as CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import * as webpack from "webpack";
import { Configuration } from "webpack";
import * as CopyWebpackPlugin from "copy-webpack-plugin";

const PATHS = {
    src: path.join(__dirname, "../src"),
    dist: path.join(__dirname, "../dist"),
};

const config = (env): Configuration => {
    return {
        stats: {
            children: false,
        },
        externals: {
            path: PATHS,
        },
        performance: {
            hints: false,
        },
        resolve: {
            modules: ["src", "node_modules"],
            extensions: [".ts", ".tsx", ".js", ".scss"],
        },
        entry: {
            app: `${PATHS.src}/index.tsx`,
        },
        optimization: {
            minimizer: ["...", new CssMinimizerPlugin()],
        },
        output: {
            publicPath: "/",
            path: PATHS.dist,
            clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.scss$/i,
                    exclude: /node_modules/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                modules: {
                                    localIdentName: "[local]",
                                },
                            },
                        },
                        "sass-loader",
                        "postcss-loader",
                    ],
                },
                {
                    test: /\.ts[x]?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: "asset/resource",
                    generator: {
                        filename: "fonts/[name][ext][query]",
                    },
                },
            ],
        },
        plugins: [
            new webpack.DefinePlugin({
                WEBPACK_SERVER_LINK: returnServerLink(env.server),
                WEBPACK_FRONT_LINK: returnFrontLink(env.server),
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: `${PATHS.src}/assets`,
                        to: `${PATHS.dist}`,
                    },
                    // Fonts:
                    {
                        from: `${PATHS.src}/assets/fonts/`,
                        to: `${PATHS.dist}/fonts`,
                    },
                ],
            }),
        ],
    };
};

export default config;

function returnServerLink(flag) {
    //devServer
    let answer = "";

    switch (flag) {
        case "testServer":
            answer = "https://polyana1c.ru:25404/DK_CRM/hs/data";
            break;
        case "stopLight":
            answer = "https://stoplight.io/mocks/polyana/foody-api/41478668";
            break;
        case "local":
            answer = "http://localhost:3001/DK_CRM/hs/data";
            break;
    }

    return JSON.stringify(answer);
}

function returnFrontLink(flag) {
    //dev
    let answer = "http://localhost:8080";

    if (flag === "prod") answer = "";

    return JSON.stringify(answer);
}
