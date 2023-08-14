# Readme

- This is a fork of https://kylelogue.github.io/mustard-ui
- The original package.json throws a node-sass error since it's not updated
- The current package.json works for me in 2023
- I've updated some of the config in gulpfile and package.json so it doesn't throw errors on build
- I use this project as a base UI framework for simple / micro websites due it's simplicity,clarity, user friendliness, and general ease of use

## Serving with gulp

> This will serve the website locally.

- Note that this will use the default theme variables

```
npm install
gulp
```

## Compiling as Dist

```
npm run build
```

## Responsive Mobile Menu

> Remember to load the mobile-menu.js script and Jquery as well

```
<!-- NAVBAR -->
<nav>
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Logo</a>
        </div>
        <ul class="nav-links">
            <li><a class="active" href="/docs/installation">Docs</a></li>
            <li><a href="https://github.com/kylelogue/mustard-ui" target="_blank">GitHub</a></li>
            <li><a href="/support">Support</a></li>
        </ul>
        <a class="mobile-menu-toggle"></a>
        <ul class="mobile-menu menu" style="display: none;">
            <li><a href="../installation/index.html">Docs</a></li>
            <li><a href="https://github.com/kylelogue/mustard-ui" target="_blank">GitHub</a></li>
        </ul>
    </div>
</nav>
```

## Development Notes

After exploring for a while, we discovered the best way to replace scss variables while compiling the dist is to use https://github.com/giowe/gulp-sass-vars

We tried gulp-replace but proved too tricky to form the regex to do so.

We tried gulp-sass-variables but it did not work properly.

### User Prompts

We've decided to go with "enquirer" instead of "inquirer" for ease of implementation.

