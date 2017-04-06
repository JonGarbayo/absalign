# v0.0.8 (2017/03/29)
## Features
- Added strict classes: classes with no (or at least "the minimum") ``transform`` properties.

## Improvements
- (breaking change) Removed unnecessary fixed pseudo-elements classes (``like .fix-left-before``): same effect than absolute position. Also removed pseudo-element position selector from demo (always absolute from now on).

## Maintenance
- Updated selectize plugin.
- Updated dependencies.

## Demo
- Refactored the BEM tree in demo to a cleaner and more... "BEM" one.
- Added checkboxes to show the strict classes feature.

## Other
- Replaced all "framework" words by the "library" one: actually, absalign is not really a framework...


# v0.0.7 (2016/11/18)
## Maintenance
- Updated dependencies.

## Fixes
- Fixed the misalignment on webkit browsers with fullscreened elements (like YouTube embed videos).
When an element is fullscreened, webkit browsers reset some properties, like top, bottom, etc. but not the ``transform`` one.

## Other
- Updated README to show the single axis classes usage.


# v0.0.6 (2016/11/06)
## Improvements
- Demo is now online and accessible from README with just one click!

## Maintenance
- Refactored demo code respecting ITCSS principles, BEM notation and the CSS namespaces from CSS wizardry [http://csswizardry.com](http://csswizardry.com "CSS Wizardry, Harry Roberts website"). Thanks Harry Roberts for your great articles!
- Transformed the main behavior of the demo in JS Object style.

## Fixes
- Fixed titles alignment in demo.

## Demo
- Updated logo in demo from PNG to SVG.
- Added normalize.css to the demo.
- Renamed HTML demo file to index.html.
- Moved the dist HTML demo file to the package root, to be accessed *via* GitHub pages.
- Used selectize.js to style select controls in demo.
- Put the demo controllers above the demo show zone, instead of below, to prevent scroll issues on select controls opening.
- Some UI fixes in demo.
- Change font in demo from Arial to Open Sans.


# v0.0.5 (2016/08/28)
## Maintenance
- Split grunt tasks in multiple files (one by task), and added generous header comments.
- Refactored the grunt tasks: a little bit more operations, but more logical process.
- Refactored the file structure of the demo (with some file concatenation).
- Added grunt-css-important, to automatically add ``!important`` label to every property of the package CSS file.


# v0.0.4b (2016/07/08)
## Fixes
- Fixed broken absalign logo in README.md (damn...).


# v0.0.4 (2016/07/08)
## Maintenance
- Set two folders for the demo, on a Bower way: ``src`` and ``dist``, as for main package (why not, mmmh ?).
- Added minification tasks for the demo files (HTML, CSS and JS).
- Created two sub-grunt-tasks: buildPackage and buildDemo, to build faster depending on needs.
- Set autoprefixer for the demo.
- Now using the load-grunt-tasks module instead of loading each tasks by hand, in Gruntfile.js.
- Added grunt-time task, to play with grunt tasks performances.
- Updated npm modules.

## Fixes
- The demo is again more cross-browser, thanks to jQuery.

## Other
- Redesigned the demo: now it's pretty ;) (but it's not the end)).
- In demo, added the package version.
- In README.md, centered the absalign logo.


# v0.0.3b (2016/06/14)
## Fixes
- Fixed utilities classes was not positioned, sorry :().
- Fixed some typos in README.md and CHANGELOG.md.


# v0.0.3 (2016/06/09)
## Fixes
- Fixed the classes conflicts due to the CSS selectors like ``[class*='abs-']``.
- Added support for IE8 (the one browser which understands only single colon pseudo-elements --').

## Maintenance
- With SCSS, added some scripts to generate the classes names. Thanks to this, the classes conflicts had been removed really properly ;).
- Removed pre-prefixed properties, used the autoprefixer Grunt task instead.

## Features
- Added more utilities classes, one for each value of each axis.


# v0.0.2c (2016/05/20)
## Fixes
- Added some stuff to get the demo more cross-browser.
- Added missing pseudo-elements case in demo.
- Fixed some mistyped pseudo element classes, like ``abs-left-top-before``, which was not working... (sorry :|).
- Added ``!important`` labels to force absalign rules to be used.

## Other
- Added the logo to the demo.


# v0.0.2b (2016/05/03)
## Fixes
- Fixed a typo in README.md.
- Fixed the pseudo-elements was not positioned (sorry :|).


# v0.0.2 (2016/04/28)
## Features
- Added pseudo-elements support, adding ``-before`` or ``-after`` at the end of absalign class names.
- Added minified files to the repo: ``absalign.min.css`` and ``absalign.min.js``.

## Maintenance
- Added the use of a CSS preprocessor: SCSS. Easier to maintain and to support old browser, with prefixes ;).
- Set two folders, on a Bower way: ``src`` and ``dist``.
- Set Grunt tasks with the Gruntfile.js:
  - Compile SCSS to CSS.
  - Clean, with CSSComb, the compiled CSS ;).
  - Minify CSS and JS.
- Added a CHANGELOG.md.

## Other
- Created a logo :).
- Completed the README.md.
- Added header comments to dist files.


# v0.0.1 (2016/02/29)
Initial release.
