const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';
  // В prod к именам добавляем хеш содержимого: браузер кеширует файлы навсегда,
  // а после изменения кода получает новое имя и не показывает старую версию
  const hash = isProd ? '.[contenthash:8]' : '';

  return {
    mode: isProd ? 'production' : 'development',
    entry: './src/index.js',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: `js/[name]${hash}.js`,
      assetModuleFilename: `assets/[name]${hash}[ext]`,
      // GitHub Pages отдаёт проект из подпапки /webpack-ozon/, а dev-server из корня
      publicPath: isProd ? '/webpack-ozon/' : '/',
      // Удаляем старые файлы перед сборкой, чтобы в dist не копились старые хеши
      clean: true,
    },

    // В dev нужны отдельные .map, чтобы в DevTools видеть исходный JS и SCSS.
    // В prod карты не публикуем
    devtool: isProd ? false : 'source-map',

    module: {
      rules: [
        {
          // Цепочка выполняется справа налево: sass → css-loader → отдельный .css
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          // Шаблон разбирает html-loader: фавиконки из <link> попадают в сборку
          test: /\.html$/i,
          loader: 'html-loader',
        },
        {
          // Картинки из SCSS и HTML копируются в dist/assets, в коде подставляется итоговый путь
          test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
          type: 'asset/resource',
        },
        {
          // Шрифты тоже как файлы. Флаг /i нужен, потому что расширения в репозитории .OTF
          test: /\.(woff2?|ttf|otf|eot)$/i,
          type: 'asset/resource',
          generator: { filename: `fonts/[name]${hash}[ext]` },
        },
        {
          test: /\.webmanifest$/i,
          type: 'asset/resource',
        },
      ],
    },

    plugins: [
      // Берёт index.html как шаблон и сам вставляет ссылки на собранные CSS и JS
      new HtmlWebpackPlugin({ template: './index.html' }),
      new MiniCssExtractPlugin({ filename: `css/[name]${hash}.css` }),
      // Пути к фото товаров записаны строками в db.json, и webpack их не видит.
      // Поэтому папку копируем как есть, без хешей, чтобы пути из JSON продолжали работать
      new CopyPlugin({ patterns: [{ from: 'img/goods', to: 'img/goods' }] }),
    ],

    optimization: {
      // '...' оставляет встроенный Terser для JS, CssMinimizer добавляет сжатие CSS
      minimizer: ['...', new CssMinimizerPlugin()],
    },

    devServer: {
      // db.json отдаётся через webpack как ассет, так что раздавать папку проекта не нужно
      static: false,
      port: 8080,
      open: true,
      hot: true,
    },
  };
};
