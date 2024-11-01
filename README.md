# ELENISM WEDDING COMPONENT PACKAGE
Elenism is a package of pre-built and pre-styled drag and drop components for quickly building wedding websites on a React and TailwindCSS base.

## How To Setup the Project
1. Clone the project with SSH Key using the ```git clone git@github.com:NickAz123/elenism-kit.git```
2. Run ```npm install``` to install all dependencies

## How To Update, Change and Test Package
If you are planning to create additional components for the package, do so by creating new ```.jsx``` components in the ```./components``` folder. Export that components in the ```index.js``` file, show below.
![image](https://github.com/user-attachments/assets/c0c228de-20e4-4bb8-8e5c-5deaf243b2a2)

Afterwords, compile the package using ```npm run build```

Then use ```npm link``` to deploy the package locally to test

On a _separate project_, you can use ```npm link elenism-kit``` to install the package from local. This is how you can test your exported components.

