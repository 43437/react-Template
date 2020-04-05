Section 1 --- webpack config
step 1: npm init
step 2: npm install -D webpack
step 3: create "entry.js" "index.html(use bundle.js)"
step 4: create "webpack.config.js"
step 5: use cmd 'webpack' to generate package js(bundle.js)
 
Section 2 --- loader (webpack only pack js, use loader translate other resource to js)
step 1: create style.css
step 2: npm install -D css-loader style-loader
step 3: add 'style-loader!css-loader' to 'webpack.config.js' rules
 
Section 3 --- es2015
step 1: npm install -D babel-loader @babel/core
 
Section 4 --- webpack dev server
step 1: npm install -D webpack-cli webpack-dev-server
step 2: run cmd 'webpack-dev-server'
 
Section 5 --- react
step 1: npm install -D react react-dom
step 2: npm install -D @babel/preset-react
step 3: add 'presets' for react in '.babelrc'
 
Section 6 --- react hot dev
step 1: npm install -D react-hot-loader
step 2: add 'react-hot-loader/webpack' in 'webpack.config.js' rules