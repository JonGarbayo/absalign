#What?
Absalign is a micro CSS framework you can use to align verticaly and horizontaly fixed or absolute elements just with some simple classes!

#Why?
Web dev, we all know the pain of verticaly centering elements... It must be cross-browser, responsive, easy to maintain, well coded, without using JavaScript, etc.
The great ``flex`` implementation is coming cross-browser, we have to be patient. But we have to wait for it using other techniques.

Here is what I propose: a micro CSS framework to verticaly and horizontaly center elements with a great and simple technique.
It's:
- cross-browser
- responsive
- easy to maintain
- well coded
- without JavaScript... hum, almost! Read next parts.

#How …
## … to use it?
Let's compose a class.

###Position
First, you have to decide if you want your element to be in an absolute or fixed position. For this, use one of these prefixes:
- abs
- fix

###X Axis
Second, you have to choose a value for the X axis. Here are the three you can use:
- left
- center
- right

###Y Axis
Finally, you have to define the value for the Y axis, which have to be one of these:
- top
- middle
- bottom

Separate these three parts by a ``-`` and you've got your class :)

Some examples:
```html
<div class="abs-center-middle"></div>
```

```html
<div class="abs-left-bottom"></div>
```

```html
<div class="fix-right-top"></div>
```

There is also an "E.T." class, ``absalign-container``, which give a ``position: relative;`` to the desired container.

## … does it work?
<!-- TODO -->
