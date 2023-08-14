# Readme

- This is a fork of https://kylelogue.github.io/mustard-ui
- The original package.json throws a node-sass error since it's not updated
- The current package.json works for me in 2023
- I've updated some of the config in gulpfile and package.json so it doesn't throw errors on build
- I use this project as a base UI framework for simple / micro websites due it's simplicity,clarity, user friendliness, and general ease of use

## Serving with gulp

> This will serve the website locally

```
npm install
gulp
```

## Compiling as Dist

```
npm run build
```

## Development Notes

After exploring for a while, we discovered the best way to replace scss variables while compiling the dist is to use https://github.com/giowe/gulp-sass-vars

We tried gulp-replace but proved too tricky to form the regex to do so.

We tried gulp-sass-variables but it did not work properly.

### User Prompts

We've decided to go with "enquirer" instead of "inquirer" for ease of implementation.