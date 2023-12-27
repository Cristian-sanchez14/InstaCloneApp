# Initialize the project
$ npx react-native init InstagramPrepTS --template react-native-template-typescript

# CLI Commands
start development server
$ npm start
start a clean, fresh development server by resetting the cache
$ npm start -- --reset-cache
run the app on an android device/emulator
$ npm run android
Install Pods (macOS users only)
$ npx pod-install ios 
run the app on an iOS device/simulator
npm run ios
 

babel.config.js
module.exports = {
 presets: [
   [
     'module:metro-react-native-babel-preset',
     {useTransformReactJSXExperimental: true},
   ],
 ],
 plugins: [
   [
     '@babel/plugin-transform-react-jsx',
     {
       runtime: 'automatic',
     },
   ],
 ],
};
 

# Update
If you are creating a new project (react native version >= 0.71),  then you do not need to add typescript template in the command line. Just run, npx react-native init Instagram

 

Same with babel.config.js file, you should not need to add anything in this file and you can run your app without importing react. However the eslint may give you yellow warning on your code, just add the following rules here

 

module.exports = {

  root: true,

  rules: {

  // suppress errors for missing 'import React' in files

  'react/react-in-jsx-scope': 'off',

  // allow jsx syntax in js files (for next.js project)

  'react/jsx-filename-extension': [

  1,

 { extensions: ['.js', '.jsx', '.ts', '.tsx']},

 ], 

 },

  extends: '@react-native-community',

};

# Resources
Introducing the new JSX Transform
Setup the new JSX Transform in React Native
Run the app on a physical device



b0e6dbcd

c4076e4e