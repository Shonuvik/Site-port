# postcss-gap-grid-prefix [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">][postcss]

[![CSS Standard][css-img]][css-url]
[![NPM Version][npm-img]][npm-url]
[![Linux Build Status][cli-img]][cli-url]
[![Windows Build Status][win-img]][win-url]
[![Greenkeeper][gkp-img]][gkp-url]
[![Gitter Chat][git-img]][git-url]

[postcss-gap-grid-prefix] lets you use `gap|row-gap|column-gap` to replace legacy `grid-*` prefixed properties in CSS, following the
[CSS Box Alignment Module Level 3] specification.

```css
.container {
  gap: 42px 1vmin;
  row-gap: 42px;
  column-gap: 1vmin;
}

/* becomes */

.container {
  grid-gap: 42px 1vmin;
  gap: 42px 1vmin;
  grid-row-gap: 42px;
  row-gap: 42px;
  grid-column-gap: 1vmin;
  column-gap: 1vmin;
}
```

## Usage

Add [postcss-gap-grid-prefix] to your build tool:

```bash
npm install postcss-gap-grid-prefix --save-dev
```

#### Node

Use [postcss-gap-grid-prefix] to process your CSS:

```js
import postcssGapGridPrefix from 'postcss-gap-grid-prefix';

postcssGapGridPrefix.process(YOUR_CSS);
```

#### PostCSS

Add [PostCSS] to your build tool:

```bash
npm install postcss --save-dev
```

Use [postcss-gap-grid-prefix] as a plugin:

```js
import postcss from 'postcss';
import postcssGapGridPrefix from 'postcss-gap-grid-prefix';

postcss([
  postcssGapGridPrefix(/* options */)
]).process(YOUR_CSS);
```

#### Gulp

Add [Gulp PostCSS] to your build tool:

```bash
npm install gulp-postcss --save-dev
```

Use [postcss-gap-grid-prefix] in your Gulpfile:

```js
import postcss from 'gulp-postcss';
import postcssGapGridPrefix from 'postcss-gap-grid-prefix';

gulp.task('css', () => gulp.src('./src/*.css').pipe(
  postcss([
    postcssGapGridPrefix(/* options */)
  ])
).pipe(
  gulp.dest('.')
));
```

#### Grunt

Add [Grunt PostCSS] to your build tool:

```bash
npm install grunt-postcss --save-dev
```

Use [postcss-gap-grid-prefix] in your Gruntfile:

```js
import postcssGapGridPrefix from 'postcss-gap-grid-prefix';

grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
  postcss: {
    options: {
      use: [
       postcssGapGridPrefix()
      ]
    },
    dist: {
      src: '*.css'
    }
  }
});
```

[css-url]: Todo
[css-img]: Todo
[npm-url]: https://www.npmjs.com/package/postcss-gap-grid-prefix
[npm-img]: https://img.shields.io/npm/v/postcss-gap-grid-prefix.svg
[cli-url]: https://travis-ci.com/JLHwung/postcss-gap-grid-prefix
[cli-img]: https://travis-ci.com/JLHwung/postcss-gap-grid-prefix.svg?branch=master
[win-url]: https://ci.appveyor.com/project/JLHwung/postcss-gap-grid-prefix
[win-img]: https://img.shields.io/appveyor/ci/JLHwung/postcss-gap-grid-prefix.svg
[gkp-url]: https://greenkeeper.io/
[gkp-img]: https://badges.greenkeeper.io/JLHwung/postcss-gap-grid-prefix.svg
[git-url]: https://gitter.im/postcss/postcss
[git-img]: https://img.shields.io/badge/chat-gitter-blue.svg

[CSS Box Alignment Module Level 3]: https://drafts.csswg.org/css-align-3/#gap-legacy
[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[postcss-gap-grid-prefix]: https://github.com/JLHwung/postcss-gap-grid-prefix
[PostCSS]: https://github.com/postcss/postcss
