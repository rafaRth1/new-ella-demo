const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

let htmlPageNames = ["index", "example2", "example3", "example4"];

/* let multipleHtmlPlugins = htmlPageNames.map((name) => {
	return new HtmlWebpackPlugin({
		template: `./src/${name}.html`, // relative path to the HTML files
		filename: `${name}.html`, // output HTML files
		chunks: [`${name}`], // respective JS files
	});
});
 */
module.exports = {
	mode: "development",
	devtool: "inline-source-map",
	entry: {
		entry: "./src/index.ts",
	},

	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},

	devServer: {
		watchFiles: ["src/**/*"],
		liveReload: true,
	},

	module: {
		rules: [
			{
				test: /\.html$/i,
				use: [
					{
						loader: "html-loader",
						options: {
							minimize: true,
						},
					},
				],
			},
			{
				test: /\.(s(a|c)ss)$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: "ts-loader",
			},

			// Generando los diferentes tipos de archios de img en su propia carpeta
			{
				test: /\.(png|jpg|jpeg|gif)$/i,
				type: "asset/resource",
				generator: {
					filename: "assets/[name][ext][query]",
				},
			},

			// Generando a los archivos .svg en su propia carpeta
			{
				test: /\.svg$/i,
				type: "asset/resource",
				generator: {
					filename: "assets/svg/[name][ext][query]",
				},
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "./index.html",
			/* chunks: ["main"], */
		}),

		new MiniCssExtractPlugin({
			filename: "style.css",
		}) /* .concat(multipleHtmlPlugins) */,
	],
};
