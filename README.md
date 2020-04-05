Section 1 --- webpack config</br>
step 1: npm init</br>
step 2: npm install -D webpack</br>
step 3: create "entry.js" "index.html(use bundle.js)"</br>
step 4: create "webpack.config.js"</br>
step 5: use cmd 'webpack' to generate package js(bundle.js)</br>
 </br>
Section 2 --- loader (webpack only pack js, use loader translate other resource to js)</br>
step 1: create style.css</br>
step 2: npm install -D css-loader style-loader</br>
step 3: add 'style-loader!css-loader' to 'webpack.config.js' rules</br>
 </br>
Section 3 --- es2015</br>
step 1: npm install -D babel-loader @babel/core</br>
 </br>
Section 4 --- webpack dev server</br>
step 1: npm install -D webpack-cli webpack-dev-server</br>
step 2: run cmd 'webpack-dev-server'</br>
 </br>
Section 5 --- react</br>
step 1: npm install -D react react-dom</br>
step 2: npm install -D @babel/preset-react</br>
step 3: add 'presets' for react in '.babelrc'</br>
 </br>
Section 6 --- react hot dev</br>
step 1: npm install -D react-hot-loader</br>
step 2: add 'react-hot-loader/webpack' in 'webpack.config.js' rules</br>
