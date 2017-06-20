<p align="center">
	<img src="absalign-logo.png" alt="absalign logo" title="absalign logo"/>
</p>

# What?
Absalign is a micro CSS library you can use to **align vertically and horizontally** fixed or absolute elements just with some **simple classes**!

Check the demo **[here](http://jongarbayo.github.io/absalign "absalign demo page.")**!

# Why?
Web dev, we all know the pain of vertically centering elements... It must be cross-browser, responsive, easy to maintain, well coded, without using JavaScript, etc.

Here is what I propose: a micro CSS library to **vertically and horizontally** center elements with a **great and simple technique**.
It's:
- cross-browser
- responsive
- easy to maintain
- well coded
- without JavaScript... hum, almost! Read next parts.

# How …
## … to use it?
Let's compose a class.

### Position
First, you have to decide if you want your element to be in an absolute or fixed position. For this, use one of these prefixes:
- abs
- fix

### X Axis
Second, you have to choose a value for the X axis. Here are the three you can use:
- left
- center
- right

### Y Axis
Finally, you have to define the value for the Y axis, which have to be one of these:
- top
- middle
- bottom

Separate these three parts by an hyphen ``-`` and you've got your class :)

### Pseudo-elements (optional)
Also, if you want to **apply the effect to a pseudo-element**, add ``-before`` or ``-after`` at the end of the class name.

### ``.absalign-animate`` (optional)
As absalign classes uses **the most simple positioning** most of the time (with ``top``, ``left``, ``right`` and ``bottom`` properties), they are **not always animatable** if you switch them.

In fact, you can't apply a CSS transition between **two different properties** (like ``left`` and ``right`` for example).

To use only ``top``, ``left`` and ``transform`` properties (so, to be sure you can apply **smooth CSS transitions**), add the ``.absalign-animate`` class to the desired element. To apply the effect to a pseudo-element, just add ``-before`` or ``-after`` at the end of this class name.

### Single axis classes
If you need absalign for only **one axis** (like the middle one, mmmh?), a second one is optional.

### Some examples
```html
<div class="abs-center-middle">Absolute with two axes</div>
```

```html
<div class="abs-left">Absolute with one axis</div>
```

```html
<div class="fix-right-top">Fixed with two axes</div>
```

```html
<div class="abs-center-middle-before">Before pseudo-element absolute with two axes</div>
```

```html
<div class="fix-right-top absalign-animate">Fixed and animatable with two axes</div>
```

```html
<div class="abs-right-bottom-after absalign-animate-after">After pseudo-element absolute and animatable with two axes</div>
```

### Container
There is also an "E.T." class, ``absalign-container``, which give a ``position: relative;`` to the desired container.

Like this:
```html
<div class="absalign-container">
	<h1 class="abs-center-middle">absalign is in da place!</h1>
</div>
```

### JavaScript polyfill
The use of JavaScript here is to **simulate the CSS3 ``transform`` property**, which is **the core if this package** (read next part, "How does it works", to learn more about it).
**Old browsers** like IE8 or old version of Chrome and Firefox **doesn't understand it**, even with prefixes. I know these versions are not really in use today (except IE, ha ha... damn :|), but I chose to support them.

The polyfill will **only be active on browsers which doesn't support the ``transform``**. But you're free to not include it, if you don't mind about Prehistory ;)

**Note:** This polyfill is not available for the moment. Will be in a future release ;)

## … does it works?
### The old-fashion technique
I suppose you know this very famous "static" technique which consists in giving a ``top: 50%;`` to the desired element and also **a negative margin-top equal to the half of it's height**. And it works very well!

Example:
```css
.nice-div
{
	top: 50%;

	width: 200px;
	height: 200px;
	margin-top: -100px;
}
```

But there are a few cons with it:
- you must know the **element height**
- you **can't have a dynamic content**, because height is static (or you have to use some JS tricks)
- it's annoying to maintain (I didn't say "hard", just annoying ;)

### The modern technique
Well, in this library, I used the ``transform: translate();`` **CSS3** function.
As the 4 position properties are based on the **closest relative parent dimensions** (or the viewport dimensions for the fixed elements), ``top: 50%;`` will push the element **top border** at the middle of the page.

But all the transforms functions are **based on the element dimensions**. So, by writing something like ``transform: translateY(-50%);``, the element will be pushed to the top by **the half of it's height**. Yes: with percentages, so on a **dynamic way**! Oww yeah :o!

Applying on our previous ``.nice-div``:
```css
.nice-div
{
	top: 50%;

	width: 200px;
	height: 200px;

	transform: translateY(-50%);
}
```

This technique can also (of course) be applied to the X axis, with ``transform: translateX(-50%)``, or both axes at the same time, with ``transform: translate(-50%, -50%)``.

I added the other classes described in the "How to use it?" part to get a more complete set of positions.
