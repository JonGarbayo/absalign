#v0.0.3 (2016/06/09)
##Fixes
- Fixed the classes conflicts due to the CSS selectors like ``[class*='abs-']``
- Added support for IE8 (the one browser which understands only single colon pseudo-elements --')

##Maintenance
- With SCSS, added some scripts to generate the classes names. Thanks to this, the classes conflicts has been removed really properly ;)
- Removed pre-prefixed properties, used the autoprefixer Grunt task instead

##Features
- Added more utilities classes, one for each value of each axis


#v0.0.2c (2016/05/20)
##Fixes
- Added some stuff to get the demo more cross-browser
- Added missing pseudo-elements case in demo
- Fixed some mistyped pseudo element classes, like ``abs-left-top-before``, which was not working... (sorry :|)
- Added ``!important`` labels to force absalign rules to be used

##Other
- Added the logo to the demo


#v0.0.2b (2016/05/03)
##Fixes
- Fixed a typo in README.md
- Fixed the pseudo-elements was not positionned (sorry :|)


#v0.0.2 (2016/04/28)
##Features
- Added pseudo-elements support, adding ``-before`` or ``-after`` at the end of absalign class names
- Added minified files to the repo: ``absalign.min.css`` and ``absalign.min.js``

##Maintenance
- Added the use of a CSS preprocessor: SCSS. Easier to maintain and to support old browser, with prefixes ;)
- Set two folders, on a Bower way: ``src`` and ``dist``
- Set Grunt tasks with the Gruntfile.js:
  - Compile SCSS to CSS
  - Clean, with CSSComb, the compiled CSS ;)
  - Minify CSS and JS
- Added a CHANGELOG.md

##Other
- Created a logo :)
- Completed the README.md
- Added header comments to dist files


#v0.0.1 (2016/02/29)
Initial release
