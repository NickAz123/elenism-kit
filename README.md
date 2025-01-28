# ELENISM WEDDING COMPONENT PACKAGE
Elenism is a package of pre-built and pre-styled drag and drop components for quickly building wedding websites on a React and TailwindCSS base.

## How To Setup the Project
1. Clone the project with SSH Key using the ```git clone git@github.com:NickAz123/elenism-kit.git```
2. Run ```npm install``` to install all dependencies

## How To Update, Change and Test Package
If you are planning to create additional components for the package, do so by creating new ```.jsx``` components in the ```./components``` folder. Export that components in the ```index.js``` file, show below.
![image](https://github.com/user-attachments/assets/c0c228de-20e4-4bb8-8e5c-5deaf243b2a2)

Afterwords, compile the package using ```npm run build```

## How to test package using a local React App
### Simulating the NPM link
On the _elenism-kit_ project, use ```npm link``` to deploy the package locally to test

On a _separate project_, you can use ```npm link elenism-kit``` to install the package from local. This is how you can test your exported components.

### Using an internal testing App and Symlinks
Navigate to the internal _testing-app_ and run ```npm install``` to install dependencies. _firebase_ will need to be installe as well.

In the _src_ folder, run the following command for both the component and js level folders outside the project file.
```ln -s ../../components components```
```ln -s ../../js js```

These will create SYM-LINKS within the internal _testing-app_, allowing you to use components and functions from outside the applications folder.

You should now be able to use and import the components into _app.js_

## DEPENDECIES LIST

# Dependencies included
Firebase 11.0.1

# Developer Dependencies
@Babel
- Cli 7.25.9
- Core 7.26.0
- Preset-env 7.26.0
- Preset-react 7.25.9

Autoprefixer 10.4.20

Babel-loader 9.2.1

Css-loader 7.1.2

PostCSS 8.4.47

Postcss-Loader 8.1.1

Prop-types 15.8.1

React 18.3.1

Style-loader 4.0.0

SWR 2.2.5

TailwindCSS 3.4.14

Webpack 5.96.0

Webpack-cli 5.1.4
