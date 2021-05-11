# Explore React Spring - exploratory space for React Spring experiments
Explore React Spring is an app that serves mostly as an exploratory space for experimenting with React Spring library. The app documents experiments in an effort to figure out what React Spring does and how it works.

## Goals and Objectives
I undertook this project to expand my web development toolset. I thought it would be good to learn React Spring so I can have more choices when making design decisions as it pertains to UX/UI.


## View Explore React Spring
demo - https://juliennecodes.github.io/explore-react-spring/


## Setup
- go to project folder
- type command - npm install

## Running the App Locally
- type command - npm start

## Tests
- type command - npm test

## Deploy App in GitHub Pages
- type command - npm install gh-pages --save -dev
- add "homepage": "https://juliennecodes.github.io/explore-react-spring", in package.json
  - add homepage property
  - homepage property's value is the GitHub Pages url
- add "predeploy": "npm run build", "deploy": "gh-pages -d build" in the scripts property
  - predeploy - builds a minified app for deployment, is initiated after the deploy script runs
  - deploy - deploys the app
- type command - npm run deploy
- select gh-pages branch as the source for the GitHub Pages site
  - open Github repository
  - go to settings
  - go to Pages section
  - in the Source section, select gh-pages as the branch

